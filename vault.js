function unlockVault(){

const password =
document.getElementById("password").value;

if(password.toLowerCase() === "theodore"){

document.getElementById("vaultContent")
.style.display = "block";

document.querySelector(".lock-box")
.innerHTML = "🔓";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}else{

alert("Only Theodore Can Enter 💜");

}

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
Math.random()*30+15+"px";

heart.style.animation=
"rise 7s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},600);