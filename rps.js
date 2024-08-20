let turn=0;

function turnC() {
    let turns=prompt("How many turns You wants to play:");
 turn=parseInt(turns);

};

turnC();

let buttons=document.querySelectorAll(".icon div");
let uScore=document.querySelector("#userScore");
let cScore=document.querySelector("#comScore");
dScore=document.querySelector("#drawScore");
let reset=document.querySelector(".glow-on-hover")




let arr=["rock","paper","scissors"];
 let userScore=0;
  let comScore=0;
  let drawScore=0;


function comChoice(){
    let index=Math.random();
    
    let cc=arr[Math.floor(index*3)];
    return cc;
}

function playGame(id,compChoice) {
   
 let isCom,isUser,isDraw;
    
    if (compChoice==id) {
             drawScore++;
             isDraw=true;
        }else if (compChoice=="rock" && id
            !="paper"){
             isCom=true;
            comScore++;
            
        } else if(compChoice=="paper" && id !="scissors"){
        comScore++;
        isCom=true;
        
            
        }
        else if (compChoice=="scissors" &&  id!="rock") {
            comScore++;
            isCom=true;
            
        }
       else{
           userScore++;
          isUser=true;
           
       }
       
       if(isCom) {
           cScore.innerText=`Computer: ${comScore}`;
       }
       else if(isUser){
            uScore.innerText=`Your: ${userScore}`;
       }
       else {
           dScore.innerText=`Draw: ${drawScore}`;
       }
}









buttons.forEach(( button)=>{
    button.addEventListener("click",()=>{
    
        const id=button.getAttribute("id");
        console.log(id);
        compChoice=comChoice();
        console.log(compChoice)
        playGame(id,compChoice);
        
        if (userScore+comScore+drawScore==turn){
    gameOver();
    Reset();
};
        
    })
});



/* work of reset button */

function Reset() {
    
    userScore=0;
  comScore=0;
  drawScore=0;
  
  cScore.innerText=`Computer:`;
  dScore.innerText=`Draw:`;
  uScore.innerText=`Your:`;
  turnC();
};

reset.addEventListener("click",Reset);
    

    
    
    function gameOver() {
 
    if (userScore==comScore) {
        alert(`Draw.Greet Devoloper Kausar 🙃. You: ${userScore}\n Computer: ${comScore}\n Draw: ${drawScore}`)
    }else if(userScore>comScore){
        alert(`You won the game.Greet Devoloper Kausar 🙃. \n You: ${userScore}\n Computer: ${comScore}\n Draw: ${drawScore}`)
    }
    else{
        alert(`Com won the game.Greet Devoloper Kausar 🙃. \n You: ${userScore}\n Computer: ${comScore}\n Draw: ${drawScore}`)
    }
    
 
   
};


