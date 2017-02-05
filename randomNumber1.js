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
