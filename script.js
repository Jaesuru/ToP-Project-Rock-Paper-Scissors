console.log("Intializing game...");

// The getComputerChoice function will randomly pick either 
// "rock", "paper", or "scissors" as one of its options and return that value.
function getComputerChoice() {
    const randomizer = Math.floor(Math.random() * 3) + 1;

    switch(randomizer) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "error";
    }
}

// console.log(getComputerChoice());

// And then this awesome little function will ask the user for their input, and store it
// as a variable for later usage. 
function getHumanChoice() {
    const userInput = window.prompt("Choose your move...");
    return userInput.toString();
}

// console.log(getHumanChoice());

// console.log(playRound(getHumanChoice(), getComputerChoice()));

// From this point onwards, a new function called playGame() will be created here
// that will be the overall gameplay in one session. Five rounds, tallying up scores.
// Winner wins all the marbles. 

var humanScore = 0;
var computerScore = 0;

const results = document.getElementById("results");
const score = document.getElementById("score");

// playRound is the main function for the game to determine who the winner is
// by comparing individually the human and computer choice 
// and incrementing values depending on who wins or not.
function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    const computerChoice = getComputerChoice();
    let resultText = `The computer chose ${computerChoice}!`;

        if (humanChoice === computerChoice) {
        resultText += " It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultText += " You win this round!";
    } else {
        computerScore++;
        resultText += " You lose this round!";
    }

    results.textContent = resultText;
    score.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) { 
        results.textContent += `You won!`;
    } else {
        results.textContent += `You lose...`;
    }
}

document.getElementById("rockBtn").addEventListener("click", () => {
    playRound("rock");
});
document.getElementById("paperBtn").addEventListener("click", () => {
    playRound("paper");
});
document.getElementById("scissorBtn").addEventListener("click", () => {
    playRound("scissor");
});