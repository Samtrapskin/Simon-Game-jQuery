
  //2-3. create a new array called buttonColours and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
//4-3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
var userClickedPattern = [];

//2-1. Inside game.js create a new function called nextSequence()

function nextSequence() {

    //2-2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
  var randomNumber = Math.floor(Math.random() * 4);

    //2-4. Create a new variable called randomChosenColour and use the randomNumber from step 2 to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //3-1. Use jQuery to select the button with the same id as the randomChosenColour
  //3-2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  //3-3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}
//4-1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    //4-2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
userClickedPattern.push(userChosenColour);
$("#" + userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
var audio = new Audio("sounds/" + userChosenColour + ".mp3");
audio.play();
animatePress();
})

// "#" + randomChosenColour
var currentColour = $(this).attr("id");

function animatePress(currentColour) {

  $("#" + userChosenColour).addClass("pressed");
 
  setTimeout(function() {
    $(currentColour ).removeClass("pressed");
}, 800);

  console.log(currentColour);
}

