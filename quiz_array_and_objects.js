var questions = [
    { question: 'How many states are in the US?', answer: 50},
    { question: 'How many continents are there?', answer:7 },
    { question: 'How many oceans are there?', answer: 5 } 
];
var correctAnswers = 0;
var answer;
var response;
// Create 2 new arrays to keep track of correct answers and wrong answers
var correct = [];
var wrong = [];

for(i=0; i <questions.length; i++){
    question = questions[i].question;// question is first in two-dimensional array
    answer = questions[i].answer;// answer is second
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
