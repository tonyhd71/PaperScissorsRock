function getComputerChoice() {
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
const playerScoreHtml = document.getElementById("#displayPlayerScore");
const compScoreHtml = document.getElementById("#displayComputerScore");
const drawHtml = document.getElementById("#indicateDraw");
const firstTo5 = document.getElementById('#firstToFive');
//displayResult.textContent = 'First to 5 Wins!'
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
        }
        if (playerPts >= 5) {
            playAgain();
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
            progressText.textContent = 'Rock loses to Paper. You Lose!';
            drawHtml.textContent = '';
            return 2;
        } else if (plyr =="rock" &&  comp =="scissors") {
            progressText.textContent = 'Rock beats Scissors. You Win!';
            drawHtml.textContent = '';
            return 1;
        } else if (plyr =="paper" && comp =="scissors") {
            progressText.textContent = 'Paper loses to Scissors You Lose!';
            drawHtml.textContent = '';
            return 2;
        } else if (plyr =="paper" && comp =="rock") {
            progressText.textContent = 'Paper beats Rock. You Win!';
            drawHtml.textContent = '';
            return 1;
        } else if (plyr =="scissors" && comp =="rock") {
            progressText.textContent = 'Scissors loses to Paper You Lose!';
            drawHtml.textContent = '';
            return 2;
        } else if (plyr =="scissors" && comp =="paper") {
            drawHtml.textContent = '';
            progressText.textContent = 'Scissors beats Paper. You Win!';
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
    tallyPoints(getChosenItem(playerChoice, computerChoice));
    });
}
let displayResult = document.getElementById("#displayResult");
let heading = document.getElementById('#heading');
let container = document.getElementById('#container');
for (let item of items) {
    item.addEventListener('mouseenter', function (e) {
        item.style.scale = 1.3;
        progressText.textContent = "Choose " + item.name;
    });
        item.addEventListener('mouseleave', function (e) {
        item.style.scale = 1.0;
    });
}
function playAgain() {
    const playAgain = document.createElement('button');
    displayResult.insertAdjacentElement('beforebegin', playAgain);
    playAgain.textContent = "Try Again?";
    playAgain.style.left = '50%';
    playAgain.style.right = '50%';
    playAgain.addEventListener('click', function () {
        window.addEventListener('click', ()=>{ location.reload()});
    })
}
   











    
    
    
    
    
    
    
    



