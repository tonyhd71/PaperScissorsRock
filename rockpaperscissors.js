        function getComputerChoice() {
        //let randomInt = Math.floor(Math.random() * 3 + 1);
        let randomInt = Math.floor(Math.random() * 3 + 1);
        let choice;
    
        console.log(randomInt + " these should be different");
        if (randomInt == 1) {
            choice = "rock";
            return choice;
        } else if (randomInt == 2) {
            choice = "paper";
            return choice;
        } else if (randomInt == 3) {
            choice = "scissors";
            return choice;
        } else {
            alert("idk");
        }
    }
    
    /*
    function playRound() {
        //main game code
        const buttons = document.querySelectorAll('.imgs');
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        //RETURN 0 FOR PLAYER LOSE, 1 FOR PLAYER WIN, 2 FOR DRAW
        console.log(playerSelection + " is what player has chosen");
        console.log(computerSelection + " Is what Computer has chosen"); 
        if (playerSelection == computerSelection) {
            console.log("This match is a draw");
            return 3;
        } else if (playerSelection =="rock" && computerSelection =="paper") {
            console.log("rock loses to paper");
            return 2;
        } else if (playerSelection =="rock" &&  computerSelection =="scissors") {
            console.log("rock beats scissors");
            return 1;
        } else if (playerSelection =="paper" && computerSelection =="scissors") {
            console.log("paper loses  to scissors");
            return 2;
        } else if (playerSelection =="paper" && computerSelection =="rock") {
            console.log("paper beats rock");
            return 1;
        } else if (playerSelection =="scissors" && computerSelection =="rock") {
            console.log("scissors loses to rock");
            return 2;
        } else if (playerSelection =="scissors" && computerSelection =="paper") {
            console.log("scissors beats paper");
            return 2;
        } else if (playerSelection == null || computerSelection == null) {
            console.log("EXCEPTION");
        }
    }
    */
    
    function game_progress() {
            let result = 1;
            let playerPoints =1;
            let computerPoints = 2;
            if (result == 2) {
                console.log("YOU LOST");
                computerPoints = computerPoints + 1;
                console.log("Computer points is " + computerPoints);
                console.log("Player points is " + playerPoints);
    
            } else if (result== 1) {
                playerPoints = playerPoints + 1;
                console.log("YOU WON");
                playerPoints = playerPoints + 1;
                console.log("PLayer points is " + playerPoints);
                console.log("Computer points is " + computerPoints);
    
            } else if (result == 3) {
                console.log("This match is a draw");
                console.log("PLayer points is " + playerPoints);
                console.log("Computer points is " + computerPoints);
            } else if (td == null) {
                alert("please input rock, paper, or scissors");
            } else {
                alert("bye");
            }
         if (playerPoints > computerPoints) {
            alert("You have won");
         } else if (playerPoints < computerPoints) {
            alert("you have lost");
         } else if (playerPoints == computerPoints) {
            alert("This match is a draw");
         }
         
    }
    const items = document.querySelectorAll(".imgs");
    for (var i = 0 ; i < 3; i++) {
        items[i].addEventListener('click', function () {
         console.log('che che che');
       });
   }
   alert(items.length);
   /*
    for (let i = 0; i < items.length; i++){
         items[i].addEventListener('click', function (e) {
            chosenItemID = parseInt(e.target.id);
            alert(typeof(chosenItemID));
        });
    }
    /*/
    //console.log(items);
    
    //game_progress();
    //getPlayerChoice();
    
            
                //console.log(e.target.id);
                //game_progress(chosenItem); 
                //CALL A FUNCTION THAT NEEDS CHOSEN ITEM
                //console.log(chosenItem);
                //retrieveItemClicked(chosenItem);
    /*
    function game_progress() {
        if (td == 1) {
            console.log("rock");
        } else if (td == 2) {
            
            console.log("paper");
        } else if (td == 3) {
            cconsole.log("scissors");
        }
    }
    if (playerChoice == "rock") {
        console.log("Player has chosen " + playerChoice);
        return playerChoice;
    } else if (playerChoice == "paper") {
        alert("Player has chosen " + playerChoice);
        console.log(playerChoice);
        return playerChoice;
    } else if (playerChoice == "scissors") {
        console.log("Player has chosen " + playerChoice);
        alert("Player has chosen " + playerChoice);
        return playerChoice;
    } else if (playerChoice == null || computerSelection == null) {
        alert("bye");
    }
    else {
        alert("FIX THIS!!!");
    }
    /*/
    
    
    
    /*buttons.forEach(button => button.addEventListener('click', function(e) {
        console.log(this);
    }));
    */
    
    
    
    
    
    
    
    
    



