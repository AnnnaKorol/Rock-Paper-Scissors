let randomValue = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
  if (randomValue === 1) {
    return "rock";
  } else if (randomValue === 2) {
    return "scissors";
  } else {
    return "paper";
  }
};

console.log(getComputerChoice());

function getHumanChoice() {}

let humanScore = 0;
let computerScore = 0;
