// GardenKey single-source release configuration.
// Change this file only when creating a new PILOT release.
window.GK_RELEASE = Object.freeze({
  label: 'V30.0.11',
  cache: '30011'
});
window.gkVersion = function(){ return window.GK_RELEASE.label; };
window.gkCache = function(url){
  const joiner = url.includes('?') ? '&' : '?';
  return url + joiner + 'v=' + encodeURIComponent(window.GK_RELEASE.cache);
};
window.gkApplyVersion = function(){
  document.querySelectorAll('[data-gk-version]').forEach(el => { el.textContent = window.GK_RELEASE.label; });
  if(document.title){
    if(/V\d+\.\d+\.\d+/.test(document.title)) document.title = document.title.replace(/V\d+\.\d+\.\d+/g, window.GK_RELEASE.label);
    else if(/PILOT/.test(document.title)) document.title = document.title.replace(/PILOT/, 'PILOT ' + window.GK_RELEASE.label);
  }
};
document.addEventListener('DOMContentLoaded', window.gkApplyVersion);
