let computerPoints = 0;
let playerPoints = 0;

function getComputerChoice() {
    let choiceArr = ['rock', 'paper', 'scissors']
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a tie!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost"
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!"
    }
}


const modal = document.querySelector('.modal'); 
const points = document.querySelector('.points');
const userPoints = document.querySelector('.playerPoints');
const compPoints = document.querySelector('.computerPoints');
const computerChoice = document.querySelector('.computerChoice'); 
const playerChoice = document.querySelector('.playerChoice'); 
const displayWinner = document.querySelector('.winner'); 
const closeModal = document.querySelector('.close'); 
const playAgain = document.querySelector('.playAgain')


const btn = document.querySelectorAll('.button');

btn.forEach((button) => { // iterating over items with button as the selector 
    button.addEventListener('click', function playRound(e) { // adding event listener to all selectors with 'button' // playRound is taking in the event as parameter instead of playerSelection / computerSelection 
        let playerSelection = e.currentTarget.id// setting player selection to the event / current target 
        playerChoice.textContent = `Your Choice: ${playerSelection}`
        console.log(playerSelection); // logging selection 
        round(playerSelection); // calling round 
    })

})


function round(playerSelection) {
    let computerSelection = getComputerChoice();
    computerChoice.textContent = ` Computer's Choice: ${computerSelection}`; 
    const result = playRound(playerSelection, computerSelection);
    if (result === "You won!"){
        playerPoints++ 
        userPoints.textContent = ` Your Points: ${playerPoints}`
    } else if (result === 'You lost'){
        computerPoints++ 
        compPoints.textContent = `Computer's Points: ${computerPoints}` 
    }

    endGameModal(); 
}


function endGameModal(){
    if (playerPoints === 5 || computerPoints === 5){
        modal.style.display = "block";
    } 
    if (playerPoints === 5){
        displayWinner.textContent = "You won!!!"
    } else if(computerPoints === 5){
        displayWinner.textContent = "You lost"
    }

}


function gameReset(){
    playerPoints = 0; 
    computerPoints = 0; 
    userPoints.textContent = ` Your Points: `;
    compPoints.textContent = `Computer's Points: `; 
    playerChoice.textContent = `Your Choice: `;
    computerChoice.textContent = ` Computer's Choice: `; 
    modal.style.display = "none"; 
}


closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})

playAgain.addEventListener('click', gameReset); 