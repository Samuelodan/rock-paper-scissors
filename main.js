

let botMove = "";
function computerPlay (){
    let random = Math.floor(Math.random()*3) + 1;
    // let botMove;
    if (random === 1){
        botMove = "rock";
    } else if (random === 2){
        botMove = "paper";
    } else if (random === 3){
        botMove = "scissors";
    }
    return botMove;
};
// computerPlay();

let move = "";
function player (){
    let choice = prompt("Make your move. 'rock', 'paper' or 'scissors'").toLowerCase();
    // let move;
    if (choice === "rock"){
        move = "rock";
    } else if (choice === "paper"){
        move = "paper";
    } else if (choice === "scissors"){
        move = "scissors";
    } else {
        alert("enter a valid choice!");
        return player();
    }

    return move;
}


function match (botMove, move){
    alert(`Computer: ${botMove}, You: ${move}`);

    if (botMove === move){
        alert("Tie!! Make another Move.");
        startMatch();
        
        //win cases
    } else if (botMove === "rock" && move === "paper"){
        alert("You win! Play again.")
        startMatch();

    } else if (botMove === "scissors" && move === "rock"){
        alert("You win! Play again.")
        startMatch();

    } else if (botMove === "paper" && move === "scissors"){
        alert("You win! Play again")
        startMatch();
        
        // lose cases
    } else if (botMove === "paper" && move === "rock"){
        alert("You lost this round! Make another move")
        startMatch();

    } else if (botMove === "rock" && move === "scissors"){
        alert("You lost this round! Make another move")
        startMatch();

    } else if (botMove === "scissors" && move === "paper"){
        alert("You lost this round! Make another move")
        startMatch();
    }
}

// match(botMove, move);


// function startMatch  (){
//     computerPlay();
//     player();
//     match(botMove, move);
// }

// startMatch();
