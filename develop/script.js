//questions
var questions = [
{question: "What is the use of Javascript?",
answers:["To make a webpage interactive", "To add styling on your page", "To add text content","Make your page boring"],
correct: "To make a webpage interactive"},

{question: "What does 'Var' mean in Javascript?",
answers:["Varigation", "Variable", "Variant","Varsity"],
correct: "Variable"},

{question: "Which of these is NOT a interactive function?",
answers:["alert", "prompt", "confirm","push"],
correct: "push"},

{question: "What year was JavaScript invented?",
answers:["2001", "1999", "2003","1995"],
correct: "1995"},

{question: "Which of these are NOT a JS library?",
answers:["jQuery", "Angular", "Bootstrap","React"],
correct: "Bootstrap"}
]

var questionLog = 0;
var playerScore = 0;
var timer, counter = 60;
var player = {};
var playerName = "";
var gameResult = {};
var highscoreList = [];

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

//start End game function-- presents form to enter intitials 
function endGame() {
    var quizScreen = document.getElementById("quizContent");
    var quizInstructions = document.getElementById("introSlide");
    var timeLeft = document.getElementById("timerText");

    playerScore = counter;
    document.getElementsByClassName("countdown")
    quizInstructions.classList.add("invisible");
    quizScreen.classList.add("invisible");
    document.getElementById("results").innerHTML = ("You scored: " + playerScore + "!!!!");
    timeLeft.classList.add("invisible");

    var playerNameEnter = window.prompt("Want to save your score? Enter initials here!");
    if (!playerNameEnter){
        window.alert("Play again!");
        window.location.reload();
    } else {
        window.alert("Your score is saved! Woooooooo")
        highScore=playerScore;
        playerName=playerNameEnter;
    


    toHighscoreList();
    document.getElementById("results").innerHTML = ("Ze highest of the scores:\n" + playerName + " " + playerScore);
    console.log(gameResult.player);
    console.log(gameResult.score);
    }

 }

//to do--store initials and scores to local storage
//var highScores []


 //highscore function here
function toHighscoreList() {
  gameResult = {player: playerName, score: playerScore};
  player = gameResult;
};



//start game function
function startGame() {
    var quizSlide= document.getElementById("quizContent");
    var quizInstructions = document.getElementById("introSlide");
    var quizTimer = document.getElementById("timerText");
    quizSlide.classList.add("introSlide")
    quizSlide.classList.remove("invisible");
    quizInstructions.classList.add("invisible");
    quizTimer.classList.remove("invisible");
    showQuestion();

}

//click events to submit answers/change questions
document.getElementById("answer-1").addEventListener("click", function() {
if(this.textContent === questions[questionLog].correct) {
    console.log("Correct!!");
    //show correct on display

}else {
    console.log("incorrect:(")
    
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

document.getElementById("answer-2").addEventListener("click", function() {
    if(this.textContent === questions[questionLog].correct) {
        console.log("Correct!!");
        //show correct on display
    
    }else {
        console.log("incorrect:(")
        
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

    document.getElementById("answer-3").addEventListener("click",function() {
        if(this.textContent === questions[questionLog].correct) {
            console.log("Correct!!");
            //show correct on display
        
        }else {
            console.log("incorrect:(")
            
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

        document.getElementById("answer-4").addEventListener("click", function() {
            if(this.textContent === questions[questionLog].correct) {
                console.log("Correct!!");
                //show correct on display
            }else {
                console.log("incorrect:(")
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