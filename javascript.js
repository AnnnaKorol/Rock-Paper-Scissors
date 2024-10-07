let randomValue = Math.floor(Math.random() * 3) + 1;
function getComputerChoice(choice) {
  if (randomValue === 1) {
    return "rock";
  } else if (randomValue === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}
console.log(getComputerChoice());

let humanChoice = prompt("What is your choice?");
function getHumanChoice() {
  if (humanChoice.toLowerCase() === "rock") {
    return "rock";
  } else if (humanChoice.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    return "paper";
  }
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It’s a tie!");
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    console.log("you win!");
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  )
    console.log("you lose!");
};



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

//1) Computer provide a random number that is the value to display: rock =1, scissors=2, paper=3
//2) Human provide the answer: "rock" "scissors" "paper" and the answer should be checked if "rock" then 1, if scissors then 2, if paper then 3.
//3)

// you win!: scissors > paper, paper > rock, rock > scissors
// you lose!: scissors < rock, paper < scissors, rock < paper
