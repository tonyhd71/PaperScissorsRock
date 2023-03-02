    function getComputerChoice() {
    //let randomInt = Math.floor(Math.random() * 3 + 1);
    let randomInt = Math.floor(Math.random() * 3 + 1);
    let choice;
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
    function retrievePlayerChoice (arg1) {
        let item = arg1;
        if (item == 1) {
            console.log("You chose rock");
            return "rock";
        } else if (item == 2) {
            console.log("You chose paper")
            return "paper";
        } else if (item == 3) {
            console.log("You chose scissors");

            return "scissors";
        } else {
            alert("sorry");
        }
    }
    let selectedObj;
    let playerPts = 0;
    let comPoints =0;
    let indicateDraw = 'this match is a draw';
    const playerScoreHtml = document.getElementById("#displayPlayerScore");
    const compScoreHtml = document.getElementById("#displayComputerScore");
    const drawHtml = document.getElementById("#indicateDraw");
    function roundIsDraw() {
        //roundResult.innerHTML = 'This round is a Draw';
        console.log("tie");
    }
    function informPlayerOfResult() {
        if (playerPts >= 5) {
            displayResult.textContent = 'You have Won';
            displayResult.style.backgroundColor = 'green';
            displayResult.style.color = 'white';
        } else if (comPoints >= 5) {
            displayResult.textContent = 'You have Lost';
            displayResult.style.color = 'white';
            displayResult.style.backgroundColor = 'red';
        }
    }
    function tallyPoints(itemReturnValue) {
        if (itemReturnValue == 1) {
            playerPts = parseInt(playerPts);
            playerPts = playerPts + 1;
            playerScoreHtml.innerHTML = playerPts;
            playerScoreHtml.style.color= 'green';
            console.log("Player has " + playerPts);
        } else if (itemReturnValue == 2) {
            comPoints = parseInt(comPoints);
            comPoints = comPoints + 1;
            compScoreHtml.innerHTML = comPoints;
            compScoreHtml.style.color= 'red';
            console.log("Computer has " + comPoints);
            
        } else if (itemReturnValue == 3) {
            console.log("tie");
            //drawHtml.textContent = indicateDraw;
        }
        if (playerPts >= 5) {
            playAgain();
            //console.log("You have won");
            informPlayerOfResult();
        } else if (comPoints >= 5) {
            playAgain();
            informPlayerOfResult();
        }
    } 
    let roundResult = document.getElementById("#roundResult");
    function getChosenItem(plyr, comp) {
        //PLAYER WINS RETURN 1, COMPUTER WINS RETURN 2, DRAW RETURN 3
        if (plyr == comp) {
            console.log("This match is a draw");
            progressText.textContent = 'This match is a Draw';
            //INSERT ROUND RESULTS HERE
            return 3;
        } else if (plyr =="rock" && comp =="paper") {
            console.log("rock loses to paper");
            progressText.textContent = 'Rock loses to Paper';
            drawHtml.textContent = '';
            return 2;
        } else if (plyr =="rock" &&  comp =="scissors") {
            console.log("rock beats scissors");
            progressText.textContent = 'Rock beats Scissors';
            drawHtml.textContent = '';
            return 1;
        } else if (plyr =="paper" && comp =="scissors") {
            console.log("paper loses  to scissors");
            progressText.textContent = 'Paper loses to Scissors';
            drawHtml.textContent = '';
            return 2;
        } else if (plyr =="paper" && comp =="rock") {
            console.log("paper beats rock");
            progressText.textContent = 'Paper beats Rock';
            drawHtml.textContent = '';
            return 1;
        } else if (plyr =="scissors" && comp =="rock") {
            console.log("scissors loses to rock");
            progressText.textContent = 'Scissors loses to Paper';
            drawHtml.textContent = '';
            return 2;
        } else if (plyr =="scissors" && comp =="paper") {
            console.log("scissors beats paper");
            drawHtml.textContent = '';
            progressText.textContent = 'Scissors beats Paper';
            return 1;
        } else if (plyr == null || comp == null) {
            console.log("EXCEPTION");
            return 4;
        }        
    }
    const progressText = document.getElementById("#trackProgress");
    const items = document.querySelectorAll(".imgs");   
    for (var i = 0 ; i < items.length; i++) {
        items[i].addEventListener('click', function (e) {
         selectedObj = parseInt(e.target.id);
         let playerChoice =retrievePlayerChoice(selectedObj);
         let computerChoice = getComputerChoice();
         console.log("player chose " + playerChoice + " computer chose " + computerChoice);
         //progressText.textContent = "Player chose " + playerChoice + ", Computer chose " + computerChoice;
         tallyPoints(getChosenItem(playerChoice, computerChoice));
         //drawHtml.textContent = '';
       });
   }
   let displayResult = document.getElementById("#displayResult");
   for (let item of items) {
        item.addEventListener('mouseenter', function (e) {
            item.style.scale = 1.3;
            progressText.textContent = "Click on " + item.name + " to select " + item.name;

        });
        item.addEventListener('mouseleave', function (e) {
            item.style.scale = 1.0;
        });
   }
   function playAgain() {
        const playAgain = document.createElement('button');
            displayResult.insertAdjacentElement('afterend', playAgain);
            playAgain.textContent = "Try Again?";
            playAgain.style.marginLeft = 25;
            playAgain.style.padding = 35;
            playAgain.addEventListener('click', function () {
                window.addEventListener('click', ()=>{ location.reload()});
            })
   }
    
 
   
   











    
    
    
    
    
    
    
    



