/* PMSV shared VISUAL UI layer only.
   IMPORTANT: this file must never calculate scores, ratings, grades, NCs,
   applicable maximums, or audit state. Each audit family keeps its own logic. */
(()=>{
 if(document.getElementById('pmsvCommonVisualUi'))return;
 const st=document.createElement('style');st.id='pmsvCommonVisualUi';st.textContent=`
:root{--pmsv-green:#0b6b53;--pmsv-green2:#0f8a68;--pmsv-line:#dce8e3}
*{box-sizing:border-box}body{font-family:system-ui,Arial,sans-serif!important;background:#f5faf8!important;color:#18231f}
header{background:linear-gradient(135deg,var(--pmsv-green),var(--pmsv-green2))!important;padding:22px 18px 28px!important;color:#fff!important}
header h1{font-family:system-ui,Arial,sans-serif!important;font-weight:700!important;line-height:1.12!important;margin:0!important}
.score,.scorebar{position:sticky!important;top:0!important;z-index:999!important;background:#fff!important;padding:9px 10px 13px!important;border:0!important;box-shadow:0 5px 18px rgba(25,70,55,.16)!important;font-family:system-ui,Arial,sans-serif!important;font-size:12px!important;font-weight:750!important;line-height:normal!important}
.score .wrap,.scorebar .wrap{max-width:1450px;margin:auto;white-space:nowrap}
.meta{background:#fff!important;border-radius:18px!important;box-shadow:0 5px 18px rgba(25,70,55,.06)!important;padding:22px!important}
.meta input,.meta select,input,select,textarea{font-family:system-ui,Arial,sans-serif!important}
.meta input,.meta select{border:1px solid #cbdad4!important;border-radius:10px!important;background:#fff!important;padding:11px!important}
.hyg-rules,.scoring,.scoring-card,.score-rules{background:#fff!important;border-radius:18px!important;padding:16px!important;box-shadow:0 5px 18px rgba(25,70,55,.06)!important;margin:18px 0!important}
.rules-table,.rating-table{width:100%!important;min-width:0!important;border-collapse:collapse!important;border-spacing:0!important;margin:0!important;background:#fff!important}
.rules-table th,.rules-table td,.rating-table th,.rating-table td{border:1px solid #d4e1dc!important;padding:9px 10px!important;background:#fff!important;border-radius:0!important;text-align:left!important}
.rules-table th,.rating-table th{background:#eaf4f0!important;font-weight:700!important}
.tablewrap{overflow:auto!important}
.tablewrap>table{border-collapse:separate!important;border-spacing:0 10px!important;background:transparent!important;font-family:system-ui,Arial,sans-serif!important}
.tablewrap>table>thead th{background:#dceee7!important;border:0!important;padding:11px!important;font-weight:700!important}
.tablewrap>table>thead th:first-child{border-radius:12px 0 0 12px}.tablewrap>table>thead th:last-child{border-radius:0 12px 12px 0}
.tablewrap>table>tbody>tr:not(.section)>td{border-top:1px solid var(--pmsv-line)!important;border-bottom:1px solid var(--pmsv-line)!important}
.tablewrap>table>tbody>tr:not(.section)>td:first-child{border-left:1px solid var(--pmsv-line)!important;border-radius:14px 0 0 14px}.tablewrap>table>tbody>tr:not(.section)>td:last-child{border-right:1px solid var(--pmsv-line)!important;border-radius:0 14px 14px 0}
.tablewrap .section td{background:#dceee7!important;border:0!important;border-radius:12px!important;padding:11px!important;font-weight:700!important}
.tablewrap>table>tbody>tr.crit:not(.answered)>td,.tablewrap>table>tbody>tr.critical:not(.answered)>td{background:#eceff1!important}
.tablewrap>table>tbody>tr.answer-C>td{background:#e9f7ef!important}.tablewrap>table>tbody>tr.answer-PC>td{background:#fff4cf!important}.tablewrap>table>tbody>tr.answer-NC>td{background:#fde5e3!important}.tablewrap>table>tbody>tr.answer-NA>td{background:#e9f1f6!important}
.tablewrap textarea{width:100%!important;min-height:105px!important;min-width:260px!important;border:1px solid #cbdad4!important;border-radius:10px!important;padding:10px!important;line-height:1.4!important}
.tablewrap select{border:1px solid #cbdad4!important;border-radius:10px!important;background:#fff!important;padding:7px!important}
.draft-btn,.reset-btn,.btn,button{font-family:system-ui,Arial,sans-serif!important}.draft-btn,.reset-btn{border-radius:7px!important;padding:4px 7px!important;font-size:10px!important;font-weight:800!important}.draft-btn{border:1px solid #9bc9b9!important;background:#effaf6!important;color:var(--pmsv-green)!important}.reset-btn{border:1px solid #efb6b0!important;background:#fff5f4!important;color:#b42318!important}
.actions{display:flex!important;gap:8px!important;margin:18px 0!important}.btn{border-radius:12px!important}
.rating-bottom{margin:18px 0!important;background:#fff!important;border-radius:18px!important;padding:16px!important;box-shadow:0 5px 18px rgba(25,70,55,.06)!important}
@media(max-width:700px){.score,.scorebar{font-size:9.5px!important;padding-left:5px!important;padding-right:5px!important}.meta{border-radius:16px!important;padding:22px 25px!important}.tablewrap>table{border-spacing:0 8px!important}.rules-table,.rating-table{font-size:13px!important}}
`;
 document.head.appendChild(st);
})();
