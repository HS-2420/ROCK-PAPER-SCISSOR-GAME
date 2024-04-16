let userscr=0;
let compscr=0;
let drawscr=0;
const userscrnum=document.querySelector("#user-score");
const compscrnum=document.querySelector("#comp-score");
const drawscrnum=document.querySelector("#draw-score");
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const drawGame=()=>{
    drawscr++;
    drawscrnum.innerText=drawscr;
    msg.innerText="Game was Draw , Play Again !";
    msg.style.backgroundColor=" #f279ac"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscr++;
        userscrnum.innerText=userscr;
        msg.innerText=`You Win ! Your ${userChoice} beat's Computer ${compChoice}`;
        msg.style.backgroundColor="rgb(0, 255, 0)";}
    else{
        compscr++; 
        compscrnum.innerText=compscr;
        msg.innerText=`You Lost ! Computer ${compChoice} beat's your ${userChoice}`;
        msg.style.backgroundColor="red";}
}
let getCompChoi=()=>{
    const opts=["rock","paper","scissor"];
    const rannum=Math.floor(Math.random()*3);
    return opts[rannum];
}
let playGame=(userChoice)=>{
    console.log("User's Choice = ",userChoice);
    const compChoice=getCompChoi();
    console.log("Computer's Choice = ",compChoice);
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
           userWin= compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper")
        {
           userWin= compChoice==="scissor" ? false : true;
        }
        else
        {
           userWin= compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})
const changeMode=document.querySelectorAll(".mode")
const body=document.querySelector("body");
const darkusr=document.querySelector("#dark-button");
let currmod="light";
darkusr.addEventListener("click",()=>{
  if(currmod==="light"){
    currmod="dark";
    body.style.backgroundColor="#081b31";
    body.style.color="white";
    changeMode.forEach(element=>{
        element.style.backgroundColor="white";
        element.style.color="#081b31";
    })
  }
  else{
    currmod="light";
    body.style.backgroundColor="rgb(247, 247, 209)";
    body.style.color="#081b31";
    changeMode.forEach(element=>{
        element.style.backgroundColor="#081b31";
        element.style.color="white";
    })
  }
})