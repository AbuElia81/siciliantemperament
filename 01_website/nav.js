/* ============ NAVIGATION AUF DEM HANDY ============
   Auf schmalen Schirmen umbrach die Kopfleiste in drei Zeilen und nahm den
   halben Bildschirm ein. Dort liegt die Navigation daher als Leiste an der
   linken Seite, geoeffnet ueber eine Schaltflaeche unten links.
   Der Knopf wird hier erzeugt, damit er nicht in jeder Seite steht. */
(function(){
 const links=document.querySelector('nav .nav-links');
 if(!links)return;

 const knopf=document.createElement('button');
 knopf.className='nav-toggle';
 knopf.type='button';
 knopf.setAttribute('aria-label','Menü öffnen');
 knopf.setAttribute('aria-expanded','false');
 knopf.innerHTML='<span></span><span></span><span></span>';
 document.body.appendChild(knopf);

 function setzen(offen){
  document.body.classList.toggle('nav-offen',offen);
  knopf.setAttribute('aria-expanded',offen?'true':'false');
  knopf.setAttribute('aria-label',offen?'Menü schließen':'Menü öffnen');
 }
 knopf.addEventListener('click',function(){
  setzen(!document.body.classList.contains('nav-offen'));
 });
 /* Nach einem Sprung ins Menue wieder schliessen */
 links.addEventListener('click',function(e){
  if(e.target.closest('a,button'))setzen(false);
 });
 document.addEventListener('keydown',function(e){
  if(e.key==='Escape')setzen(false);
 });
 /* Tippen neben die Leiste schliesst sie ebenfalls */
 document.addEventListener('click',function(e){
  if(!document.body.classList.contains('nav-offen'))return;
  if(e.target.closest('.nav-links')||e.target.closest('.nav-toggle'))return;
  setzen(false);
 });
})();
