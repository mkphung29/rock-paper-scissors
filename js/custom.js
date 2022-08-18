//Define player selection
let playerSelection = prompt ("Choose your weapon!");

console.log ("You choose " + playerSelection);


// Create random computer choice function
function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

//Define computer selection
let computerSelection = getComputerChoice();

//Define scores
let playerScore = 0;
let computerScore = 0;


//Create function for one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return ("It's a draw");
    }else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "SCISSORS")){
        return ("You win! Rock beats scissors");
        playerScore++;
    }else if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "PAPER")){
        return ("You lose! Paper beats rock");
        computerScore++;
    }else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "ROCK")){
        return ("You win! Paper beats rock");
        playerScore++;
    }else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "SCISSORS")){
        return ("You lose! Scissors beats paper");
        computerScore++;
    }else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "PAPER")){
        return ("You win! Scissors beats paper");
        playerScore++;
    }else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "ROCK")){
        return ("You lose! Rock beats scissors");
        computerScore++;
    }else {
        return "Not a valid input"
    }
}

    //Fix playerScore++ / computerScore++ ???



//Loop
function game() {
    for (let i = 0; i <5; i++){
        playerSelection = prompt ("Choose your weapon!");
        console.log ("You choose " + playerSelection);

        function getComputerChoice(){
            let choices = ["Rock", "Paper", "Scissors"];
            let random = choices[Math.floor(Math.random() * choices.length)];
            return random;
        }
        computerSelection = getComputerChoice();
        console.log ("The computer chooses " + computerSelection);

        console.log(playRound(playerSelection, computerSelection)); //undefined
            }
            if (playerScore > computerScore){
                return ("You win the game!");
            }else if (playerScore < computerScore){
                return ("You lose the game!");            
            }
}


//Prompt 5 rounds:
console.log(game());

//console.log is undefined

    //Fix the results below:
console.log("Your final score is " +playerScore+ "wins and " +computerScore+ "losses");

