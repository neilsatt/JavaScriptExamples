// Use our previous random function and make a While loop
function randomNumber (upper) { 
    return Math.floor(Math.random() * upper ) + 1; 
}
// Add a while loop to run it 10 times
var counter = 0;
while (counter < 10) {
    var randNum = randomNumber(6);
    alert(randNum);
    counter += 1;
}

// Do while loop - this example is infinite if you never answer correctly
var password;
do {
    password = prompt("What is the password?");
} while ( password !== "butter" ) 

alert("You know the password.");

// for loop 
for (var i = 0; i < 10; i++) {
   // do something in here
}

var i = 0   // initialize a counter, run once at the beginning
i < 10      // condition that is evaluated
i++         // changes/increments the counter at the end of the loop 


// While loop, random function, and break statement 
var randomNum = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber (upper) { 
    var num = Math.floor(Math.random() * upper ) + 1; 
    return num;
}

while (guessCount < 10 ) {
    guess = prompt('Pick a number between 1 and 10');
    guessCount += 1;
    if (parseInt(guess) === randomNum) {
        correctGuess = true;
        break;
    }
}
if (correctGuess){
    alert('You guessed the number');
    alert('It took you '+ guessCount + ' tries to guess the number ' + randomNum);
} else {
    alert("Sorry, you didn't guess the number");
}
