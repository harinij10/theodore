const cards =
document.querySelectorAll(".letter-card");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition="1s";

observer.observe(card);

});

setInterval(()=>{

const petal =
document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";

petal.style.left=
Math.random()*100+"vw";

petal.style.top="-50px";

petal.style.fontSize=
Math.random()*20+10+"px";

petal.style.animation=
"fall 8s linear forwards";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},8000);

},500);