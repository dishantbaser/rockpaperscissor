let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was Draw");
    msg.innerText="game was draw"
}

const showWinner = (userWin)=>{
    if(userWin)
    {
        console.log("You Win");
        msg.innerText = "You Won";
        userScore++;
        userScorepara.innerText=userScore;
    }
    else{
        console.log("you lose");
        msg.innerText = "You Lost";
        compScore++;
        compScorepara.innerText=compScore;
    }
}

const playGame = (userChoice) => {
  console.log("user choice= ", userChoice);
  //Generate computer choice
  const compChoice = genCompChoice();
  console.log("computer choice= ", compChoice);
  if(userChoice===compChoice){
      drawGame();
  }
  else {
    let userWin = true;
     if(userChoice === "rock"){
        //scissprs, paper
        userWin = compChoice==="paper" ? false : true;
     } else if(userChoice==="paper"){
           //rock, cissors
          userWin=  compChoice==="scissors" ? false : true ;
     } else{
           //rock, papaer
           userWin = compChoice ==="rock" ? false : true ;
     }

     showWinner(userWin)
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
