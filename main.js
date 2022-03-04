let botMove = "";
function computerPlay (){
    let random = Math.floor(Math.random()*3) + 1;
    let botId = ""
    if (random === 1){
        botMove = "rock";
        botId = "bot-rock";
    } else if (random === 2){
        botMove = "paper";
        botId = "bot-paper";
    } else if (random === 3){
        botMove = "scissors";
        botId = "bot-scissors";
    }

    //showBotIcons(botId)
    showIcons(botId);
    // return botMove;
};

let move = "";
function player(choice){
    let id = "";

    if (choice === "rock"){
        move = "rock";
        id = "user-rock"

    } else if (choice === "paper"){
        move = "paper";
        id = "user-paper"
    } else if (choice === "scissors"){
        move = "scissors";
        id = "user-scissors"
    }; /*else {
        alert("enter a valid choice!");
        return player();
    }*/
    // return move;

    showIcons(id);
}

function startRound(){
    computerPlay();
    // alert(`Computer: ${botMove}, You: ${move}`);
    if (botMove === move){
        roundHeaderElement.textContent = "";
        roundWinnerElement.textContent = "It's a tie for this round!"
        roundFooterElement.textContent = "Make another move"
        // alert("Tie!! Make another Move.");
        
        //win cases
    } else if (botMove === "rock" && move === "paper"){
        roundHeaderElement.textContent = "Paper beats Rock";
        roundWinnerElement.textContent = "You won this round"
        roundFooterElement.textContent = "Make another move"

        // alert("You win! Paper beats Rock! Play again.")
        userScore++;
        userScoreElement.textContent = `${userScore}`

    } else if (botMove === "scissors" && move === "rock"){
        roundHeaderElement.textContent = "Rock beats Scissors";
        roundWinnerElement.textContent = "You won this round"
        roundFooterElement.textContent = "Make another move"

        // alert("You win! Rock beats Scissors! Play again.")
        userScore++;
        userScoreElement.textContent = `${userScore}`

    } else if (botMove === "paper" && move === "scissors"){
        roundHeaderElement.textContent = "Scissors beat Paper";
        textContent = "You won this round"
        roundFooterElement.textContent = "Make another move"

        // alert("You win! Scissors beat Paper! Play again")
        userScore++;
        userScoreElement.textContent = `${userScore}`
        
        // lose cases
    } else if (botMove === "paper" && move === "rock"){
        roundHeaderElement.textContent = "Paper beats Rock";
        roundWinnerElement.textContent = "You lost this round"
        roundFooterElement.textContent = "Make another move"

        // alert("You lost this round! Paper beats Rock! Try again")
        botScore++;
        botScoreElement.textContent = `${botScore}`

    } else if (botMove === "rock" && move === "scissors"){
        roundHeaderElement.textContent = "Rock beats Scissors";
        roundWinnerElement.textContent = "You lost this round"
        roundFooterElement.textContent = "Make another move"

        // alert("You lost this round! Rock beats Scissors! Try again")
        botScore++;
        botScoreElement.textContent = `${botScore}`

    } else if (botMove === "scissors" && move === "paper"){
        roundHeaderElement.textContent = "Scissors beat Paper";
        roundWinnerElement.textContent = "You lost this round"
        roundFooterElement.textContent = "Make another move"

        // alert("You lost this round! Scissors beat Paper! Try again")
        botScore++;
        botScoreElement.textContent = `${botScore}`
        
    }
    if (botScore === 5 || userScore === 5){
        getWinner()
    };
}

let botScore = 0;
let userScore = 0;

function waitForStart(){
    document.querySelector(".move-button-div").classList.toggle("unsee");
    newGameButton.classList.toggle("unsee")
}
//waitForStart();

function startNewGame(){
    resultElement.textContent = "";
    roundHeaderElement.textContent = "";
    roundWinnerElement.textContent = ""
    roundFooterElement.textContent = ""
    botScore = 0;
    userScore = 0;
    botScoreElement.textContent = `${botScore}`
    userScoreElement.textContent = `${botScore}`
    document.querySelector(".move-button-div").classList.toggle("unsee");
    newGameButton.classList.toggle("unsee")
    hideIcons();
}

function getWinner(){
        // startRound();
    let result = "";
    
    if (botScore < userScore){
        result = `You Win!`;
    } else if (userScore < botScore){
        result = `You Lose!`;
    } else {
        result = `It's a Tie!`;
    }
    resultElement.textContent = result;
    const brElement = document.createElement("br");
    resultElement.appendChild(brElement);
    resultElement.appendChild(document.createTextNode("start a new game"));

    waitForStart()

    setTimeout(() => {

    }, 5000)
}

function hideIcons() {
    const moveIcons = document.querySelectorAll(".show-move img");
    for (icon of moveIcons){
        if (!icon.classList.contains("hidden")){
            icon.classList.add("hidden")
        }
    }
};

//hideIcons();

function showIcons(id) {
    document.getElementById(`${id}`).classList.remove("hidden");
}



//startMatch();

//botMoveElements
const botRockElement = document.getElementById("bot-rock");
const botPaperElement = document.getElementById("bot-paper");


const roundHeaderElement = document.querySelector("#round-winner h3");
const roundWinnerElement = document.querySelector("#round-winner h2");
const roundFooterElement = document.querySelector("#round-winner :last-child");

const botScoreElement = document.getElementById("bot-score");
const userScoreElement = document.getElementById("user-score");

const resultElement = document.getElementById("result");

const newGameButton = document.querySelector(".fourth button");

//chooseMoves
const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scissorsButton = document.getElementById("scissors-button");








rockButton.addEventListener("click", () => {
    hideIcons()

    player("rock");
    resultElement.textContent = "";
    setTimeout(startRound, );
    
});
paperButton.addEventListener("click", () => {
    hideIcons()
    player("paper");
    resultElement.textContent = "";
    setTimeout(startRound, );
    
});
scissorsButton.addEventListener("click", () => {
    hideIcons()
    player("scissors");
    resultElement.textContent = "";
    setTimeout(startRound, );
    
});


newGameButton.addEventListener("click", startNewGame)