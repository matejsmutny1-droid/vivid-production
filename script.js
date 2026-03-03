/* smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

/* header blur on scroll */

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{
if(window.scrollY>40){
header.style.background="rgba(0,0,0,.75)";
}else{
header.style.background="rgba(0,0,0,.45)";
}
});