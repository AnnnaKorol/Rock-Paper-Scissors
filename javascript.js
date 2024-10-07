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
  if (humanChoice.toLowerCase() === computerChoice) {
    console.log("It’s a tie!");
  } else if (
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") ||
    (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors")
  ) {
    console.log("You win!" + `${humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1).toLowerCase()} beats ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1).toLowerCase()}`);
  } else if (
    (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") ||
    (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") ||
    (humanChoice.toLowerCase() === "rock" && computerChoice === "paper")
  )
  console.log("You lose!" + `${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1).toLowerCase()}`);
};

function playGame

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



//1) Computer provide a random number that is the value to display: rock =1, scissors=2, paper=3
//2) Human provide the answer: "rock" "scissors" "paper" and the answer should be checked if "rock" then 1, if scissors then 2, if paper then 3.
//3) If you win! * 5 > you lose! * 5 return 

// you win!: scissors > paper, paper > rock, rock > scissors . ..... beats .... 
// you lose!: scissors < rock, paper < scissors, rock < paper


