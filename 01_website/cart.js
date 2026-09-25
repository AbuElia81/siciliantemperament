/* ============ WARENKORB — geteilt zwischen index.html und sortiment.html ============
   Der Korb wird in localStorage gespeichert, damit er auf beiden Seiten
   denselben Inhalt zeigt. Benoetigt data.js (P) vorher eingebunden. */
function loadCart(){try{return JSON.parse(localStorage.getItem('stCart')||'{}');}catch(e){return{};}}
function saveCart(){localStorage.setItem('stCart',JSON.stringify(cart));}
let cart=loadCart();

/* ---- Gewaehlte Korbgroesse ----------------------------------------------
   Auch der selbst zusammengestellte Korb bekommt die Maske Klein/Medium/
   Large. Gespeichert wird nur die id; die Grenzen stehen in data.js, damit
   fertige und eigene Koerbe denselben Preisrahmen haben. */
function loadZiel(){try{return localStorage.getItem('stZiel')||'';}catch(e){return'';}}
let ziel=loadZiel();
function zielObj(){return typeof GROESSEN!=='undefined'?GROESSEN.find(g=>g.id===ziel)||null:null;}
function setZiel(id,fest){
 ziel=(!fest&&ziel===id)?'':id;             /* in der Leiste hebt ein zweiter Klick auf,
                                               von der Korbkarte aus wird gesetzt */
 try{localStorage.setItem('stZiel',ziel);}catch(e){}
 renderZiel();updCart();}
function korbSumme(){return Object.entries(cart).reduce((a,[i,q])=>a+vkPreis(P[i])*q,0);}
function korbAnzahl(){return Object.values(cart).reduce((a,q)=>a+q,0);}
/* Ein Satz dazu, was noch fehlt oder zu viel ist — Stueckzahl und Preis
   koennen unabhaengig voneinander ueberschritten werden. */
function zielHinweis(g,anz,summe){
 const p=n=>n===1?' Produkt':' Produkte';
 const zuViel=[];
 if(anz>g.anz)   zuViel.push((anz-g.anz)+p(anz-g.anz)+' zu viel');
 if(summe>g.max) zuViel.push('der Warenwert liegt '+eur(summe-g.max)+' über dem Rahmen');
 if(zuViel.length) return ' — '+zuViel.join(', ')+'. Bitte tauschen.';
 if(anz<g.anz)   return ' — noch '+(g.anz-anz)+p(g.anz-anz)+' frei';
 return ' — der Korb ist vollständig';
}
function renderZiel(){
 const bar=document.getElementById('zielBar');
 if(!bar||typeof GROESSEN==='undefined')return;
 const g=zielObj(),summe=korbSumme(),anz=korbAnzahl();
 bar.innerHTML=
  '<div class="ziel-frage">Wie groß soll Dein eigener Korb werden?</div>'
  +'<div class="ziel-btns">'+GROESSEN.map(x=>
    `<button class="ziel-btn${x.id===ziel?' on':''}" onclick="setZiel('${x.id}')">
      <span class="ziel-name">${x.name}</span><span class="ziel-max">${x.anz} Produkte · ${eur(x.preis)}</span>
     </button>`).join('')+'</div>'
  +(g?`<div class="ziel-stand${(summe>g.max||anz>g.anz)?' voll':''}">`
      +`${g.name} · ${anz} von ${g.anz} Produkten · ${eur(g.preis)}`
      +zielHinweis(g,anz,summe)+'</div>'
     :'<div class="ziel-stand ziel-stand-leer">Ohne Größe: so viele Produkte, wie Du möchtest.</div>');
}
function addCart(i){cart[i]=(cart[i]||0)+1;saveCart();updCart();toast('In den Korb gelegt');}
function addSet(idxs,label){idxs.forEach(i=>cart[i]=(cart[i]||0)+1);saveCart();updCart();toast(label+' im Warenkorb');toggleCart();}
function chg(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];saveCart();updCart();}
function updCart(){const it=Object.entries(cart);
 document.getElementById('cartCount').textContent=it.reduce((a,[,q])=>a+q,0);
 const box=document.getElementById('cartItems');
 box.innerHTML=it.length?it.map(([i,q])=>`<div class="citem"><div class="citem-name">${P[i].n}</div>
  <div class="citem-qty"><button class="qbtn" onclick="chg(${i},-1)">−</button><span style="font-family:Cinzel,serif;font-size:.7rem;">${q}</span><button class="qbtn" onclick="chg(${i},1)">+</button></div>
  </div>`).join('')
 :'<div style="font-family:\'IM Fell English\',serif;font-style:italic;color:var(--ink-faint);text-align:center;padding:2rem 0;">Der Korb ist noch leer.</div>';
 const zi=document.getElementById('cartZiel');
 if(zi&&typeof GROESSEN!=='undefined'){
  const g=zielObj(),summe=korbSumme();
  zi.className='cart-ziel'+(g&&summe>g.max?' voll':'');
  zi.textContent=!it.length?''
   :g?`${g.name} · ${korbAnzahl()} von ${g.anz} Produkten · ${eur(g.preis)}`
     :`Summe ${eur(summe)}`;}
 renderZiel();}
function toggleCart(){document.getElementById('cartDrawer').classList.toggle('open');document.getElementById('overlay').classList.toggle('on');}
function checkout(){alert('Unser Webshop ist bald bereit — die Bestellfunktion ist noch im Aufbau. Schau in Kürze wieder vorbei!');}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500);}
updCart();
