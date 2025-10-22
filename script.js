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

