let playerSelection = prompt("Choose Your Weapon!");
let computerSelection = getComputerChoice();


function getComputerChoice{
    let choices = ["Rock", "Paper", "Scissors"];
    let random = choices[Math.floor(Math.random() * choices.length)];
    return random;
}

