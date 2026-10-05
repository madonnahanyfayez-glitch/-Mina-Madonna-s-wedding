const music=document.getElementById('music');
document.getElementById('seal').onclick=async()=>{document.querySelector('.envelope').classList.add('open');try{await music.play();document.getElementById('musicBtn').textContent='Ⅱ'}catch(e){};setTimeout(()=>document.querySelector('.names').scrollIntoView({behavior:'smooth'}),900)};
document.getElementById('musicBtn').onclick=async()=>{if(music.paused){try{await music.play();document.getElementById('musicBtn').textContent='Ⅱ'}catch(e){}}else{music.pause();document.getElementById('musicBtn').textContent='♫'}};

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll('.reveal').forEach((el,i)=>setTimeout(()=>el.classList.add('seen'),i*110))}}),{threshold:.2});
document.querySelectorAll('.story').forEach(s=>observer.observe(s));

const place=document.querySelector('.place'),church=document.getElementById('churchTap');
function openPlace(){place.classList.add('opened');church.querySelector('.church-label').textContent='LOCATION REVEALED'};
church.onclick=openPlace;church.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')openPlace()};

const countdown=document.getElementById('countdown');
function tick(){let d=new Date('2026-11-22T19:00:00+02:00').getTime()-Date.now();if(d<=0){countdown.textContent='TODAY IS THE DAY';return}let days=Math.floor(d/86400000),h=Math.floor(d%86400000/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);countdown.textContent=`${days} DAYS · ${String(h).padStart(2,'0')} HRS · ${String(m).padStart(2,'0')} MIN · ${String(s).padStart(2,'0')} SEC`};tick();setInterval(tick,1000);

const re=document.getElementById('rsvpEnvelope');re.querySelector('#rsvpBtn').onclick=()=>{re.classList.add('open');setTimeout(()=>document.getElementById('modal').classList.add('open'),650)};
document.getElementById('close').onclick=()=>document.getElementById('modal').classList.remove('open');
document.getElementById('send').onclick=()=>{if(document.querySelector('.form-card input').value.trim())document.querySelector('.form-card').classList.add('sent')};

window.addEventListener('scroll',()=>{let max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.scroll-line span').style.height=(Math.min(100,scrollY/max*100))+'%'});
