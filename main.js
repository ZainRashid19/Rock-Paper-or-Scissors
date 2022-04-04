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
  const computerOptions = ["rocky," "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}
