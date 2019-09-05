
// create variables and onkeypress
var wins  = 0
var losses = 0
var currentGoal = 0;
var currentScore = 0;
var crystalValues = [0,0,0,0];
var image_names = ["ace_of_clubs.jpg","ace_of_hearts.jpg","ace_of_clubs.jpg","ace_of_diamond.jpg"]


//Game starts and computer chooses random letter
function startGame(reset) {
    console.log("Starting game...");
    currentGoal = randomGoal();
    setCrystalValues();
    if(reset){
        clearImages();
    }
    createCrystalElements();
    console.log("Random goal: " + currentGoal);
    setHTMLWinCount();
    setHTMLLosses();
    setHTMLGoal();
    setHTMLScore();
}

// compares letters and determine a win (print) or continue (games left)
function randomGoal(){
    var random = Math.floor(Math.random() * 100); // 0-6 e.g. 5
    return random; 
}

function clearImages(){
    console.log("Clearing images...");
    $("#crystal_images").empty();
}


function createCrystalElements(){

    for (var i = 0; i < crystalValues.length; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
    
        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");
    
        // Each imageCrystal will be given a src link to the crystal image
        // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");
        imageCrystal.attr("src", "assets/images/" + image_names[i]);
    
        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", crystalValues[i]);
    
        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystal_images").append(imageCrystal);
      }
    
      // This time, our click event applies to every single crystal on the page. Not just one.
      $(".crystal-image").on("click", function() {
    
        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        currentScore += crystalValue;
        $('#score').text(" " + currentScore);
    
        // All of the same game win-lose logic applies. So the rest remains unchanged.
        console.log("Crystal value: " + crystalValue);
        console.log("current score: " + currentScore);
        console.log("current Goal: " + currentGoal);
        console.log("Crystal Value: " + crystalValues);
        console.log(" ");
        console.log(" ");
        console.log(" ");

        wonOrLost();
      });

}


function setCrystalValues(){
    for (var i = 0; i < crystalValues.length; i++){
        var random = Math.floor(Math.random() * currentGoal);
        crystalValues[i] = random;
    }
}

function setHTMLWinCount(){
    var wins_element = document.getElementById("wins_count");
    wins_element.innerHTML = "  " + wins;
}


function setHTMLLosses(){
    var loss_element = document.getElementById("losses");
    loss_element.innerHTML= "  " + losses;
}

function setHTMLGoal(){
    var goal_element = document.getElementById("goal");
    goal_element.innerHTML= "  " + currentGoal;
}

function setHTMLScore(){
    var score_element = document.getElementById("score");
    score_element.innerHTML= "  " + currentScore;
}


function wonOrLost(){
    if(currentScore === currentGoal){
        handleWin();
    }else if (currentScore > currentGoal){
        handleLoss();
    }
}

function handleWin(){
    console.log("You Won!");
    wins++;
    currentScore =0;
    startGame(true);
}

function handleLoss(){
    console.log("You lost!");
    losses++;
    currentScore =0;
    startGame(true);
}



// Start the game
startGame(false);