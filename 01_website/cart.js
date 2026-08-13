/* ============ WARENKORB — geteilt zwischen index.html und sortiment.html ============
   Der Korb wird in localStorage gespeichert, damit er auf beiden Seiten
   denselben Inhalt zeigt. Benoetigt data.js (P) vorher eingebunden. */
function loadCart(){try{return JSON.parse(localStorage.getItem('stCart')||'{}');}catch(e){return{};}}
function saveCart(){localStorage.setItem('stCart',JSON.stringify(cart));}
let cart=loadCart();
function addCart(i){cart[i]=(cart[i]||0)+1;saveCart();updCart();toast('In den Korb gelegt');}
function addSet(idxs,label){idxs.forEach(i=>cart[i]=(cart[i]||0)+1);saveCart();updCart();toast(label+' im Warenkorb');toggleCart();}
function chg(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];saveCart();updCart();}
function updCart(){const it=Object.entries(cart);
 document.getElementById('cartCount').textContent=it.reduce((a,[,q])=>a+q,0);
 const box=document.getElementById('cartItems');
 box.innerHTML=it.length?it.map(([i,q])=>`<div class="citem"><div class="citem-name">${P[i].n}</div>
  <div class="citem-qty"><button class="qbtn" onclick="chg(${i},-1)">−</button><span style="font-family:Cinzel,serif;font-size:.7rem;">${q}</span><button class="qbtn" onclick="chg(${i},1)">+</button></div>
  </div>`).join('')
 :'<div style="font-family:\'IM Fell English\',serif;font-style:italic;color:var(--ink-faint);text-align:center;padding:2rem 0;">Der Korb ist noch leer.</div>';}
function toggleCart(){document.getElementById('cartDrawer').classList.toggle('open');document.getElementById('overlay').classList.toggle('on');}
function checkout(){alert('Unser Webshop ist bald bereit — die Bestellfunktion ist noch im Aufbau. Schau in Kürze wieder vorbei!');}
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1500);}
updCart();
