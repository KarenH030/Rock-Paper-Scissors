const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
let userScore = 0;
let compScore = 0;


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
            drawCase(userChoice,compChoice) 
            break;   
    }
}

function winCase(userChoice, compChoice) {
    userScore_span.innerHTML++;
    result_p.innerHTML = userChoice + " beats " + compChoice + ", You Win!";
}

function loseCase(userChoice, compChoice) {
    compScore_span.innerHTML++;
    result_p.innerHTML = compChoice + " beats " + userChoice + ", You Lose!";
}

function drawCase(userChoice, compChoice) {

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


