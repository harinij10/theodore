function calculateScore(){

let score = 0;

const answers =
document.querySelectorAll(
'input[type="radio"]:checked'
);

answers.forEach(answer=>{

score += Number(answer.value);

});

let percentage =
(score / 5) * 100;

const resultBox =
document.getElementById("resultBox");

const scoreText =
document.getElementById("scoreText");

const messageText =
document.getElementById("messageText");

resultBox.style.display = "block";

scoreText.innerHTML =
percentage + "% Friendship Match 💜";

if(percentage === 100){

messageText.innerHTML =

"Perfect Score! 💜<br><br>" +

"You know our friendship by heart.<br>" +

"You are truly my Theodore.<br><br>" +

"Forever your Kannama ✨";

confettiEffect();

}else if(percentage >= 60){

messageText.innerHTML =

"Great Job 💜<br><br>" +

"You know most of our beautiful memories.";

}else{

messageText.innerHTML =

"Looks like we need more memories together 😆💜";

}

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}

function confettiEffect(){

for(let i=0;i<100;i++){

let confetti =
document.createElement("div");

confetti.innerHTML="🎉";

confetti.style.position="fixed";

confetti.style.left=
Math.random()*100+"vw";

confetti.style.top="-50px";

confetti.style.fontSize=
Math.random()*20+15+"px";

confetti.style.animation=
"fall 4s linear forwards";

document.body.appendChild(confetti);

setTimeout(()=>{

confetti.remove();

},4000);

}

}