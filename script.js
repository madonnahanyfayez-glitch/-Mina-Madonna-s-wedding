const scenes=[...document.querySelectorAll('.scene')];
const dots=document.getElementById('dots');
let i=0,opened=false;
scenes.forEach((_,n)=>{const d=document.createElement('i');d.className='dot'+(n===0?' active':'');dots.appendChild(d)});
const dotEls=[...dots.children];
function show(n){
 i=(n+scenes.length)%scenes.length;
 scenes.forEach((s,k)=>s.classList.toggle('active',k===i));
 dotEls.forEach((d,k)=>d.classList.toggle('active',k===i));
}
document.getElementById('next').onclick=()=>show(i+1);
document.getElementById('prev').onclick=()=>show(i-1);
document.getElementById('openBtn').onclick=()=>{
 if(!opened){opened=true;show(1);document.getElementById('openBtn').style.display='none';}
};
let sx=0;
window.addEventListener('touchstart',e=>sx=e.touches[0].clientX,{passive:true});
window.addEventListener('touchend',e=>{let dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>50)show(i+(dx<0?1:-1))},{passive:true});
document.querySelectorAll('.scene').forEach((s,k)=>s.addEventListener('click',e=>{
 if(k===0 && e.target.id!=='openBtn') return;
}));
const music=document.getElementById('music'), mb=document.getElementById('musicBtn');
mb.onclick=async()=>{if(music.paused){try{await music.play();mb.textContent='Ⅱ'}catch(e){}}else{music.pause();mb.textContent='♫'}};
const modal=document.getElementById('modal');
document.getElementById('rsvpBtn').onclick=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')};
document.getElementById('close').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
document.getElementById('send').onclick=()=>modal.querySelector('.modal-card').classList.add('sent');
