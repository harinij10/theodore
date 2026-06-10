const photos =
document.querySelectorAll(".polaroid");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightboxImg");

const caption =
document.getElementById("caption");

photos.forEach(card=>{

card.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src =
card.querySelector("img").src;

caption.innerHTML =
card.querySelector("span").innerHTML;

});

});

document
.getElementById("closeBtn")
.addEventListener("click",()=>{

lightbox.style.display="none";

});

setInterval(()=>{

const hearts =
["💜","✨","🌸","💖"];

const item =
document.createElement("div");

item.innerHTML =
hearts[Math.floor(Math.random()*hearts.length)];

item.style.position="fixed";

item.style.left=
Math.random()*100+"vw";

item.style.bottom="-50px";

item.style.fontSize=
Math.random()*20+15+"px";

item.style.animation=
"rise 8s linear forwards";

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},8000);

},500);