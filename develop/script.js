//questions
var questions = [
{question: "question one",
answers:["answer one", "answer two", "answer three","answer four"],
correct: "correct answer"},

{question: "question two",
answers:["answer one", "answer two", "answer three","answer four"],
correct: "correct answer"},

{question: "question three",
answers:["answer one", "answer two", "answer three","answer four"],
correct: "correct answer"},

{question: "question four",
answers:["answer one", "answer two", "answer three","answer four"],
correct: "correct answer"},

{question: "question five",
answers:["answer one", "answer two", "answer three","answer four"],
correct: "correct answer"}
]

var questionLog = 0;
var playerScore = 0;
var timer, counter = 60;

//show multiple choice function
function showQuestion() {
    document.getElementById("question").innerHTML = (questions[questionLog].question);
    document.getElementById("answer-1").innerHTML = (questions[questionLog].answers[0]);
    document.getElementById("answer-2").innerHTML = (questions[questionLog].answers[1]);
    document.getElementById("answer-3").innerHTML = (questions[questionLog].answers[2]);
    document.getElementById("answer-4").innerHTML = (questions[questionLog].answers[3]);
};

//timer countdown function
function countdown() {
   document.getElementById("counter").innerHTML = (counter);
    timer = setInterval(function() {
        counter--;
       document.getElementById("counter").innerHTML = counter;
        if (counter === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

//start game function
function startGame() {
    var quizSlide= document.getElementById("quizContent");
    var quizIntructions = document.getElementById("introSlide");
    quizSlide.classList.remove("invisible");
    quizIntructions.classList.add("invisible");
    showQuestion();

}


//start end game function-- presents form to enter intitials 
function endGame() {

}
//click events to submit answers/change questions
document.getElementById("answers").addEventListener("click", ".answer", function() {
if(this.innerHTML === questions[questionLog].correct) {
    //show correct on display

}else {
    //show result incorrect
    counter = (counter - 10);
}
questionLog++;
if (questionLog === questions.length){
    endGame();
}else{
    showQuestion();
}
});


//click events to start game
document.getElementById("startButton").addEventListener("click", startGame);
document.getElementById("startButton").addEventListener("click", countdown);