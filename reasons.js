const reasons = [

"Because you stayed.",
"Because you understand me.",
"Because you listen.",
"Because you care.",
"Because you support me.",
"Because you make me laugh.",
"Because you hold my hand.",
"Because you're my stress buster.",
"Because you're my comfort.",
"Because you're my happiness.",

"Because you're my safe place.",
"Because you're my God's Gift.",
"Because you're my Theodore.",
"Because you never judge me.",
"Because you know my silence.",
"Because you know my smile.",
"Because you know my tears.",
"Because you're patient.",
"Because you're kind.",
"Because you're precious.",

"Because you're beautiful inside and out.",
"Because you bring peace.",
"Because you bring joy.",
"Because you brighten my days.",
"Because you make memories special.",
"Because you are genuine.",
"Because you are honest.",
"Because you stay strong.",
"Because you motivate me.",
"Because you inspire me.",

"Because our friendship feels like home.",
"Because you're always there.",
"Because you remember little things.",
"Because you make ordinary moments magical.",
"Because you understand my craziness.",
"Because you laugh with me.",
"Because you cry with me.",
"Because you celebrate with me.",
"Because you're unique.",
"Because you're irreplaceable.",

"Because college became beautiful with you.",
"Because every photo has a story.",
"Because every memory matters.",
"Because you never gave up on me.",
"Because you accept me.",
"Because you encourage me.",
"Because you make me smile.",
"Because you're thoughtful.",
"Because you're caring.",
"Because you're unforgettable.",

"Because you're loyal.",
"Because you're trustworthy.",
"Because you are family.",
"Because you're my first daughter.",
"Because you're my best friend.",
"Because you make life easier.",
"Because you're always honest.",
"Because you're always real.",
"Because you bring positivity.",
"Because you are a blessing.",

"Because you're brave.",
"Because you're strong.",
"Because you're gentle.",
"Because you're supportive.",
"Because you're understanding.",
"Because you're patient.",
"Because you're warm-hearted.",
"Because you're selfless.",
"Because you're special.",
"Because you're amazing.",

"Because you're my favorite person.",
"Because you make every day brighter.",
"Because our friendship is priceless.",
"Because you are unforgettable.",
"Because you believe in me.",
"Because you trust me.",
"Because you care deeply.",
"Because you make me feel safe.",
"Because you're always welcome.",
"Because you're always loved.",

"Because you're one in a million.",
"Because you're extraordinary.",
"Because you're wonderful.",
"Because you're precious.",
"Because you're cherished.",
"Because you're appreciated.",
"Because you're respected.",
"Because you're valued.",
"Because you're adored.",
"Because you're treasured.",

"Because you're my forever friend.",
"Because you're my forever Theodore.",
"Because you're my forever happiness.",
"Because you're my forever blessing.",
"Because you're my forever memory.",
"Because you're my forever comfort.",
"Because you're my forever support.",
"Because you're my forever safe place.",
"Because you're my forever family.",

"Because you're YOU."
];

let index = 0;

const card =
document.getElementById("reasonCard");

const counter =
document.getElementById("counter");

const btn =
document.getElementById("showReason");

btn.addEventListener("click",()=>{

if(index < reasons.length){

card.innerHTML =
reasons[index];

index++;

counter.innerHTML =
index + " / 100";

}

if(index === reasons.length){

document
.getElementById("finalReason")
.style.display = "block";

heartExplosion();

}

});

function heartExplosion(){

for(let i=0;i<150;i++){

const heart =
document.createElement("div");

heart.innerHTML="💜";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.top=
Math.random()*100+"vh";

heart.style.fontSize=
Math.random()*30+15+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},4000);

}

}