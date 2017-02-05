// Random Number Exercises

// Check if user can guess the random number
var randomNumber = Math.floor ( Math.random() * 6 ) + 1; // creates a number between 1 and 6
var guess = prompt("Guess a number between 1 and 6.");
if(parseInt(guess) === randomNumber){
    alert('You guessed it');
}else {
    alert('Sorry the number was '+randomNumber);
}


// Version 2
var input1 = prompt("Please enter a lower/starting number");
var bottomNum = parseInt(input1);
var input2 = prompt("Please type an higher/ending number");
var topNum = parseInt(input2);
// Create a random number that is between 0 and the difference between the bottom and top range, plus 1
var randomNum = Math.floor(Math.random() * (topNum - bottomNum + 1)) + bottomNum;
var message = alert(randomNum + " is a number between " +bottomNum +" and " +topNum);
