(()=>{function init(){
 const main=document.querySelector('main'),tw=main?.querySelector('.tablewrap'),bar=document.querySelector('.scorebar,.score');
 if(!main||!tw||!bar)return;
 bar.classList.add('scorebar');
 const rows=[...document.querySelectorAll('tbody tr[data-n]')],actions=main.querySelector('.actions');
 const nativeSave=document.getElementById('save'),nativeReset=document.getElementById('reset');
 /* One common ribbon for all Hygiene Rating checklists. Preserve the original score/rating nodes so native audit logic remains untouched. */
 const w=bar.querySelector('.wrap')||bar;
 const ans=document.getElementById('ans'),score=document.getElementById('score'),max=document.getElementById('max'),pct=document.getElementById('pct'),rating=document.getElementById('rating')||document.getElementById('ratingOut'),cnc=document.getElementById('cnc');
 if(nativeSave)nativeSave.style.display='none';if(nativeReset)nativeReset.style.display='none';
 [...w.querySelectorAll('.draft-btn,.reset-btn,#pmsvHygSave,#pmsvHygReset')].forEach(e=>e.remove());
 w.innerHTML='';
 const add=t=>w.appendChild(document.createTextNode(t));
 add('Answered ');if(ans)w.appendChild(ans);add('/'+rows.length+' · Score ');if(score)w.appendChild(score);add('/');if(max)w.appendChild(max);add(' (');if(pct)w.appendChild(pct);add(') · Rating ');if(rating)w.appendChild(rating);add(' · ');
 const crit=document.createElement('span');crit.className='critical-ribbon';crit.append('Critical NC ');if(cnc)crit.appendChild(cnc);w.appendChild(crit);
 const saveBtn=document.createElement('button');saveBtn.id='pmsvHygSave';saveBtn.className='draft-btn';saveBtn.textContent='Save Draft';
 const resetBtn=document.createElement('button');resetBtn.id='pmsvHygReset';resetBtn.className='reset-btn';resetBtn.textContent='Reset';
 w.appendChild(saveBtn);w.appendChild(resetBtn);
 saveBtn.onclick=()=>{if(nativeSave){nativeSave.click();saveBtn.textContent='Saved ✓';setTimeout(()=>saveBtn.textContent='Save Draft',1400)}};
 resetBtn.onclick=()=>{
   if(nativeReset){nativeReset.click();return}
   if(!confirm('Reset this audit? All current entries will be cleared.'))return;
   document.querySelectorAll('.meta input').forEach(e=>e.value='');
   const d=document.getElementById('date');if(d)d.value=new Date().toISOString().slice(0,10);
   rows.forEach(r=>{const s=r.querySelector('select'),t=r.querySelector('textarea');if(s){s.value='';s.dispatchEvent(new Event('change',{bubbles:true}))}if(t)t.value=''});
 };
 /* Remove every legacy scoring/rating block and create exactly one top scoring table and one bottom rating table. */
 [...main.children].forEach(e=>{if(e===tw||e===actions||e.classList?.contains('meta')||e.id==='finish')return;const t=(e.textContent||'').trim();if(e.classList?.contains('hyg-rules')||e.classList?.contains('scoring')||e.classList?.contains('scoring-card')||e.classList?.contains('score-rules')||e.classList?.contains('rating-bottom')||((/Scoring|Scoring System/i.test(t))&&/Compliance|marks/i.test(t))||((/Hygiene Rating/i.test(t))&&/Excellent|Very Good|Poor|Urgent Improvement/i.test(t)))e.remove()});
 const top=document.createElement('section');top.className='hyg-rules';top.innerHTML='<h3>Scoring</h3><table class="rules-table"><thead><tr><th>Assessment</th><th>Normal Requirement</th><th>Critical Requirement (*)</th></tr></thead><tbody><tr><td><b>C — Compliance</b></td><td>2 marks</td><td>4 marks</td></tr><tr><td><b>PC — Partial Compliance</b></td><td>1 mark</td><td>Not permitted</td></tr><tr><td><b>NC — Non-Compliance</b></td><td>0 marks</td><td>0 marks</td></tr><tr><td><b>NA — Not Applicable</b></td><td colspan="2">Excluded from applicable maximum</td></tr></tbody></table>';
 main.insertBefore(top,tw);
 const ratingBlock=document.createElement('section');ratingBlock.className='rating-bottom';ratingBlock.innerHTML='<h3>Hygiene Rating</h3><table class="rating-table"><thead><tr><th>Rating</th><th>Category</th><th>Percentage Score</th></tr></thead><tbody><tr><td>5</td><td>Excellent</td><td>81–100%</td></tr><tr><td>4</td><td>Very Good</td><td>61–80%</td></tr><tr><td>3</td><td>Good</td><td>41–60%</td></tr><tr><td>2</td><td>Needs Improvement</td><td>21–40%</td></tr><tr><td>1</td><td>Poor</td><td>20% or below</td></tr></tbody></table><div class="critical-note">Failure of any Critical (*) requirement results in Non-Compliance and no Hygiene Rating.</div>';
 const finish=document.getElementById('finish');
 if(actions)main.insertBefore(ratingBlock,actions);else if(finish)main.insertBefore(ratingBlock,finish);else main.appendChild(ratingBlock);
 /* If the old Save Draft lived in the bottom actions, hide only it; keep Finish Audit. */
 if(actions&&nativeSave&&actions.contains(nativeSave))nativeSave.style.display='none';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init()})();