let botMove = "";
function computerPlay (){
    let random = Math.floor(Math.random()*3) + 1;
    if (random === 1){
        botMove = "rock";
    } else if (random === 2){
        botMove = "paper";
    } else if (random === 3){
        botMove = "scissors";
    }
    return botMove;
};

let move = "";
function player (choice){
    // let choice = prompt("Make your move. 'rock', 'paper' or 'scissors'").toLowerCase();
    if (choice === "rock"){
        move = "rock";
    } else if (choice === "paper"){
        move = "paper";
    } else if (choice === "scissors"){
        move = "scissors";
    }; /*else {
        alert("enter a valid choice!");
        return player();
    }*/

    return move;
}

function startRound(){
    computerPlay();
    alert(`Computer: ${botMove}, You: ${move}`);
    if (botMove === move){
        // roundHeaderElement.textContent = "It's a tie";
        // roundWinnerElement.textContent = "Make Another Move"
        alert("Tie!! Make another Move.");
        
        //win cases
    } else if (botMove === "rock" && move === "paper"){

        alert("You win! Paper beats Rock! Play again.")
        userScore++;
        userScoreElement.textContent = `${userScore}`

    } else if (botMove === "scissors" && move === "rock"){
        alert("You win! Rock beats Scissors! Play again.")
        userScore++;
        userScoreElement.textContent = `${userScore}`

    } else if (botMove === "paper" && move === "scissors"){
        alert("You win! Scissors beat Paper! Play again")
        userScore++;
        userScoreElement.textContent = `${userScore}`
        
        // lose cases
    } else if (botMove === "paper" && move === "rock"){
        alert("You lost this round! Paper beats Rock! Try again")
        botScore++;
        botScoreElement.textContent = `${botScore}`

    } else if (botMove === "rock" && move === "scissors"){
        alert("You lost this round! Rock beats Scissors! Try again")
        botScore++;
        botScoreElement.textContent = `${botScore}`

    } else if (botMove === "scissors" && move === "paper"){
        alert("You lost this round! Scissors beat Paper! Try again")
        botScore++;
        botScoreElement.textContent = `${botScore}`
        
    }
}

let botScore = 0;
let userScore = 0;

function startMatch(){
        startRound();
    let result = "";
    if (botScore < userScore){
        result = `Final Results \n\nYou win! You had: ${userScore} wins, Computer had: ${botScore} wins`;
    } else if (userScore < botScore){
        result = `Final Results \n\nYou lost! You had: ${userScore} wins, Computer had: ${botScore} wins`;
    } else {
        result = `Final Results \n\nIt's a tie! You had: ${userScore} wins, Computer had: ${botScore} wins`;
    }
    // alert(result);
    // botScore = 0;
    // userScore = 0;
}

//startMatch();

//botMoveElements
const botRockElement = document.getElementById("bot-rock");
const botPaperElement = document.getElementById("bot-paper");


const roundHeaderElement = document.querySelector("#round-winner h3");
const roundWinnerElement = document.querySelector("#round-winner h2");

const botScoreElement = document.getElementById("bot-score");
const userScoreElement = document.getElementById("user-score");

//chooseMoves
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");

rockButton.addEventListener("click", () => {
    player("rock");
    startMatch()
    
});
paperButton.addEventListener("click", () => {
    player("paper");
    startMatch()
    
});
scissorsButton.addEventListener("click", () => {
    player("scissors");
    startMatch()
    
});


