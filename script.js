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

function playGame() {
    var humanScore = 0;
    var computerScore = 0;


    // playRound is the main function for the game to determine who the winner is
    // by comparing individually the human and computer choice 
    // and incrementing values depending on who wins or not.
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice;
        console.log(`The computer chooses... ${computerChoice}!`);

        if (humanChoice == "rock") {
            if (computerChoice == "rock") {
                return " >It's a tie!";
            } else if (computerChoice == "paper") {
                computerScore++;
                return " >You lose! Paper beats rock.";
            } else {
                humanScore++;
                return " >You win! Rock beats scissors.";
            }
        } else if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                humanScore++;
                return " >You win! Paper beats rock";
            } else if (computerChoice == "paper") {
                return " >It's a tie!";
            } else {
                computerScore++;
                return " >You lose! Scissors beats paper.";
            }
        } else {
            if (computerChoice == "rock") {
                computerScore++;
                return " >You lose! Rock beats scissors.";
            } else if (computerChoice == "paper") {
                humanScore++;
                return(" >You win! Scissors beat paper.");
            } else {
                return(" >It's a tie!");
            }
        }
    }

    for(let i = 0; i < 5; i++) {
        console.log(`==============================`)
        console.log(`Beginning Round: ${i + 1}... START!`);
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log("Tallying up total scores...");
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer's score: ${computerScore}`);

    if (humanScore < computerScore) {
        console.log("You lost!");
    } else if (computerScore > humanScore) {
        console.log("You won!");
    } else if (computerScore == humanScore){
        console.log("It was a tie?!");
    }
}

playGame();