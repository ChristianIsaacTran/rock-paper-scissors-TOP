//console.log("THIS IS A TEST");

/*
Objective: Plays the game by running playRound 5 times. Keeps track of scores and declares winner after 5 rounds.

Pseudocode:
call playRound 5 times
after 5 playRound calls, check who has greater score
console.log a winner
*/
//Global scope score variables
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

btnRock.style.margin = "10px";
btnPaper.style.margin = "10px";
btnScissors.style.margin = "10px";

container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);


/*
Objective: Write a function that randomly returns a string "rock", "paper", or "scissors".

Pseudocode:
Create Math.random variable
Use Math.random to make a random number between 1-3
if random variable equals 1, return "rock"
else if random variable equals 2, return "paper"
else random variable equals anything else, return "scissors"
*/
function getComputerChoice() {
    //Math.random() * (max - min) + min; min is inclusive, max is exclusive
    const max = Math.floor(4);
    const min = Math.ceil(1);
    let randomNum = Math.floor(Math.random() * (max - min) + min);

    if (randomNum === 1) {
        console.log("ROCK");
        return "Rock";
    }
    else if (randomNum === 2) {
        console.log("PAPER");
        return "Paper";
    }
    else {
        console.log("SCISSORS");
        return "Scissors";
    }
}

/*
Objective: Get human choice from player and return it
 
Pseudocode:
Create a variable that holds the user input
prompt user to make a valid selection
store user input into variable
return variable 
*/
function getHumanChoice(userInput) {
    if (userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS") {
        return userInput;
    }
    else {
        console.error("NOT A VALID INPUT");
    }
}

/*
Objective: Use parameters to decide the logic to a rock paper scissors game, and increment the winner's variable.
 
Pseudocode:
Check for human winner. If human wins, increment humanScore by 1.
Check for same selection. If either side chooses the same thing, its a tie, increment nothing.
Check for computer winner. If human is NOT the winner, then increment the computerScore by 1.
*/
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "ROCK" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    }
    else if (humanChoice === "PAPER" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    }
    else if (humanChoice === "SCISSORS" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    }
    else if (humanChoice === computerChoice.toUpperCase()) {
        console.log("It's a tie! No one wins.")
    }
    else {
        console.log("You LOSE! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    }
}

function checkWinner() {
    //Check who has higher score and declare winner
    if (humanScore > computerScore) {
        console.log("Human is the overall winner with a score of: " + humanScore);
    }
    else if (humanScore === computerScore) {
        console.log("Human and computer both have the same score. It's a tie overall.")
    }
    else {
        console.log("Computer is the overall winner with a score of: " + computerScore);
    }
}

btnRock.addEventListener("click", function(){
    console.log("ROCK IS CLICKED");
    playRound(getHumanChoice("ROCK"), getComputerChoice());
});

btnPaper.addEventListener("click", function(){
    console.log("PAPER IS CLICKED");
    playRound(getHumanChoice("PAPER"), getComputerChoice());
});

btnScissors.addEventListener("click", function(){
    console.log("SCISSORS IS CLICKED");
    playRound(getHumanChoice("SCISSORS"), getComputerChoice());
});




