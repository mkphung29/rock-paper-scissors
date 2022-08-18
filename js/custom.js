// Create random computer choice function
function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

//Define computer selection
let computerSelection = getComputerChoice();


//Create function for one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        console.log ("It's a draw");
        return null;
    }else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "SCISSORS")){
        console.log ("You win! Rock beats scissors");
        return true;
    }else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "PAPER")){
        console.log ("You lose! Paper beats rock");
        return false;
    }else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "ROCK")){
        console.log ("You win! Paper beats rock");
        return true;
    }else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "SCISSORS")){
        console.log ("You lose! Scissors beats paper");
        return false;
    }else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "PAPER")){
        console.log ("You win! Scissors beats paper");
        return true;
    }else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "ROCK")){
        console.log ("You lose! Rock beats scissors");
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
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    for (let i = 0; i <5; i++){
        playerSelection = prompt();

        computerSelection = getComputerChoice();
       

        console.log("User plays " +playerSelection+ ", Computer plays " +computerSelection);
        result = (playRound(playerSelection, computerSelection));

        if (result) {
                playerScore += 1;
            } else if (result === false) {
                computerScore += 1;
            } 
            console.log("The score is " +playerScore+ " to " +computerScore); 
        }

        if (playerScore > computerScore) {
            return "You win the game!"
        } else if (computerScore > playerScore) {
            return "Computer wins! You lose!"
        }else{
            return "No winner declared."
        }
}

    console.log(game());
