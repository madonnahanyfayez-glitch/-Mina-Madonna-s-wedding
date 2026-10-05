const envelope=document.getElementById('envelope');
const openBtn=document.getElementById('openEnvelope');
const music=document.getElementById('music');
openBtn.onclick=async()=>{envelope.classList.add('open');try{await music.play();document.getElementById('musicBtn').textContent='Ⅱ'}catch(e){};setTimeout(()=>document.querySelector('.story').scrollIntoView({behavior:'smooth'}),900)};
document.getElementById('musicBtn').onclick=async()=>{if(music.paused){try{await music.play();document.getElementById('musicBtn').textContent='Ⅱ'}catch(e){}}else{music.pause();document.getElementById('musicBtn').textContent='♫'}};

const church=document.getElementById('churchButton');
const place=document.querySelector('.place-section');
church.onclick=()=>place.classList.toggle('revealed');
church.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')place.classList.toggle('revealed')};

const countdown=document.getElementById('countdown');
function tick(){const d=new Date('2026-11-22T19:00:00+02:00').getTime()-Date.now();if(d<=0){countdown.textContent='TODAY IS THE DAY';return}const days=Math.floor(d/86400000),hrs=Math.floor(d%86400000/3600000),mins=Math.floor(d%3600000/60000),secs=Math.floor(d%60000/1000);countdown.innerHTML=`${String(days).padStart(2,'0')} <small>DAYS</small> : ${String(hrs).padStart(2,'0')} <small>HRS</small> : ${String(mins).padStart(2,'0')} <small>MIN</small> : ${String(secs).padStart(2,'0')} <small>SEC</small>`}
tick();setInterval(tick,1000);

const modal=document.getElementById('modal');
document.getElementById('rsvpBtn').onclick=()=>modal.classList.add('open');
document.getElementById('close').onclick=()=>modal.classList.remove('open');
document.getElementById('send').onclick=()=>{if(modal.querySelector('input').value.trim())modal.querySelector('.form-card').classList.add('sent')};

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')}),{threshold:.18});
document.querySelectorAll('section').forEach(s=>io.observe(s));
