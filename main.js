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
//function to randomly generate a choice for the computer, uses a list to store selctions//
function computerChoice() {
  const computerOptions = ["rock," "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}

//functions for player choices//
function throwRock(){
  playerChoice = "rock";
  computerChoice();
  playGame(playerChoice, compChoice)
}

function throwPaper(){
  playerChoice = "paper";
  computerChoice();
  playGame(playerChoice, compChoice)
}

function throwScissor(){
  playerChoice = "scissor";
  computerChoice();
  playGame(playerChoice, compChoice)
}

//function to see who wins//
function playGame(player, computer){
if (player ==="rock" && computer === "scissor") {
  console.log("Player Wins");
}

//FINISH THIS //
else if playGame(player, computer){
  if (player ==="paper" && computer === "rock") {
    console.log("Player Wins");
}

else if playGame(player, computer){
  if (player ==="scissor" && computer === "paper") {
    console.log("Player Wins");
}
//Ties in the game //
else if playGame(player, computer){
  if (player ==="rock" && computer === "rock") {
    console.log("Tie game!");
}

else if playGame(player, computer){
  if (player ==="paper" && computer === "paper") {
    console.log("Tie game!");
}

else if playGame(player, computer){
  if (player ==="scissor" && computer === "scissor") {
    console.log("Tie game!");
}
}

//computer wins//
else {
  console.log("Tie game!");

}
