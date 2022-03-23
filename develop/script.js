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
var timer, counter = 0;

function showQuestion() {
    getElementById("question").text(questions[questionLog].question)
    getElementById("answer-1").text(questions[questionLog].answers[0])
    getElementById("answer-2").text(questions[questionLog].answers[1])
    getElementById("answer-3").text(questions[questionLog].answers[2])
    getElementById("answer-4").text(questions[questionLog].answers[3])
}