// var gameStart === false;
var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var count = 0;
var currentQuestion = 0;

var triviaGame = [
{
	q1: "Who is your daddy and what does he do?",
	answers: ["Arnold S ", "Jake J ", "Matt Mc "]
},
{
	q1: "How are you?",
	answers: ["Great ", "Average ", "test "],
}
];

$("#start").on("click", function startGame(){
	console.log("button works");
	$("button").fadeOut();
	currentQuestion	= setInterval(nextQuestion, 2000);
});

function nextQuestion () {
	if (count < triviaGame.length) {
		$("#questions").html(triviaGame[count].q1);
		$("#answers").html(triviaGame[count].answers)
		count++
		
 }
}

