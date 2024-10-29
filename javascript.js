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
  if (currentRound >= totalRounds + 1) {
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
  if (currentRound === totalRounds + 1) {
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

    // Create Reset Button after the game ends
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    containerMain.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);

// Create a logic to reset a game.
    function resetGame() {
      humanScore = 0;
      computerScore = 0;
      currentRound = 1;
      // Clear all displayed text elements
      [choiceBoth, roundPlay, containerScore, resultText].forEach(
        (el) => (el.textContent = "")
      );
      // Remove the reset button itself
      resetButton.remove();
    }
  }
}

//--------------------------------------------------------------------------------------------------