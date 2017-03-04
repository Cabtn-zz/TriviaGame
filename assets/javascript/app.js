// var gameStart === false;
var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var count = 0;

var number = 5;
var intervalId;
var isWrong = false;

var triviaGame = [
{
	question: "What has roots as nobody sees, is taller than trees, Up, up it goes, and yet never grows",
	answers: ["Math", "Skyscraper", "Family", "Mountain"],
	rightAnswer: "Mountain",
},
{
	question: "Who is the White Whale",
	answers: ["Narwhals", "Jack Sparrow", "Moby Dick", "Patrick"],
	rightAnswer: "Moby Dick",
},
{
	question: "What is 2 + 2?",
	answers: ["4", "22", "Math", "Boolean"],
	rightAnswer: "22",
},
{
	question: "Who created JavaScript?",
	answers: ["Michael B", "GT", "Darwin", "Patrick"],
	rightAnswer: "Darwin",
},
{
	question: "Who is your daddy what does he do?",
	answers: ["Arnold S", "Detective John Kimble", "A Baker", "Darth Vader"],
	rightAnswer: "Arnold S",
},
];

$("#start").on("click", function startGame(){
	$("button").fadeOut();
	nextQuestion();
	decrement();
});

function decrement() {
	if (number > 0) {
		currentQuestion	= setTimeout(nextQuestion, 5000);
		number--;
 		$("#show-number").html("<h2>" + number + "</h2>");
 	}
 	else {
 		number = 5;
 	}
 	waitToChoose = clearTimeout(currentQuestion);
 	setTimeout(decrement, 1000);

}

function showCorrectAnswer(){
	if (isWrong === true){
		number = 10;
		$("#questions").html("NO! The correct answer is " + triviaGame.rightAnswer);
		isWrong = true;
		nextQuestion();
	}

}

function nextQuestion () {
	if (count < triviaGame.length) {	
		$("#answers").empty();
		number = 5;
		$("#questions").html(triviaGame[count].question);
		for (var i = 0; i < triviaGame[count].answers.length; i++){
			var answer = triviaGame[count].answers[i];
			var answerLi = $("<li class='choice'>" + answer + "</li>");
			$("#answers").append(answerLi);
			
			(answerLi).on("click", function (){
				yourAnswer = $(this).text(); 
				console.log(yourAnswer);
				checkAnswer();
			})
			console.log(triviaGame[count].rightAnswer);	
			count++	
			nextQuestion();
 		}
	}
}

function checkAnswer() {
	// This if statement doesn't work but the else does. Fix chooseAnswer
	if(yourAnswer === triviaGame[count].rightAnswer){
		console.log("You're right!");
		correctAnswers++;
	}
	else{
		console.log("The correct answer was " + triviaGame[count].rightAnswer);
		wrongAnswers++
		isWrong = true
		showCorrectAnswer()
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
