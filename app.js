const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getCompChoice() {
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random() * 3)];
}

function game(userChoice) {
    let compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case 'rs':    
        case 'pr':
        case 'sp':
            winCase(userChoice,compChoice);    
            break;
        case 'rp':    
        case 'ps':
        case 'sr':   
            loseCase(userChoice,compChoice); 
            break;
        case 'rr':    
        case 'pp':
        case 'ss':   
            drawCase(userChoice) 
            break;   
    }
}

function toWord(simbol) {
    if (simbol == 'r') {return 'Rock'}
    if (simbol == 'p') {return 'Paper'}
    return 'Scissors';
}

function winCase(userChoice, compChoice) {
    userScore_span.innerHTML++;
    if (userChoice == 'r') {result_p.innerHTML = "Yeahhhh! Rock beats Scissors. You Win!"}
    else if (userChoice == 's') {result_p.innerHTML = "Scissors beats Paper. You Win!"}
    else {result_p.innerHTML = "Yeyyyyy! Paper beats Rock. You Win!"}
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow");},300);
}   

function loseCase(userChoice, compChoice) {
    compScore_span.innerHTML++;
    if (userChoice == 'r') {result_p.innerHTML = "Haha loser! Paper covers Rock."}
    else if (userChoice == 's') {result_p.innerHTML = "Rock breaks Scissors. You Lose!"}
    else {result_p.innerHTML = "Scissors cut Paper, LOSERRR!!!"}
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow");},300);
}

function drawCase(userChoice) {
    result_p.innerHTML = toWord(userChoice) + " Dont beat " + toWord(userChoice) + ". I'ts a Draw."
    document.getElementById(userChoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow");},300);
}


rock_div.addEventListener("click",function() {
    game("r");
})

paper_div.addEventListener("click",function() {
    game("p");
})

scissors_div.addEventListener("click",function() {
    game("s");
})


