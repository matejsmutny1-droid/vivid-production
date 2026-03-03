/* smooth navigation */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});
});
});


/* header blur */

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{
if(window.scrollY>40){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});