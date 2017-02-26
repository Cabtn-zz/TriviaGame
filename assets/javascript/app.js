// var gameStart === false;
var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var count = 0;
var questions = [q1];


var triviaGame = {

	q1: "Who is your daddy and what does he do?",
	q2: "I am your daddy",
	q3: "No you are not",
	answers: ["Arnold S", "Jake J", "Matt Mc"],
	
}

$("#start").on("click", function startGame(){
	console.log("button works");
	// $("#q1").html(questions[count])
	// nextQuestion();
	console.log(triviaGame.questions[this]);
});

function nextQuestion () {
	if (count < questions.length - 1) {
		count = count++
		console.log(triviaGame.q1);
 }
}