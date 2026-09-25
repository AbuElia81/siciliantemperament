/* ============ GROESSENWAHL AUF DEN KORBKARTEN ============
   Jede Korbkarte zeigt statt einer Produktliste nur S · M · L. Ein Klick
   klappt die drei Groessen aus; die Wahl wird gemerkt (setZiel) und fuehrt
   weiter — bei den vier Elementkoerben zum Kalkulator, beim persoenlichen
   Korb ins Sortiment. Benoetigt data.js und cart.js. */
function gwahlAufbauen(){
 document.querySelectorAll('[data-gwahl]').forEach(halter=>{
  const ziel=halter.dataset.gwahl;                    /* kalkulator | sortiment */
  const kurz=GROESSEN.map(g=>g.kurz).join(' · ');
  halter.innerHTML=
   `<button type="button" class="gwahl-btn" aria-expanded="false">
      <span class="gwahl-kurz">${kurz}</span>
      <span class="gwahl-wort">Größe wählen</span>
      <span class="gwahl-pfeil" aria-hidden="true">▾</span>
    </button>
    <div class="gwahl-menu" role="menu">`
   +GROESSEN.map(g=>
     `<button type="button" class="gwahl-opt" role="menuitem" data-id="${g.id}">
        <span class="gwahl-opt-kurz">${g.kurz}</span>
        <span class="gwahl-opt-name">${g.name}</span>
        <span class="gwahl-opt-info">${g.anz} Produkte · ${eur(g.preis)}</span>
      </button>`).join('')
   +`</div>`;

  const knopf=halter.querySelector('.gwahl-btn');
  knopf.addEventListener('click',ev=>{
   ev.stopPropagation();                              /* Karte nicht mitklicken */
   const offen=halter.classList.contains('auf');
   gwahlSchliessen();
   if(!offen){halter.classList.add('auf');knopf.setAttribute('aria-expanded','true');}
  });
  halter.querySelectorAll('.gwahl-opt').forEach(opt=>{
   opt.addEventListener('click',ev=>{
    ev.stopPropagation();
    if(typeof setZiel==='function')setZiel(opt.dataset.id,true);
    location.href=(ziel==='sortiment'?'sortiment.html':'kalkulator.html');
   });
  });
 });
}
function gwahlSchliessen(){
 document.querySelectorAll('[data-gwahl].auf').forEach(h=>{
  h.classList.remove('auf');
  const b=h.querySelector('.gwahl-btn');if(b)b.setAttribute('aria-expanded','false');
 });
}
document.addEventListener('click',gwahlSchliessen);
document.addEventListener('keydown',e=>{if(e.key==='Escape')gwahlSchliessen();});
gwahlAufbauen();
