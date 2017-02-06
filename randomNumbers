// Random Number Exercises - Treehouse

// Check if user can guess the random number - using conditionals
var randomNumber = Math.floor ( Math.random() * 6 ) + 1; // creates a number between 1 and 6
var guess = prompt("Guess a number between 1 and 6.");
if(parseInt(guess) === randomNumber){
    alert('You guessed it');
}else {
    alert('Sorry the number was '+randomNumber);
}


// Using prompts
var input1 = prompt("Please enter a lower/starting number");
var bottomNum = parseInt(input1);
var input2 = prompt("Please type an higher/ending number");
var topNum = parseInt(input2);
// Create a random number that is between 0 and the difference between the bottom and top range, plus 1
var randomNum = Math.floor(Math.random() * (topNum - bottomNum + 1)) + bottomNum;
var message = alert(randomNum + " is a number between " +bottomNum +" and " +topNum);


// Expand upon the first conditional version
var correctGuess = false;
var randomNum = Math.floor ( Math.random() * 6 ) + 1; // creates a number between 1 and 6
var guess = prompt("Guess a number between 1 and 6.");
if(parseInt(guess) === randomNum){
    correctGuess = true;
} else if (parseInt(guess) < randomNum){
    var guessMore = prompt('Try again. The number is greater than '+guess);
    if(parseInt(guessMore) === randomNum){
        correctGuess = true;
    }
} else if(parseInt(guess) > randomNum){
    var guessLess = prompt('Try again. The number is less than '+guess);
    if(parseInt(guessLess) === randomNum){
        correctGuess = true;
    }
}
if (correctGuess ){
    alert("You got it!")
} else {
    alert("Sorry, the number was "+randomNum);
}