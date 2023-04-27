let computerChoice;
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    randomNumber = Math.floor(Math.random() * 3);
}

let promptChoice;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound () {    
    getComputerChoice();
    promptChoice = prompt("What is your choice...?", "Rock");
    playerSelection = promptChoice.toLowerCase();   
    if (playerSelection === computerChoice) {
        return "It's a tie!";
    } else if ((playerSelection == "rock" && computerChoice == "paper") || (playerSelection == "paper" && computerChoice == "scissors") || (playerSelection == "scissors" && computerChoice == "rock")) {
        computerScore++
        return "You lose!, " + computerChoice + " beats " + playerSelection;
    } else if ((playerSelection == "rock" && computerChoice == "scissors") || (playerSelection == "paper" && computerChoice == "rock") || (playerSelection == "scissors" && computerChoice == "paper")) {
        playerScore++
        return "You win!, " + playerSelection + " beats " + computerChoice;
    } else {
        return "Invalid entry";
    }    
}

function game() {
    do {
        alert(playRound());
        if (playerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            alert("You won! You have beaten the computer.")
        } else if (computerScore == 5) {
            playerScore = 0;
            computerScore = 0;
            alert("You lost! The computer beat you.")
        } else {
            alert(`Your score is: ${playerScore}. Computer's score is: ${computerScore}.`)
        }
    } while ((playerScore < 5) && (computerScore < 5));   
}
 game();
