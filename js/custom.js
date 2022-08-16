//Create function for one round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return ("It's a draw");
    }else if ((playerSelection === "Rock") && (computerSelection === "Scissors")){
        return ("You win! Rock beats scissors");
        playerScore++;
    }else if ((playerSelection === "Rock") && (computerSelection === "Paper")){
        return ("You lose! Paper beats rock");
        computerScore++;
    }else if ((playerSelection === "Paper") && (computerSelection === "Rock")){
        return ("You win! Paper beats rock");
        playerScore++;
    }else if ((playerSelection === "Paper") && (computerSelection === "Scissors")){
        return ("You lose! Scissors beats paper");
        computerScore++;
    }else if ((playerSelection === "Scissors") && (computerSelection === "Paper")){
        return ("You win! Scissors beats paper");
        playerScore++;
    }else if ((playerSelection === "Scissors") && (computerSelection === "Rock")){
        return ("You lose! Rock beats scissors");
        computerScore++;
    }

    }

//Define player selection
let playerSelection = prompt ("Choose your weapon!");
console.log ("You choose" + playerSelection);

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


//Define playRound
console.log(playRound(playerSelection, computerSelection));


//Loop
function game() {
    for (let i = 0; i <5; i++){
        playerSelection = prompt ("Choose your weapon!");
        console.log ("You choose" + playerSelection);

        function getComputerChoice(){
            let choices = ["Rock", "Paper", "Scissors"];
            let random = choices[Math.floor(Math.random() * choices.length)];
            return random;
        }
        computerSelection = getComputerChoice();
        console.log ("The computer chooses" + computerSelection);

        console.log (playRound(playerSelection, computerSelection));
            }
            if (playerScore > computerScore){
                return ("You win the game!");
            }else if (playerScore < computerScore){
                return ("You lose the game!");            
            }
}