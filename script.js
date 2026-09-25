(function(){
var tabs=[].slice.call(document.querySelectorAll('nav a[data-tab]')),panels=[].slice.call(document.querySelectorAll('.tab-panel')),last='';
function show(){var h=(location.hash||'#home').slice(1).split('/'),id=h[0],el=document.getElementById(id);
if(!el||!el.classList.contains('tab-panel')){id='home';el=document.getElementById(id);}
panels.forEach(function(p){p.classList.toggle('active',p.id===id)});tabs.forEach(function(t){t.classList.toggle('active',t.dataset.tab===id)});
var sp=[].slice.call(el.querySelectorAll('.sub-panel'));
if(sp.length){var key=h[1];if(!sp.some(function(p){return p.dataset.sub===key}))key=sp[0].dataset.sub;
sp.forEach(function(p){p.classList.toggle('active',p.dataset.sub===key)});
[].slice.call(el.querySelectorAll('.subnav a')).forEach(function(a){a.classList.toggle('active',a.dataset.sub===key)});}
if(last&&last!==id){var n=document.querySelector('nav');window.scrollTo({top:n.offsetTop,behavior:'smooth'});}
last=id;}
window.addEventListener('hashchange',show);show();window.scrollTo(0,0);
})();
