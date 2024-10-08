

//Computer choice
function getComputerChoice(choice) {
  const randomValue = Math.floor(Math.random() * 3) + 1;
  if (randomValue === 1) {
    return "rock";
  } else if (randomValue === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}
//console.log(getComputerChoice());


//Human choice
function getHumanChoice() {
  let humanChoice = prompt("What is your choice? (rock, paper, scissors)").toLowerCase();
  while (humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper") {
    humanChoice = prompt("Invalid choice. Please enter rock, paper, scissors.").toLowerCase();
  }
  return humanChoice;
}
//console.log(getHumanChoice());


//Play single round
function playRound(humanChoice, computerChoice) {
console.log(`Human: ${humanChoice}| Computer: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It’s a tie!");
    return "tie";
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    console.log(`You win! ${humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1).toLowerCase()} beats ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1).toLowerCase()}`);
  return "human";
  } else {
  console.log(`You lose! ${computerChoice.charAt(0).toUpperCase()+ computerChoice.slice(1).toLowerCase()} beats ${humanChoice.charAt(0).toUpperCase()+ humanChoice.slice(1).toLowerCase()}`);
return "computer"
}
};
//console.log(playRound());




//Play game with added Scores for computer and human
function playGame() {
let humanScore = 0;
let computerScore = 0;

 for (let round = 1; round <= 5; round++) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection,computerSelection);
  console.log(`Round ${round}`);

  if (result === "human") {
    humanScore++;
  } else if(
    result === "computer"
  ) {
    computerScore++;
  }
 console.log(`Score after round ${round}: Human ${humanScore}, Computer ${computerScore}`);
console.log("*****************************************************************************");
};


//Calculate the score and provide the winner
if(humanScore > computerScore) {
  console.log(`Congratulation!You won the game.Final score: Human ${humanScore} - Computer ${computerScore}`);
} else if (humanScore < computerScore) {
  console.log(`Sorry, you lost the game. Final score: Human ${humanScore} - Computer ${computerScore}`);
} else {
  console.log(` The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
}
}

playGame();









//1) Computer provide a random number that is the value to display: rock =1, scissors=2, paper=3
//2) Human provide the answer: "rock" "scissors" "paper" and the answer should be checked if "rock" then 1, if scissors then 2, if paper then 3.
//3) If you win! * 5 > you lose! * 5 return 

// you win!: scissors > paper, paper > rock, rock > scissors . ..... beats .... 
// you lose!: scissors < rock, paper < scissors, rock < paper

//(humanChoice === "scissors" && computerChoice === "rock") ||
//(humanChoice === "paper" && computerChoice === "scissors") ||
//(humanChoice === "rock" && computerChoice === "paper")
//)
//return  computerChoice+=1 &&