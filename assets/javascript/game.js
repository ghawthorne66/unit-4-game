
// create variables and onkeypress
var wins  = 0
var losses = 0
var guessesLeft = 9
var guesses = []
// var letters = ("a", "b", "c", "d")
var letters = ("abcdefghijklmnopqrstuvwxyz").split("");
var currentRandomPick = "";
var currentEnteredLetter = "";

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    currentEnteredLetter = charStr.toLowerCase();
    console.log("You entered: " + currentEnteredLetter);
    handleGuess(currentEnteredLetter); 
};
//Game starts and computer chooses random letter

function startGame() {
    console.log("Starting game...");
    currentRandomPick = randomLetter();
    console.log("Random letter picked is: " + currentRandomPick);
    setHTMLWinCount();
    setHTMLLosses();
    setHTMLGuessesLeft();
    setHTMLGuessesSoFar();
}

// compares letters and determine a win (print) or continue (games left)
function randomLetter(){
    var random = Math.floor(Math.random() * letters.length); // 0-6 e.g. 5
    var  letter = letters[random];
    return letter; 
}

function setHTMLWinCount(){
    var wins_element = document.getElementById("wins_count");
    wins_element.innerHTML = "  " + wins;
}


function setHTMLLosses(){
    var loss_element = document.getElementById("losses");
    loss_element.innerHTML= "  " + losses;
}

// after 9 (to 0) choices computer creates a loss and starts at 9 again
function setHTMLGuessesLeft(){
    var left_element = document.getElementById("guesses");
    left_element.innerHTML= "  " + guessesLeft;
}
// Display Results "Your guesses so far"
function setHTMLGuessesSoFar(){
    var guesses_element = document.getElementById("guessessofar");
    guesses_element.innerHTML= "  " + guesses;
}

function handleGuess () {
    if (currentEnteredLetter === currentRandomPick){
        handleWin();
    }
    else {
        incorrect();
    }
}


// if incorrect display the current entered letter and set guesses left and guesses so far
function incorrect(){
    guessesLeft--;
    guesses.push(currentEnteredLetter);
    setHTMLGuessesLeft();
    setHTMLGuessesSoFar();
    didTheyLoose();
}

function handleWin(){
    wins++;
    reset();
    setHTMLWinCount(wins);
    setHTMLGuessesLeft();
    setHTMLGuessesSoFar();
}

function handleLoss(){
    losses--;
    reset();
    setHTMLGuessesLeft();
    setHTMLGuessesSoFar();
    setHTMLLosses();
}

function didTheyLoose(){
    if (guessesLeft === 0){
        handleLoss();
    }
}

function reset (){
    guessesLeft=9;
    guesses = [];
    currentRandomPick = randomLetter();
    console.log("New pick is: " + currentRandomPick);
}



//user makes a choice
//computer creates random letter 
// compares letters and determine a win (print) or continue (games left)
// Display Results "Your guesses so far"
// Display Results "Guesses Left"
// Display Results "wins"

//computer creates 9 choices
// after 9 (to 0) choices computer creates a loss and starts at 9 again
// Display Results "losses"

// var letters = ("a", "b", "c", "d")