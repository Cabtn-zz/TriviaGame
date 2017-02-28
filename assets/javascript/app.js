// var gameStart === false;
var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var count = 0;
var currentQuestion = 0;
var number = 30;
var intervalId;

var triviaGame = [
{
	q1: "What has roots as nobody sees, is taller than trees, Up, up it goes, and yet never grows",
	answers: ["Math", "Skyscraper", "Family", "Mountain"],
	rightAnswer: "Mountain",
},
{
	q1: "Who is the White Whale",
	answers: ["Narwhals", "Jack Sparrow", "Moby Dick", "Patrick"],
	rightAnswer: "Moby Dick",
},
{
	q1: "What is 2 + 2?",
	answers: ["4", "22", "Math", "Boolean"],
	rightAnswer: "22",
},
{
	q1: "Who created JavaScript?",
	answers: ["Michael B", "GT", "Darwin", "Patrick"],
	rightAnswer: "Darwin",
},
{
	q1: "Who is your daddy what does he do?",
	answers: ["Arnold S", "Detective John Kimble", "A Baker", "Darth Vader"],
	rightAnswer: "Arnold S",
},
];

$("#start").on("click", function startGame(){
	console.log("button works");
	$("button").fadeOut();
	// currentQuestion	= setInterval(nextQuestion, 5000);
	run();
	nextQuestion();
	
});

function run() {
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {
	if (number > 0){
		number--;
 		$("#show-number").html("<h2>" + number + "</h2>");
 	}
 	else{
 		number = 30;
 	}
}


function nextQuestion () {
	if (count < triviaGame.length) {
		
		currentQuestion	= setInterval(nextQuestion, 30000);
		$("#questions").html(triviaGame[count].q1);
		$("#answers").html(" " + triviaGame[count].answers + " ");
		console.log(triviaGame[count].rightAnswer);
		checkAnswer();
		count++
		gameOver();
 }
}
$(triviaGame.answers).on("click", function chooseAnswer(){
	console.log(this);
	});

function checkAnswer() {
	// This if statement doesn't work but the else does. Fix chooseAnswer
	if(count === triviaGame[count].rightAnswer){
		console.log("You're right!");
		correctAnswers++;
	}
	else{
		console.log("The correct answer was " + triviaGame[count].rightAnswer);
		wrongAnswers++
	}
	console.log("Correct: " + correctAnswers)
	console.log("Incorrect: " + wrongAnswers)
}

function gameOver(){
	if(count === triviaGame.length){
		console.log("GAME OVER");
		count = 0;
		return;
	}
}

