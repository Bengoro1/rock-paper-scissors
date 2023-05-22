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

let playerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound () {    
    getComputerChoice();       
    if (playerSelection === computerChoice) {
        resultRound.textContent =  "It's a tie!";
    } else if ((playerSelection == "rock" && computerChoice == "paper") || (playerSelection == "paper" && computerChoice == "scissors") || (playerSelection == "scissors" && computerChoice == "rock")) {
        computerScore++
        resultRound.textContent =  "You lose!, " + computerChoice + " beats " + playerSelection;
    } else if ((playerSelection == "rock" && computerChoice == "scissors") || (playerSelection == "paper" && computerChoice == "rock") || (playerSelection == "scissors" && computerChoice == "paper")) {
        playerScore++
        resultRound.textContent =  "You win!, " + playerSelection + " beats " + computerChoice;
    }
    if (playerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultGame.textContent = "You won! You have beaten the computer.";
    } else if (computerScore == 5) {
        playerScore = 0;
        computerScore = 0;
        resultGame.textContent = "You lost! The computer beat you.";
    } else {
        resultGame.textContent = `Your score is: ${playerScore}. Computer's score is: ${computerScore}.`;
    }
}

const resultRound = document.querySelector("#resultRound");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
rock.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
});

paper.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
});

scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound();
});

 