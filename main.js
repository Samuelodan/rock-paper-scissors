const computerPlay = () => {
    let random = Math.floor(Math.random()*3) + 1;
    let botMove = 0;
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