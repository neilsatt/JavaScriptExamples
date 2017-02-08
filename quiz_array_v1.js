/*  Create a quiz with a two-dimensional array
    Two dimensional array keeps track of questions and answers
    Use a loop to cycle through questions and check answers
    User prompt to ask question
    Use conditional statement to check answers
    Keep track of many questions were answered correctly
    Alert out the answers
*/

var questions = [
    ['How many states are in the US?',50],
    ['How many continents are there?', 7],
    ['How many oceans are there?', 5]    
];
var correctAnswers = 0;
var answer;
var response;

for(i=0; i <questions.length; i++){
    question = questions[i][0];// question is first in two-dimensional array
    answer = questions[i][1];// answer is second
    response = parseInt(prompt(question)); // ask question and convert to a number  
    
    // check if response matches answer
    if (response === answer){
        correctAnswers +=1;
    }
}

alert("Correct answers: "+correctAnswers);