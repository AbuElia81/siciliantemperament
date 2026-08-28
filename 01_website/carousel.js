/* ============ SWIPE-KARUSSELL ============
   Gemeinsame Logik fuer die Korbfotos auf der Startseite und die
   Lehrmeister-Karten auf der Lehre-Seite. Aenderungen hier wirken auf beide.

   Erwarteter Aufbau:
     <div class="swipe">
       <div class="swipe-track"> ...eine Folie je Kind... </div>
       <button class="swipe-nav swipe-prev">  (optional)
       <button class="swipe-nav swipe-next">  (optional)
       <div class="swipe-dots"></div>         (optional, wird gefuellt)
     </div>
   Jede Folie belegt die volle Breite; das CSS gibt flex:0 0 100% vor. */
function initCarousel(car){
 const track=car.querySelector('.swipe-track');
 if(!track||track.dataset.swipeReady)return;
 track.dataset.swipeReady='1';
 const dots=car.querySelector('.swipe-dots');
 const slides=[...track.children];
 if(slides.length<2)return;
 let idx=0,startX=0,dx=0,dragging=false;

 if(dots){
  slides.forEach((s,i)=>{
   const b=document.createElement('button');
   b.type='button';
   b.setAttribute('aria-label','Folie '+(i+1)+' von '+slides.length);
   b.onclick=()=>go(i);
   dots.appendChild(b);
  });
 }

 function go(i){
  idx=(i+slides.length)%slides.length;
  track.style.transform=`translateX(${-idx*100}%)`;
  if(dots)[...dots.children].forEach((d,j)=>d.setAttribute('aria-current',j===idx));
 }
 go(0);

 const prev=car.querySelector('.swipe-prev'),next=car.querySelector('.swipe-next');
 if(prev)prev.onclick=()=>go(idx-1);
 if(next)next.onclick=()=>go(idx+1);

 function down(x){dragging=true;startX=x;dx=0;track.classList.add('dragging');}
 function move(x){
  if(!dragging)return;
  dx=x-startX;
  track.style.transform=`translateX(calc(${-idx*100}% + ${dx}px))`;
 }
 function up(x){
  if(!dragging)return;
  if(x!==undefined)dx=x-startX;
  dragging=false;
  track.classList.remove('dragging');
  const t=car.offsetWidth*0.15;
  go(dx<-t?idx+1:dx>t?idx-1:idx);
 }

 track.addEventListener('touchstart',e=>down(e.touches[0].clientX),{passive:true});
 track.addEventListener('touchmove',e=>move(e.touches[0].clientX),{passive:true});
 track.addEventListener('touchend',e=>up(e.changedTouches[0].clientX));
 track.addEventListener('pointerdown',e=>{if(e.pointerType!=='touch'){e.preventDefault();down(e.clientX);}});
 window.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')move(e.clientX);});
 window.addEventListener('pointerup',e=>{if(e.pointerType!=='touch')up(e.clientX);});
 /* Nach einer Wischbewegung nicht zusaetzlich dem Link folgen */
 track.addEventListener('click',e=>{if(Math.abs(dx)>8)e.preventDefault();},true);
}
document.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('.swipe').forEach(initCarousel);
});
