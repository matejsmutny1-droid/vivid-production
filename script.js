/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

/* HEADER EFFECT */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{
if(window.scrollY>40){
header.style.background="rgba(0,0,0,.75)";
}else{
header.style.background="rgba(0,0,0,.45)";
}
});

/* CINEMATIC PARALLAX */

const heroBg=document.querySelector(".hero-bg");

window.addEventListener("scroll",()=>{
let offset=window.scrollY;
heroBg.style.transform=`translateY(${offset*0.35}px)`;
});

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