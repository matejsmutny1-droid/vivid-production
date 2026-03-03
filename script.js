/* SMOOTH SCROLL LINKS */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});


/* HEADER BLUR */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{
if(window.scrollY>40){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});


/* ===== CINEMATIC PARALLAX (SAFE VERSION) ===== */

const heroBg=document.querySelector(".hero-bg");

/* vypneme efekt na mobile */
const isMobile = window.innerWidth < 900;

if(!isMobile && heroBg){

let lastScroll = 0;
let ticking = false;

function updateParallax(){
heroBg.style.transform =
`translate3d(0, ${lastScroll * 0.25}px, 0)`;
ticking=false;
}

window.addEventListener("scroll",()=>{
lastScroll = window.scrollY;

if(!ticking){
window.requestAnimationFrame(updateParallax);
ticking=true;
}
});
}


/* SECTION REVEAL */

const reveals=document.querySelectorAll(".section");

const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible");
}
});
},{threshold:.15});

reveals.forEach(sec=>{
sec.classList.add("reveal");
observer.observe(sec);
});