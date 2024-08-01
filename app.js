
let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;//game is not started yet//
let level=0;
let h3=document.querySelector("h3");
let h2=document.querySelector("h2");
let highestscore=0;
document.addEventListener("dblclick",function() {
    if (started==false) {
        console.log("game is started");
        started=true;
        levelUp();
  
    }});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");}, 250);
}
function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");}, 250);
}
function levelUp(){
      userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameflash(randbtn);
}
function checkAns(Idx){
    
    if(gameSeq[Idx]==userSeq[Idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp ,1000);
       }
    }
    else{
        h2.innerHTML=`Game over!your score is <b>${level}</b> <br>Double click to start the Game`;
        
        if(`${level}` > highestscore){
            h3.innerText=`Highest score : ${level}` ;
            highestscore=`${level}`;
            console.log(highestscore);
            }
            else{
             h3.innerText=highestscore;
            }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="green";
        },120);
        reset();
       
    }}
    

function btnpress(){

   let btn=this;
   userflash(btn);
   usercolor=btn.getAttribute("id");
 
   userSeq.push(usercolor);
   checkAns(userSeq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
    for(btn of allbtns){
        btn.addEventListener("click",btnpress);
    }
  function reset(){
   let h3=document.querySelector("h3");
   h3.innerText=`Highest score:${highestscore}` ;
     started=false;
     gameSeq=[];
     userSeq=[];
     level=0;}
