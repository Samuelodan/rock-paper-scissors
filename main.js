const computerPlay = () => {
    let random = Math.floor(Math.random()*3) + 1;
    let botMove;
    if (random === 1){
        botMove = "rock";
    } else if (random === 2){
        botMove = "paper";
    } else if (random === 3){
        botMove = "scissors";
    }
    return botMove;
};
computerPlay();

const player = () => {
    let choice = prompt("Make your move. 'rock', 'paper' or 'scissors'").toLowerCase();
    let move;
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
player();


