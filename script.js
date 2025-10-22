console.log("Intializing game...");
var humanScore = 0;
var computerScore = 0;

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

// playRound is the main function for the game to determine who the winner is
// by comparing individually the human and computer choice 
// and incrementing values depending on who wins or not.
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice;

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            return "It's a tie!";
        } else if (computerChoice == "paper") {
            computerScore++;
            return "You lose! Paper beats rock.";
        } else {
            humanScore++;
            return "You win! Rock beats scissors.";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            return "You win! Paper beats rock";
        } else if (computerChoice == "paper") {
            return "It's a tie!";
        } else {
            computerScore++;
            return "You lose! Scissors beats paper.";
        }
    } else {
        if (computerChoice == "rock") {
            computerScore++;
            return "You lose! Rock beats scissors.";
        } else if (computerChoice == "paper") {
            humanScore++;
            return("You win! Scissors beat paper.");
        } else {
            return("It's a tie!");
        }
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));
