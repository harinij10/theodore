const container =
document.getElementById("starContainer");

const wishText =
document.getElementById("wishText");

const unlockSection =
document.getElementById("unlockSection");

let collected = 0;

const wishes = [

"You are my God's Gift 💜",

"You make my world brighter ✨",

"I wish all your dreams come true 🌸",

"You are my favorite person 🤍",

"I wish happiness follows you forever 🌷",

"Thank you for staying 💜",

"You are stronger than you think ⭐",

"I believe in you ✨",

"Forever my Theodore 🌙",

"I am lucky to have you 💜"

];

for(let i=0;i<50;i++){

const star =
document.createElement("div");

star.classList.add("star");

star.innerHTML="⭐";

star.style.left =
Math.random()*95 + "%";

star.style.top =
Math.random()*850 + "px";

star.onclick = function(){

const randomWish =
wishes[Math.floor(
Math.random()*wishes.length
)];

wishText.innerHTML =
randomWish;

this.remove();

collected++;

if(collected === 50){

unlockSection.style.display="block";

fireworks();

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

};

container.appendChild(star);

}

function fireworks(){

for(let i=0;i<200;i++){

let item =
document.createElement("div");

item.innerHTML="🎆";

item.style.position="fixed";

item.style.left=
Math.random()*100+"vw";

item.style.top=
Math.random()*100+"vh";

item.style.fontSize=
Math.random()*25+10+"px";

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},3000);

}

}