const opening=document.getElementById("opening");
const seal=document.getElementById("seal");
const invitation=document.getElementById("invitation");
const music=document.getElementById("weddingMusic");
const musicBtn=document.getElementById("musicBtn");
let started=false, musicPlaying=false;

seal.addEventListener("click",()=>{
  if(started)return;
  started=true;
  opening.classList.add("opened");
  setTimeout(()=>{
    opening.classList.add("finished");
    invitation.classList.remove("hidden");
    document.body.style.overflow="auto";
    window.scrollTo({top:0,behavior:"smooth"});
  },1900);
});

const weddingDate=new Date("November 22, 2026 19:00:00").getTime();
function updateCountdown(){
  const d= Math.max(0,weddingDate-Date.now());
  const days=Math.floor(d/86400000);
  const hours=Math.floor(d/3600000)%24;
  const minutes=Math.floor(d/60000)%60;
  const seconds=Math.floor(d/1000)%60;
  document.getElementById("days").textContent=String(days).padStart(2,"0");
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
updateCountdown(); setInterval(updateCountdown,1000);

musicBtn.addEventListener("click",()=>{
  if(!music)return;
  if(!musicPlaying){music.play().then(()=>{musicPlaying=true;musicBtn.textContent="❚❚"}).catch(()=>{});}
  else{music.pause();musicPlaying=false;musicBtn.textContent="♫";}
});

const form=document.getElementById("rsvpForm");
const thankYou=document.getElementById("thankYou");
form.addEventListener("submit",e=>{
  e.preventDefault();
  form.classList.add("hidden");
  thankYou.classList.remove("hidden");
});
document.body.style.overflow="hidden";
