document.addEventListener("DOMContentLoaded", function() {
    const fireButton = document.getElementById("fire-button element-button");
    const waterButton = document.getElementById("water-button element-button");
    const grassButton = document.getElementById("grass-button element-button");
    const playerScoreElement = document.querySelector(".user-score");
    const cpuScoreElement = document.querySelector(".cpu-score");
    const scoreText = document.querySelector(".in-between");
    const captionText = document.querySelector(".caption-text");
    const playerCard = document.getElementById("player-card");
    const cpuCard = document.getElementById("cpu-card");

    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    let gameOver = false;

    
    const roundsToWin =  5;

    // Get computer choice
    function getComputerChoice(){
        const choices = ["Fire", "Water", "Grass"];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];
        
    
        return computerSelection;
    }

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection){
            captionText.textContent = "It's a draw.";
            return null;
        }else if ((playerSelection.toUpperCase() === "FIRE") && (computerSelection.toUpperCase() === "GRASS")){
            captionText.textContent = "You win! Fire beats Grass."
            return true;
        }else if ((playerSelection.toUpperCase() === "FIRE") && (computerSelection.toUpperCase() === "WATER")){
            captionText.textContent = "You lose! Water beats Fire."
            return false;
        }else if ((playerSelection.toUpperCase() === "WATER") && (computerSelection.toUpperCase() === "FIRE")){
            captionText.textContent = "You win! Water beats Fire."
            return true;
        }else if ((playerSelection.toUpperCase() === "WATER") && (computerSelection.toUpperCase() === "GRASS")){
            captionText.textContent = "You lose! Grass beats Water."
            return false;
        }else if ((playerSelection.toUpperCase() === "GRASS") && (computerSelection.toUpperCase() === "WATER")){
            captionText.textContent = "You win! Grass beats Water.";
            return true;
        }else if ((playerSelection.toUpperCase() === "GRASS") && (computerSelection.toUpperCase() === "FIRE")){
            captionText.textContent = "You lose! Fire beats Grass."
            return false;
        }
    }

    function updatePlayerChoice(choice){
        const playerCardImg = document.getElementById("player-card-img");

        switch (choice){
            case "FIRE":
                playerCardImg.src = "../images/char-battle.png";
                break;
            case "WATER":
                playerCardImg.src = "../images/squirt-battle.png";
                break;
            case "GRASS":
                playerCardImg.src = "../images/bulb-battle.png";
                break;
            default:
                break;
        }
    }

    function updateCpuChoice(choice){
        const cpuCardImg = document.getElementById("cpu-card-img");

        switch(choice){
            case "FIRE":
                cpuCardImg.src = "../images/tepig-battle.png";
                break;
            case "WATER":
                cpuCardImg.src = "../images/oshawatt-normal.png";
                break;
            case "GRASS":
                cpuCardImg.src = "../images/snivy-battle.png";
                break;
            default:
                break;
        }
    }

    // Event listeners for player's choices
    fireButton.addEventListener('click', () => {
        if(!gameOver){
            playerSelection = "Fire";
            playRoundAndCheckResult();
        }
    });

    waterButton.addEventListener('click', () => {
        if(!gameOver){
            playerSelection = "Water";
            playRoundAndCheckResult();
        }
    });

    grassButton.addEventListener('click', () => {
        if(!gameOver){
            playerSelection = "Grass";
            playRoundAndCheckResult();
        }
    });

    function playRoundAndCheckResult(){
        computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        if(result === true){
            playerScore += 1;
        } else if (result === false){
            computerScore += 1;
        }

        updateGameState();

        // Check if the game is over
        if(playerScore === roundsToWin || computerScore === roundsToWin){
            endGame();
        }
    }

    function endGame() {
        // Display the winner
        if (playerScore === roundsToWin) {
            captionText.textContent = "Congrats! You win the Pokemon battle!";
        } else if (computerScore === roundsToWin) {
            captionText.textContent = "Your opponent wins the battle. Better luck next time!";
        }

        gameOver = true;

        // Remove event listeners
        fireButton.removeEventListener('click', playRoundAndCheckResult);
        waterButton.removeEventListener('click', playRoundAndCheckResult);
        grassButton.removeEventListener('click', playRoundAndCheckResult);
    }

    function playGame(){

        if(gameOver === false){
            playerSelection = null; // Reset player selection at the start of the game
        }
    }

    function updateGameState() {
        playerScoreElement.textContent = playerScore;
        cpuScoreElement.textContent = computerScore;
        scoreText.textContent = "to";

        updatePlayerChoice(playerSelection);
        updateCpuChoice(computerSelection);

        // Update player card image
        if (playerSelection.toUpperCase() === "FIRE") {
            playerCard.innerHTML = `<img src="../images/char-battle.png">`
        } else if (playerSelection.toUpperCase() === "WATER") {
            playerCard.innerHTML = `<img src="../images/squirt-battle.png">`
        } else if (playerSelection.toUpperCase() === "GRASS") {
            playerCard.innerHTML = `<img src="../images/bulb-battle.png">`
        }

        // Update CPU card image
        if (computerSelection.toUpperCase() === "FIRE") {
            cpuCard.innerHTML = `<img src="../images/tepig-battle.png">`
        } else if (computerSelection.toUpperCase() === "WATER") {
            cpuCard.innerHTML = `<img src="../images/oshawatt-battle.png">`
        } else if (computerSelection.toUpperCase() === "GRASS") {
            cpuCard.innerHTML = `<img src="../images/snivy-battle.png">`
        }
    }

    playGame();

})