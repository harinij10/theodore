function toggleLetter(card){

const letter =
card.querySelector(".hidden-letter");

letter.classList.toggle("show");

}

setInterval(()=>{

const heart =
document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.bottom="-50px";

heart.style.fontSize=
Math.random()*25+15+"px";

heart.style.animation=
"rise 8s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},700);