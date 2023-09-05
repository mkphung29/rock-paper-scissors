// Create random computer choice function
function getComputerChoice(){
    let choices = ["Fire", "Water", "Grass"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

let playerSelection;

// Define player selections
const fireBtn = document.querySelector('#fire-button');
fireBtn.addEventListener('click', () => {
    playerSelection = "Fire";
});

const waterBtn = document.querySelector('#water-button');
waterBtn.addEventListener('click', () => {
    playerSelection = "Water";
});

const grassBtn = document.querySelector('#grass-button');
grassBtn.addEventListener('click', () => {
    playerSelection = "Grass";
});

//Define computer selection
let computerSelection = getComputerChoice();


//Create function for one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log ("It's a draw");
        return null;
    }else if ((playerSelection.toUpperCase() === "FIRE") && (computerSelection.toUpperCase() === "GRASS")){
        console.log ("You win! Fire beats Grass");
        return true;
    }else if ((playerSelection.toUpperCase() === "FIRE") && (computerSelection.toUpperCase() === "WATER")){
        console.log ("You lose! Water beats Fire");
        return false;
    }else if ((playerSelection.toUpperCase() === "WATER") && (computerSelection.toUpperCase() === "FIRE")){
        console.log ("You win! Water beats Fire");
        return true;
    }else if ((playerSelection.toUpperCase() === "WATER") && (computerSelection.toUpperCase() === "GRASS")){
        console.log ("You lose! Grass beats Water");
        return false;
    }else if ((playerSelection.toUpperCase() === "GRASS") && (computerSelection.toUpperCase() === "WATER")){
        console.log ("You win! Grass beats Water");
        return true;
    }else if ((playerSelection.toUpperCase() === "GRASS") && (computerSelection.toUpperCase() === "FIRE")){
        console.log ("You lose! Fire beats Grass");
        return false;
        
    }else {
        console.log ("Not a valid input");
        return null;
    }
}

//Loop
function game() {
    let playerSelection, computerSelection, result;
    let playerScore = 0;
    let computerScore = 0;
    const choices = ["FIRE", "WATER", "GRASS"]

    computerSelection = getComputerChoice();

    console.log("User plays " + playerSelection + ", Computer plays " + computerSelection);
    result = (playRound(playerSelection, computerSelection));

    if (result === true) {
        playerScore += 1;
    }else if (result === false) {
        computerScore += 1;
    }

    console.log("The score is " +playerScore+ " to " +computerScore);

    if (playerScore > computerScore) {
        return "You win the game!";
    } else if (computerScore > playerScore) {
        return "Computer wins! You lose!";
    }else{
        return "No winner declared.";
    }

}

console.log(game());
