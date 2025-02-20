let wcount=document.querySelector("#winCount");
wcount.innerText=0;
let lcount=document.querySelector("#loseCount");
lcount.innerText=0;
let dcount=document.querySelector("#drawCount");
dcount.innerText=0;
let w=0,l=0,d=0;
var msg=document.querySelector(".msg");
const choices=["Rock","Paper","Scissors"];
let mych=document.querySelector("#mychoice");
let opch=document.querySelector("#opponentchoice");
function play(userInput){
    let computerChoice=choices[(Math.floor(Math.random()*3))];
    if(computerChoice==userInput){
        d++;
        dcount.innerText=d;
        mych.innerText=userInput;
        opch.innerText=computerChoice;
        msg.innerText="DRAW:"+computerChoice+" is equal "+userInput;
        msg.style.backgroundColor='lightblue';
    }
    else if(computerChoice==="Rock"){
        if(userInput==="Paper"){
            w++;
            wcount.innerText=w;
            mych.innerText=userInput;
            opch.innerText=computerChoice;
            msg.innerText="WIN:"+userInput+" beats "+computerChoice;
            msg.style.backgroundColor='green';
        }
        else if(userInput==="Scissors"){
            l++;
            lcount.innerText=l;
            mych.innerText=userInput;
            opch.innerText=computerChoice;
            msg.innerText="LOSE:"+computerChoice+" beats "+userInput;
            msg.style.backgroundColor='red';
        }
    }
    else if(computerChoice=="Paper"){
        if(userInput==="Scissors"){
            w++;
            wcount.innerText=w;
            mych.innerText=userInput;
            opch.innerText=computerChoice;
            msg.innerText="WIN:"+userInput+" beats "+computerChoice;
            msg.style.backgroundColor='green';
        }
        else if(userInput==="Rock"){
            l++;
            lcount.innerText=l;
            mych.innerText=userInput;
            opch.innerText=computerChoice;
            msg.innerText="LOSE:"+computerChoice+" beats "+userInput;
            msg.style.backgroundColor='red';
        }
    }
    else{
        if(userInput==="Rock"){
            w++;
            wcount.innerText=w;
            mych.innerText=userInput;
            opch.innerText=computerChoice;
            msg.innerText="WIN:"+userInput+" beats "+computerChoice;
            msg.style.backgroundColor='green';
        }
        else if(userInput==="Paper"){
            l++;
            lcount.innerText=l;
            mych.innerText=userInput;
            opch.innerText=computerChoice;
            msg.innerText="LOSE:"+computerChoice+" beats "+userInput;
            msg.style.backgroundColor='red';
        }
    }
}
let r=document.querySelector(".restart-button");
r.addEventListener("click",() =>{
    wcount.innerText=0;
    lcount.innerText=0;
    dcount.innerText=0;
    w=0;
    l=0;
    d=0;
    mych.innerText="";
    opch.innerText="";
    msg.innerText="LET'S START THE GAME";
    msg.style.backgroundColor='#cf5243';
    alert("game restarted");
})
