function computerPlay () {
  let computerSelection= Math.floor(Math.random()*1);
  if (computerSelection===0) {
       computerSelection='paper';
       return computerSelection;
       
  } else if (computerSelection===1) {
      computerSelection='rock';
      return computerSelection;
      
  } 
  else if (computerSelection===2) {
      computerSelection='scissors';
      return computerSelection;
      
  }
      
     
}

function playerPlay() {
    let playerSelection = prompt("Rock, Paper or Scissors?", "");
    playerSelection= playerSelection.toLowerCase();
    return playerSelection;
    
}

function playRound() {
   let playerSelection = playerPlay();
   let computerSelection = computerPlay();
   let round= computerSelection+playerSelection;
    let winer;
    alert("Player Selection:"+playerSelection);
    alert("Computer Selection:"+computerSelection);
    
    if (round==='paperrock'){

      winer= 'Computer Win' ; 
      return winer;
    }
    else if (round==='paperpaper'){
            winer= 'This is a Tie';
            return winer;
            
    }
    else if (round==='paperscissors'){
            winer= 'Player Win';
            return winer

    }
    else if (round==='rockpaper'){

            winer= 'Player Win';
            return winer;
    }

    else if (round==='rockrock'){

             winer= 'This is a Tie';
             return winer;
}
    else if (round==='rockscissors'){

             winer= 'Computer Win';
             return winer;
}
    else if (round==='scissorsrock'){

             winer= 'Player Win';
             return winer;
}
    else if (round==='scissorsscissors'){

             winer= 'This is a Tie';
             return winer;
}
    else if (round==='scissorspaper'){

             winer= 'Computer Win';
             return winer;
}


}
 function game() {
    let computerScore=0;
    let playerScore=0;
    for (let i = 0; i <5; i++){
        
        
        let counter = playRound();
        alert(counter);
    
        if (counter=='Computer Win') {
           computerScore = computerScore+1;
            
            
            
        }
        else if (counter=='Player Win'){
            playerScore=playerScore+1;
            
    
        }
        
        
    
    }

    if (playerScore<computerScore||computerScore >playerScore ){

alert("Final Score!!!!!"+ "\nPlayer Score:"+playerScore+ "\nComputer Score:"+computerScore+"\nFinal Winer:Computer")

    }
    else if (playerScore>computerScore||computerScore<playerScore) {
        alert("Final Score!!!!!"+ "\nPlayer Score:"+playerScore+ "\nComputer Score:"+computerScore+"\nFinal Winer:Player")
    }
     else{
        alert("Final Score!!!!!"+ "\nPlayer Score:"+playerScore+ "\nComputer Score:"+computerScore+"\n Nobody Wins")
     }
 }

  game();



    
