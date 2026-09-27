/* PMSV common audit UI entry point.
   All audit checklists load this file. It delegates lifecycle/scoring to the
   appropriate audit module while keeping one common UI entry point. */
(()=>{
  const hygiene = /hygiene-rating/i.test(location.pathname) || /Hygiene Rating/i.test(document.title);
  const src = hygiene ? 'hygiene-checklist-ui.js?v=6' : 'checklist-ui.js?v=6';
  if (document.querySelector(`script[data-pmsv-audit-module="${src}"]`)) return;
  const s=document.createElement('script');
  s.src=src;
  s.dataset.pmsvAuditModule=src;
  document.head.appendChild(s);
})();
