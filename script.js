function game() {
    // play a 5 round game

    let rounds = 5;

    // that keeps scores

    let playerScore = 0;
    let computerScore = 0;

    for (let count = 1; count <= rounds; count++) {
        let userChoice = prompt("Make your choice");

        let playerSelection = userChoice.toLowerCase().toString();

        let weaponArray = ["rock", "paper", "scissors"];

        let computerSelection =
            weaponArray[Math.floor(Math.random() * weaponArray.length)];

        if (playerSelection == computerSelection) {
            console.log(`${playerSelection} and ${computerSelection}. It's a tie!`);
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            console.log(`paper covers rock. You win!`);
            playerScore++;
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            console.log(`scissors cuts paper. You lose!`);
            computerScore++;
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            console.log(`paper covers rock. You lose!`);
            computerScore++;
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            console.log(`rock crushes scissors. You win!`);
            playerScore++;
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            console.log(`rock crushes scissors. You lose!`);
            computerScore++;
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            console.log(`scissors cuts paper. You win!`);
            playerScore++;
        }
        // displays current scores after each round

        console.log(
            ` Round #${count} Your Score: ${playerScore}  Bot Score: ${computerScore}`
        );

        // and reports a winner or loser at the end.
    }
    return playerScore > computerScore ?
        `You are victorious!` :
        playerScore < computerScore ?
        `You have been defeated!` :
        `A draw! Play again?`;
}