const scenes=[...document.querySelectorAll('.scene')];
let current=0,opened=false,startX=0,startY=0;
const progress=document.querySelector('.progress span');
const music=document.getElementById('music'),musicBtn=document.getElementById('musicBtn');

function show(n){
 current=Math.max(0,Math.min(scenes.length-1,n));
 scenes.forEach((s,k)=>s.classList.toggle('active',k===current));
 progress.style.width=((current+1)/scenes.length*100)+'%';
 if(current===11)startCountdown();
}
function next(){if(current<scenes.length-1)show(current+1)}
function prev(){if(current>0)show(current-1)}

document.getElementById('openBtn').addEventListener('click',async e=>{
 e.stopPropagation();if(opened)return;opened=true;
 const opening=document.querySelector('.opening');opening.classList.add('opening-away');
 try{await music.play();musicBtn.textContent='Ⅱ'}catch(e){}
 setTimeout(()=>show(1),850);
});

window.addEventListener('touchstart',e=>{startX=e.touches[0].clientX;startY=e.touches[0].clientY},{passive:true});
window.addEventListener('touchend',e=>{
 const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;
 if(Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>35){dy<0?next():prev();return}
 if(Math.abs(dx)>45){dx<0?next():prev()}
},{passive:true});
window.addEventListener('keydown',e=>{
 if(e.key==='ArrowRight'||e.key==='ArrowDown'||e.key===' '){e.preventDefault();next()}
 if(e.key==='ArrowLeft'||e.key==='ArrowUp'){e.preventDefault();prev()}
});
document.querySelectorAll('.scene').forEach((s,k)=>s.addEventListener('click',e=>{
 if(k===0&&!opened)return;
 if(k===10&&e.target.closest('#rsvpBtn'))return;
 if(k>0)next();
}));
musicBtn.onclick=async()=>{
 if(music.paused){try{await music.play();musicBtn.textContent='Ⅱ'}catch(e){}}
 else{music.pause();musicBtn.textContent='♫'}
};

const modal=document.getElementById('modal');
document.getElementById('rsvpBtn').onclick=e=>{e.stopPropagation();modal.classList.add('open');modal.setAttribute('aria-hidden','false')};
document.getElementById('close').onclick=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
document.getElementById('send').onclick=()=>{
 if(!document.getElementById('guestName').value.trim())return;
 modal.querySelector('.modal-card').classList.add('sent');
};

let countdownStarted=false;
function startCountdown(){
 if(countdownStarted)return;countdownStarted=true;
 const el=document.getElementById('countdown');
 function tick(){
  const target=new Date('2026-11-22T19:00:00+02:00').getTime(),d=target-Date.now();
  if(d<=0){el.textContent='TODAY IS THE DAY';return}
  const days=Math.floor(d/86400000),hrs=Math.floor(d%86400000/3600000),mins=Math.floor(d%3600000/60000),secs=Math.floor(d%60000/1000);
  el.textContent=days+' DAYS · '+String(hrs).padStart(2,'0')+' HRS · '+String(mins).padStart(2,'0')+' MIN · '+String(secs).padStart(2,'0')+' SEC';
 }
 tick();setInterval(tick,1000);
}
show(0);
