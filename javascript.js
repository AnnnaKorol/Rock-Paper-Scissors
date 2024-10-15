//!Add buttons to java script:
const rock = document.querySelector("#rockBtn");
const scissors = document.querySelector("#scissorsBtn");
const paper = document.querySelector("#paperBtn");

//!Main container and paragraphs for the results received:
const containerMain = document.querySelector("#containerMain");
const choiceBoth = document.createElement("p"); //Round 1: Human: rock | Computer: rock
const containerScore = document.createElement("div"); //👥 It’s a tie! 🤝
const roundPlay = document.createElement("p"); //Score: Human 0 | Computer 0
const resultText = document.createElement("p"); //🎉 Congratulations! You won the game. Final score: Human ${humanScore} | Computer ${computerScore}`;

let humanScore = 0;
let computerScore = 0;
let currentRound = 1;
const totalRounds = 5;

// Get the computer's random choice
function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3) + 1;
  if (randomValue === 1) {
    return "rock";
  } else if (randomValue === 2) {
    return "scissors";
  } else {
    return "paper";
  }
}

rock.addEventListener("click", () => playRound("rock"));
scissors.addEventListener("click", () => playRound("scissors"));
paper.addEventListener("click", () => playRound("paper"));



// Play a single round
function playRound(humanChoice) {
  if (currentRound >= totalRounds+1) {
    return; // Game over, no more rounds to play
  }

  const computerChoice = getComputerChoice();

  choiceBoth.textContent = `Round ${currentRound}: Human: ${humanChoice} | Computer: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    containerScore.textContent = "👥 It’s a tie! 🤝";
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore++;
    containerScore.textContent = `😀 You win! 🎉 ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    containerScore.textContent = `😣 You lose! ❌ ${computerChoice} beats ${humanChoice}`;
  }

  roundPlay.textContent = `Score: Human ${humanScore} | Computer ${computerScore}`;
  currentRound++;

      // Append elements to DOM
      containerMain.appendChild(choiceBoth);
      containerMain.appendChild(containerScore);
      containerMain.appendChild(roundPlay);
  if (currentRound === totalRounds+1) {
    endGame();
  } 


  // End the game and display final result
  function endGame() {
    if (humanScore > computerScore) {
      resultText.textContent = `🎉 Congratulations! You won the game. Final score: Human ${humanScore} | Computer ${computerScore}`;
    } else if (humanScore < computerScore) {
      resultText.textContent = `😟 Sorry, you lost the game. Final score: Human ${humanScore} | Computer ${computerScore}`;
    } else {
      resultText.textContent = `🤝 The game is a tie! Final score: Human ${humanScore} | Computer ${computerScore}`;
    }
    containerMain.appendChild(resultText);
  }
    if(currentRound == 2) {
      const reset = document.createElement("button");
      const containerChoice = document.querySelector("#containerChoice");
      containerChoice.appendChild(reset);
      reset.textContent = "Reset";
      return reset;
    }
}

















// containerMain.appendChild(choiceBoth);
// containerMain.appendChild(containerScore);
// containerMain.appendChild(roundPlay);
// containerMain.appendChild(roundResult);
// containerMain.appendChild(resultText);

// //Human choice
//  function getHumanChoice() {
//   const humanChoice = ['rock', 'scissors', 'paper'];
//   return humanChoice;
// }
// getHumanChoice();

// //Computer choice
// function getComputerChoice() {
//   const randomValue = Math.floor(Math.random() * 3) + 1;
//   if (randomValue === 1) {
//     return "rock";
//   } else if (randomValue === 2) {
//     return "scissors";
//   } else {
//     return "paper";
//   }
// }
// getComputerChoice();

// //Human choice
// // function getHumanChoice() {
// //   let humanChoice = prompt(
// //     "What is your choice? (rock, paper, scissors)"
// //   ).toLowerCase();
// //   while (
// //     humanChoice !== "rock" &&
// //     humanChoice !== "scissors" &&
// //     humanChoice !== "paper"
// //   ) {
// //     humanChoice = prompt(
// //       "Invalid choice. Please enter rock, paper, scissors."
// //     ).toLowerCase();
// //   }
// //   return humanChoice;
// // }
// //console.log(getHumanChoice());

// // Play single round
// function playRound(humanChoice, computerChoice) {
//   choiceBoth.textContent = `Human: ${humanChoice}| Computer: ${computerChoice}`;
//   if (humanChoice === computerChoice) {
//     containerScore.textContent = "👥It’s a tie!🤝";
//     return "tie";
//   } else if (
//     (humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock") ||
//     (humanChoice === "rock" && computerChoice === "scissors")
//   ) {
//     containerScore.textContent = `😀You win!🎉 ${
//       humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
//     } beats ${
//       computerChoice.charAt(0).toUpperCase() +
//       computerChoice.slice(1).toLowerCase()
//     }`;
//     return "human";
//   } else {
//     containerScore.textContent = `😣You lose!❌ ${
//       computerChoice.charAt(0).toUpperCase() +
//       computerChoice.slice(1).toLowerCase()
//     } beats ${
//       humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
//     }`;
//     return "computer";
//   }
// }
// playRound();

// // Play single round
// // function playRound(humanChoice, computerChoice) {
// //   console.log(`Human: ${humanChoice}| Computer: ${computerChoice}`);
// //   if (humanChoice === computerChoice) {
// //     console.log("%c👥It’s a tie!🤝", "background: #82cef5; color#cff2cb");
// //     return "tie";
// //   } else if (
// //     (humanChoice === "scissors" && computerChoice === "paper") ||
// //     (humanChoice === "paper" && computerChoice === "rock") ||
// //     (humanChoice === "rock" && computerChoice === "scissors")
// //   ) {
// //     console.log(
// //       `%c😀You win!🎉 ${
// //         humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
// //       } beats ${
// //         computerChoice.charAt(0).toUpperCase() +
// //         computerChoice.slice(1).toLowerCase()
// //       }`,
// //       "background: #f7f131; color: #0d0d0d"
// //     );
// //     return "human";
// //   } else {
// //     console.log(
// //       `%c😣You lose!❌  ${
// //         computerChoice.charAt(0).toUpperCase() +
// //         computerChoice.slice(1).toLowerCase()
// //       } beats ${
// //         humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
// //       }`,
// //       "background: #fac2b4; color: #0d0d0d"
// //     );
// //     return "computer";
// //   }
// // }
// // //console.log(playRound());

// // Play game with added Scores for computer and human
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let round = 1; round <= 5; round++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);
//     roundPlay.textContent = `Round ${round}`;

//     if (result === "human") {
//       humanScore++;
//     } else if (result === "computer") {
//       computerScore++;
//     }
//     roundResult.textContent =
//       `Score after round ${round}: Human ${humanScore}, Computer ${computerScore}`;
//     console.log(
//       "*****************************************************************************"
//     );
//   }

//  //Calculate the score and provide the winner
//  if (humanScore > computerScore) {
//   resultText.textContent =`Congratulation🎉!You won the game. \n\n Final score: Human ${humanScore} - Computer ${computerScore}`;
// } else if (humanScore < computerScore) {
//   resultText.textContent =
//     `Sorry😟, you lost the game. \n\n Final score: Human ${humanScore} - Computer ${computerScore}`;
// } else {
//   resultText.textContent =`The game is a tie🤝! \n\n Final score: Human ${humanScore} - Computer ${computerScore}`;
// }
// }

// playGame();

// // Play game with added Scores for computer and human
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let round = 1; round <= 5; round++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);
//     console.log(`Round ${round}`);

//     if (result === "human") {
//       humanScore++;
//     } else if (result === "computer") {
//       computerScore++;
//     }
//     console.log(
//       `Score after round ${round}: Human ${humanScore}, Computer ${computerScore}`
//     );
//     console.log(
//       "*****************************************************************************"
//     );
//   }

// //Play game with added Scores for computer and human
// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;

//   for (let round = 1; round <= 5; round++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(humanSelection, computerSelection);
//     console.log(`Round ${round}`);

//     if (result === "human") {
//       humanScore++;
//     } else if (result === "computer") {
//       computerScore++;
//     }
//     console.log(
//       `Score after round ${round}: Human ${humanScore}, Computer ${computerScore}`
//     );
//     console.log(
//       "*****************************************************************************"
//     );
//   }

//Calculate the score and provide the winner
//   if (humanScore > computerScore) {
//     console.log(
//       `%cCongratulation🎉!You won the game. \n\n Final score: Human ${humanScore} - Computer ${computerScore}`,
//       "background-color: Yellow ; color: white ; font-weight: bold ; " +
//         "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
//         "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
//     );
//   } else if (humanScore < computerScore) {
//     console.log(
//       `%cSorry😟, you lost the game. \n\n Final score: Human ${humanScore} - Computer ${computerScore}`,
//       "background-color: Tomato; color: white ; font-weight: bold ; " +
//         "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
//         "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
//     );
//   } else {
//     console.log(
//       `%cThe game is a tie🤝! \n\n Final score: Human ${humanScore} - Computer ${computerScore}`,
//       "background-color: Blue ; color: white ; font-weight: bold ; " +
//         "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
//         "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
//     );
//   }
// }

// playGame();

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

//
