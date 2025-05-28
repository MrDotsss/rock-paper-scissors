const choices = ["rock", "paper", "scissor"]

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {

    const choice = choices[Math.round(Math.random() * (choices.length - 1))];

   return choice;
}

function getHumanChoice() {
    return prompt("Enter valid choice: ");
}

let round = 0;

function playRound(computerChoice, humanChoice) {
    if(computerChoice === humanChoice) {
        console.log("draw");
    } else {
        if(computerChoice === "rock") {
            switch(humanChoice){
                case "paper":
                    console.log("human wins");
                    humanScore++;
                    break;
                case "scissor":
                    console.log("computer wins");
                    computerScore++;
                    break;
            }
        }
        else if (computerChoice === "paper") {
            switch(humanChoice){
                case "scissor":
                    console.log("human wins");
                    humanScore++;
                    break;
                case "rock":
                    console.log("computer wins");
                    computerScore++;
                    break;
            }
        }
        else if (computerChoice === "scissor") {
            switch(humanChoice){
                case "rock":
                    console.log("human wins");
                    humanScore++;
                    break;
                case "paper":
                    console.log("computer wins");
                    computerScore++;
                    break;
            }
        }
    }
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

    round++;
}
function playGame() {
   for (let index = 0; index < 5; index++) {
    playRound(getComputerChoice(), getHumanChoice());
   }

   if(humanScore === computerScore) {
    console.log("It's a tie!!!");
   }

   if(humanScore > computerScore) {
    console.log("Human wins!!!");
   } else {
    console.log("Computer wins!!!");
   }
}

playGame();
