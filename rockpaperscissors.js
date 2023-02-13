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
function getPlayerChoice() {
    let playerChoice = prompt("enter a value").toLowerCase();
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
}

function playRound() {
    //main game code
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


function game_progress() {
    for (let i = 0; i < 5; i++) {
        // your code here!   
        let result = playRound();
        console.log(result + " is the returned value");
        if (result == 2) {
            console.log("YOU LOST");
            computerPoints = computerPoints + 1;
            console.log("Computer points is " + computerPoints);
            console.log("Player points is " + playerPoints);

        } else if (result == 1) {
            //playerPoints = playerPoints + 1;
            console.log("YOU WON");
            playerPoints = playerPoints + 1;
            console.log("PLayer points is " + playerPoints);
            console.log("Computer points is " + computerPoints);

        } else if (result == 3) {
            console.log("This match is a draw");
            console.log("PLayer points is " + playerPoints);
            console.log("Computer points is " + computerPoints);
        } else if (result == null) {
            alert("please input rock, paper, or scissors");
        } else {
            alert("bye");
        }
     }
     if (playerPoints > computerPoints) {
        alert("You have won");
     } else if (playerPoints < computerPoints) {
        alert("you have lost");
     } else if (playerPoints == computerPoints) {
        alert("This match is a draw");
     }
}
function repeatTillCorrect() {
    let num = prompt("Enter a number");
    while (num < 100) {
        let num = prompt("Enter a number");
        alert("greater than 100 please");
    }
}
function repeatString(stringName, num) {
    let string = stringName;
    let myArray = [];
    for (let i = 0; i < num; i++) {
        let newArray = myArray.push(string);
        
    }
}
function removeFromArray(array, string) {
   console.log(array.indexOf(string));
   deleteThis = array.indexOf(string);
   newArray = [];
   for (arr in array) {
    if (arr == deleteThis) {
        array.splice(deleteThis, 1);
        alert(array);
    }
   }
}

//Pretty simple, write a function called `reverseString` that returns its input, reversed!
function reverseString(input) {
     let inputLength = input.length;
     let newString = "";
     for (let i = inputLength - 1; i >= 0; i--) {
        newString = newString + input[i];
     }
     console.log(newString);
}
function leapYears(year) {
    for (let i = 0; i < year; i++) {
        if (year % 4 == 0) {
            return true;
        } else if (i % 4 != 0) {
            //alert(false);
            console.log("NOT A LEAP YEAR");
            return false;
        }
    }
}
const convertToCelsius = function(cToC) { // should return 0
    cToC = ((cToC - 32) * (5/9));
    cToC = Math.round(cToC);
    alert(cToC);
};

const convertToFahrenheit = function(cToF) { // should return 32
    cToF = (cToF * 1.8) + 32;
    cToF = Math.round(cToF);
    return cToF;
};
function sumAll(int1, int2) {
    let sum =0;
    let smaller = Math.min(int1, int2);
    let larger = Math.max(int1, int2);
    newArray = [];
    for (let i = smaller; i <= larger; i++) {
        newArray.push(i);
        let num = newArray[i] + newArray[i] + 1;
        
    }
   // return num;
}
//console.log(sumAll(3,7));
//const div = document.createElement('div');
const container = document.querySelector("#divId");
console.log(container);
// your JavaScript file

const p = document.createElement('p');
const headThree = document.createElement('h3');
const body = document.querySelector('body');

p.textContent = 'Hey I’m red';
p.style['color'] = 'red';
headThree.textContent = 'I"m a blue h3';
headThree.style['color'] = 'blue';
container.appendChild(p);
container.appendChild(headThree);

const newDiv = document.createElement('div');
const anotherHeading = document.createElement('h1');
const newP = document.createElement('p');

newDiv.setAttribute('id', 'newDiv');
newDiv.style.backgroundColor = 'pink';
newDiv.style.borderColor = 'green';
anotherHeading.textContent = 'I am in a div';
newP.textContent = 'ME TOO!';
body.appendChild(newDiv);
newDiv.appendChild(anotherHeading);
newDiv.appendChild(newP);
console.log(newDiv);
/*
if (p != null || div != null) {
    div.appendChild(p);
} else {
    alert("wrong");
}
*/
//convertToCelsius(60);
//console.log(convertToFahrenheit(32));
/*
reverseString("Hello");
let playerPoints = 0;
let computerPoints = 0;
console.log(leapYears(21) + "should be false"); 
console.log(leapYears(20) + " should be true");

// is a leap year: returns true
 // is not a leap year: returns false
//game_progress();
//repeatTillCorrect()
//repeatString('hey', 3);
//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]

// returns the sum of 1 + 2 + 3 + 4 which is 10
//Implement a function that takes 2 integers and returns the sum of every 
number between(and including) them:
*/





