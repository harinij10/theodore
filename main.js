window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},3000);

});

const text =
"To My Theodore 💜";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,120);

}

}

typing();

const music =
document.getElementById("bgMusic");

document.getElementById("musicBtn")
.addEventListener("click",()=>{

music.play();

});

const slides =
document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},3000);

setInterval(()=>{

const heart =
document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML="💜";

heart.style.left=
Math.random()*100+"vw";

heart.style.fontSize=
Math.random()*30+20+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},500);

const cursor =
document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});