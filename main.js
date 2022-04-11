// Starting variables //
// Starting HTML eleemnts as a varible for easy access //
let pScoreboard = document.querySelector('p-count')
let cScoreboard = document.querySelector('p-count')
let roundResult = document.querySelector('p-count')
//setting score variables for player & computer to track score//
let playerScore = 0;
let computerScore = 0;
// initalizing Global variables to store user and computer selections//
let compChoice;
let playerChoice;
// initialize Global variables for the Scoreboard//
let playerCount = document.getElementById("player_Count");
let computerCount = document.getElementById("computer_Count");
//function to randomly generate a choice for the computer, uses a list to store selctions//
function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

//functions for player choices//
function throwRock() {
  playerChoice = "rock";
  computerChoice();
  playGame(playerChoice, compChoice)
}

function throwPaper() {
  playerChoice = "paper";
  computerChoice();
  playGame(playerChoice, compChoice)
}

function throwScissor() {
  playerChoice = "scissor";
  computerChoice();
  playGame(playerChoice, compChoice);
}

//function to see who wins//
function playGame(player, computer) {
  if (player === "rock" && computer === "scissor") {
    console.log("Player Wins");
    player_Score();
    console.log(playerScore);
  }
  //FINISH THIS //
  else if (player === "paper" && computer === "rock") {
    console.log("Player Wins");
    player_Score();
    console.log(playerScore);
  } else if (player === "scissor" && computer === "paper") {
    console.log("Player Wins");
    player_Score();
    console.log(playerScore);
  }
  //Ties in the game //
  else if (player === "rock" && computer === "rock") {
    console.log("Tie game!");
  } else if (player === "paper" && computer === "paper") {
    console.log("Tie game!");
  } else if (player === "scissor" && computer === "scissor") {
    console.log("Tie game!");
  }
  //computer wins//
  else {
    console.log("Computer Wins!");
    computer_Score();
    console.log(computerScore);

  }
}



//scoring//
function player_Score(){
  playerScore = playerScore+1;
  playerCount.textContent = playerScore;
}

function computer_Score(){
  computerScore = computerScore+1;
  computerCount.textContent = computerScore;
}
