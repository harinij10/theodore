const slides = [

"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg",
"images/photo7.jpg",
"images/photo8.jpg",
"images/photo9.jpg",
"images/photo10.jpg",
"images/photo11.jpg",
"images/photo12.jpg",
"images/photo13.jpg",
"images/photo14.jpg",
"images/photo15.jpg"

];

let current = 0;

const image =
document.getElementById("memorySlide");

setInterval(()=>{

current++;

if(current >= slides.length){

current = 0;

}

image.src = slides[current];

},3000);

setInterval(()=>{

const sparkle =
document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=
Math.random()*100+"vw";

sparkle.style.top=
Math.random()*100+"vh";

sparkle.style.fontSize=
Math.random()*20+10+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},3000);

},400);