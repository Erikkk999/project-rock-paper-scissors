
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}


function getHumanChoice() {
    let person = prompt("rock, paper or scissors?", "choose")
 
    switch(person) {
        case "rock":
        case "paper":
        case "scissors":
            return getComputerChoice();
    }
 }



