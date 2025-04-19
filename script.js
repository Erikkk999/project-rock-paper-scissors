
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else if (random === 2) {
        return "scissors"
    }
}


function getHumanChoice() {
    let person = prompt("rock, paper or scissors?", "choose").toLowerCase();
    return person

 }

    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lost! Paper beats Rock.");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lost! Rock beats Scissors.");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors.");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lost! Scissors beats Paper.");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beats Paper.");
    } else if (humanChoice === computerChoice) {
        console.log("Tie.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);





