
//global variables
var right;
var wrong;
var currentQuestion;
var timer;
var timeToGuess;
var library;

var questionLength = 10; //seconds you have to guess
var answerLength = 3; //seconds you're shown the answer
var gameLength; //set this limit to number of questions per game
var question;//after clicking play again more than 13 times
             //the game throws an Uncaught typeerror






//$(document).ready(function () {



    function initializeGame() {
        //displays the initial intro
        $("#qText").html('Welcome to the Trivia Game!');
        $("#result").hide();
        //$("#choices").hide();
        //$("#choices li").empty();
        $(".scoreboard").empty();
        //click listeners
        $("#choices .answer").off().on("click", makeGuess);
        $("#startGame").off().on("click", newQuestion);
        //resets variables
        wrong = 0;
        right = 0;
        //library
        library = questionsLibrary.slice();//slices apart the object values, you can see what it references by mousing over
        timeToGuess = questionLength;
        gameLength = library.length;
    }
    function newQuestion() {
        if (right + wrong >= gameLength) {
            gameOver();
        } else {
            //picks a random question that hasn't been asked yet
            var questionNumber = Math.floor(Math.random() * library.length);
            currentQuestion = library[questionNumber];
            library.splice(questionNumber, 1);
            resetTimer();
            $("result").empty().hide();
            $("#qText").html(currentQuestion.question);
            $("choices").show().find(".answer").each(function (i) {
                $(this).html(currentQuestion.answers[i]);
            });
            timer = setInterval(showTimer, 1000);

        }
    }
    function makeGuess() {
        if ($(this).data("choice") == currentQuestion.correctAnswer) {
            right++;
            showResult("Correct!", "correctResult");
        } else {
            wrong++;
            showResult("Wrong. The correct answer was " + currentQuestion.answers[currentQuestion.correctAnswer], "wrongResult");
        }
    }
    function showResult(msg, addThisClass) {
        resetTimer();
        $("#result")
            .html(msg)
            .show()
            .removeClass()
            .addClass(addThisClass);
        setTimeout(newQuestion, answerLength * 1000);
        $("#score").html("correct: " + right + "<br> incorrect: " + wrong);
    }
    function showTimer() {
        if (timeToGuess >= 0) {
            $("#timer").html(timeToGuess + " seconds left");
            timeToGuess--;
        } else {
            timesUp();
        }
    function timesUp(){
        wrong++;
        resetTimer();
        showResult("Times up! The correct answer was " + currentQuestion.answers[currentQuestion.correctAnswer], "times up");
    }

    }
    function resetTimer() {
        clearInterval(timer);
        timeToGuess = questionLength;
        $("#timer").empty();
    }
    function gameOver() {
        var score = (right / gameLength);
        var praise = "You are almost awesome";
        if (score > .9) {
            praise = "You could be amazing.";
        } else if (score > .8) {
            praise = "Well done, you may be onto something.";
        } else if (score > .7) {
            praise = "This could be your moment.";
        } else if (score > .6) {
            praise = "Not bad.";
        } else if (score > .5) {
            praise = "It could be better.";
        } else if (score > .4) {
            praise = "This could be your moment.";
        }
        $("#result").removeClass().html("<h1>Game Over </h1><div class='gameOverText'>You got " + right + " questions right and " + wrong + " wrong. " + praise + "</div><button id='newGame'>Play Again</button>");
        $("#newGame").on("click", initializeGame);

    }

    $(document).ready(initializeGame);
//});

