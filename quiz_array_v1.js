/*  Create a quiz with a two-dimensional array
    Two dimensional array keeps track of questions and answers
    Use a loop to cycle through questions and check answers
    User prompt to ask questions
    Use conditional statement to check answers
    Keep track of many questions were answered correctly
    Alert the answers
*/
var questions = [
    ['How many states are in the US?',50],
    ['How many continents are there?', 7],
    ['How many oceans are there?', 5]    
];
var correctAnswers = 0;
var answer;
var response;
// Create 2 new arrays to keep track of correct answers and wrong answers
var correct = [];
var wrong = [];

for(i=0; i <questions.length; i++){
    question = questions[i][0];// question is first in two-dimensional array
    answer = questions[i][1];// answer is second
    response = parseInt(prompt(question)); // ask question and convert to a number  
    
    // check if response matches answer
    if (response === answer){
        correctAnswers +=1;
        correct.push(question); // answer to array
        
    } else {
        wrong.push(question);
    } 
}

alert("Number of correct answers: "+correctAnswers);

// output a list of answers
function buildList(arr) {
    for (var i = 0; i < arr.length; i++){
    if(arr === correct){
     alert("Correct Answers: "+arr[i]);
    } else {
        alert("Incorrect Answers: "+arr[i]);
        }
    }
}

buildList(correct);
buildList(wrong);



