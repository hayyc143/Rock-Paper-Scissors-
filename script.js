function getComputerChoice(){
    let choiceArr = ['rock', 'paper', 'scissors']
    return choiceArr[Math.floor(Math.random() * choiceArr.length)]
  }


  function playRound(playerSelection, computerSelection){
    console.log(`Your Choice: ${playerSelection}`)
    console.log(`Computer Choice: ${computerSelection}`)

    if (playerSelection === computerSelection){
        return "It's a tie!"
    } else if(playerSelection === "rock" && computerSelection === "paper"){
        return "You lost"
    } else if(playerSelection === "rock" && computerSelection === "scissors"){
        return "You won!"
    } else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You won!"
    } else if(playerSelection === "paper" && computerSelection === "scissors"){
        return "You lost"
    } 
     else if(playerSelection === "scissors" && computerSelection === "rock"){
        return "You lost"
    } 
     else if(playerSelection === "scissors" && computerSelection === "paper"){
        return "You won!"
    } 
  }

function game(){
    let computerPoints = 0; 
    let playerPoints = 0; 
    for(let i = 1; i <= 5; i++){
        let playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase(); 
        let computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result); 
        if (result === "You won!"){
            playerPoints++ 
        } else if(result === "You lost"){
            computerPoints++ 

        }
        console.log(`Player Points: ${playerPoints}`); 
        console.log(`Computer Points: ${computerPoints}`);
    }
    if(playerPoints === computerPoints){
        console.log("It's a tie! No one wins")
    }
    else if(playerPoints < computerPoints){
        console.log("The computer won, better luck next time!")
    } else{
        console.log("You are the champion!")
    }
}

game();



