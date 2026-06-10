const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(item=>{

const top =
item.getBoundingClientRect().top;

const visible = 150;

if(top < window.innerHeight - visible){

item.classList.add("active");

}

});

});

setInterval(()=>{

const star =
document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="100vh";

star.style.fontSize=
Math.random()*20+10+"px";

star.style.pointerEvents="none";

star.style.animation=
"rise 8s linear forwards";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},8000);

},400);