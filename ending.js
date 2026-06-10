const btn =
document.getElementById("surpriseBtn");

const surprise =
document.getElementById("surpriseMessage");

btn.addEventListener("click",()=>{

surprise.style.display="block";

launchFinalCelebration();

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

});

function launchFinalCelebration(){

for(let i=0;i<300;i++){

const item =
document.createElement("div");

const symbols = [

"💜",
"✨",
"🎉",
"🌸",
"🎂",
"🌙"

];

item.innerHTML =
symbols[Math.floor(
Math.random()*symbols.length
)];

item.style.position="fixed";

item.style.left=
Math.random()*100+"vw";

item.style.top="-50px";

item.style.fontSize=
Math.random()*30+15+"px";

item.style.animation=
"fall 6s linear forwards";

document.body.appendChild(item);

setTimeout(()=>{

item.remove();

},6000);

}

}