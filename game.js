let computerChoice
let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = "Rock";
    } else if (randomNumber === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    console.log(randomNumber);
    console.log(computerChoice)
    randomNumber = Math.floor(Math.random() * 3);
}

let promptChoice = prompt("What is your choice...?")
let playerSelection = promptChoice.toLowerCase();
let playRound = () => {
    if (playerSelection == "rock" && computerChoice === "Paper") {
        return "Rock beats paper, you win!";
    } else if (playerSelection == "rock" && computerChoice === "Scissors") {
        return "Scissors beat rock, you lose!";
    } else if (playerSelection == "paper" && computerChoice === "Rock") {
        return "Paper beats rock, you win!";   
    } else if (playerSelection == "paper" && computerChoice === "Scissors") {
        return "Scissors beat paper, you lose!";  
    } else if (playerSelection == "scissors" && computerChoice === "rock") {
        return "Rock beats scissors, you lose!";   
    } else if (playerSelection == "scissors" && computerChoice === "paper") {
        return "scissors beats paper, you win!";  
    } else {
        return "It's a tie!";
    } 
}
getComputerChoice();
console.log(playRound());
