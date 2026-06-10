function printCertificate(){

window.print();

}

setInterval(()=>{

const trophy =
document.createElement("div");

trophy.innerHTML="🏆";

trophy.style.position="fixed";

trophy.style.left=
Math.random()*100+"vw";

trophy.style.top="-50px";

trophy.style.fontSize=
Math.random()*20+15+"px";

trophy.style.animation=
"fall 8s linear forwards";

document.body.appendChild(trophy);

setTimeout(()=>{

trophy.remove();

},8000);

},700);