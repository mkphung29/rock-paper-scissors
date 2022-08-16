let playerSelection = prompt("Choose Your Weapon!");
let computerSelection = getComputerChoice();


function getComputerChoice{
    let choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        return ("It's a draw");
    }else if (playerSelection === "Rock") && (computerSelection === "Scissors"){
        return ("You win! Rock beats scissors.");
    }else if (playerSelection === "Rock") && (computerSelection === "Paper"){
        return ("You lose! Paper beats rock.");
    }else if (playerSelection === "Paper") && (computerSelection === "Rock"){
        return ("You win! Paper beats rock.");
    }else if (playerSelection === "Paper") && (computerSelection === "Scissors"){
        return ("You lose! Scissors beats paper.");
    }else if (playerSelection === "Scissors") && (computerSelection === "Paper"){
        return ("You win! Scissors beats paper.");
    }else if (playerSelection === "Scissors") && (computerSelection === "Rock"){
        return ("You lose! Rock beats scissors.");
    }

    }