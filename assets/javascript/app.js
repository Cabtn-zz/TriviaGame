var score = 0;
var correctAnswers = 0;
var wrongAnswers = 0;
var count = 0;
var number = 5;
var isWrong = false;
var decreaseTime;
var time;

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
		answers: ["Arnold Schwarzenegger", "Detective John Kimble", "A Baker", "Darth Vader"],
		rightAnswer: "Arnold Schwarzenegger",
	},
	{
		question: "Who ws the main villian in Star wars?",
		answers: ["Darth Vader", "Darth Sidious", "The Dark Side", "Jar Jar Binks"],
		rightAnswer: "Jar Jar Binks",
	},
	{
		question: "Do these questions make sense?",
		answers: ["Yes", "No", "God Damn it Abtin", "Merp"],
		rightAnswer: "No",
	},
	{
		question: "Who shot first?",
		answers: ["Han Solo", "What?", "Greedo", "Dumbledore"],
		rightAnswer: "Han Solo",
	},
	{
		question: "Did I have a busy week this week?",
		answers: ["Yes", "NO YOU ARE JUST LAZY", "I don't know", "Make time!"],
		rightAnswer: "Yes",
	},
	{
		question: "Do you plan on having a nice day?",
		answers: ["Yes", "This is shit trivia", "No", "Every day is a blessing"],
		rightAnswer: "This is shit trivia",
	},

];

$("#start").on("click", function startGame(){
	$("button").fadeOut();
	$("#correct").empty();
	$("#incorrect").empty();
	count = 0;
	nextQuestion();
	decrement();
	time = setInterval(decrement, 1000);
});

function decrement() {	
	number--;

	if (number > 0) {
 		$("#show-number").html("<h2>" + number + "</h2>");
 	}
 	if (number < 0) {
 			isWrong = true;
 			showCorrectAnswer();
 	}
}

function stopClock() {
	clearInterval(time);
	console.log("I am time")
}

function showCorrectAnswer(){
	if (isWrong === true){
		number = 5;
		$("#outcome").html("<h1>"+ "NO! The correct answer is " + triviaGame[count].rightAnswer + "</h1>");
		isWrong = true;
		wrongAnswers++;
		console.log("Incorrect: " + wrongAnswers)
		setInterval(nextQuestion, 10000);
		
	}
}

function nextQuestion () {
	if (count < triviaGame.length) {	
		$("#answers").empty();
		$("#outcome").empty();
		number = 20;
		$("#questions").html(triviaGame[count].question);
		for (var i = 0; i < triviaGame[count].answers.length; i++){
			var answer = triviaGame[count].answers[i];
			var answerLi = $("<li class='choice'>" + triviaGame[count].answers[i] + "</li>");
			$("#answers").append(answerLi);
			$(answerLi).on("click", function(){
				yourAnswer = $(this).text(); 
				
				checkAnswer();
			})
		}
	}
	else{
		gameOver();
	}
}

function checkAnswer() {
	
	$("#answers").empty();
	// This if statement doesn't work but the else does. Fix chooseAnswer
	if(yourAnswer === triviaGame[count].rightAnswer){
		$("#outcome").html("<h1>"+ "You are correct you beautiful human" + "</h1>");
		correctAnswers++;
		number = 5
		count++
		setInterval(nextQuestion, 5000);
	}
	else{
		isWrong = true
		showCorrectAnswer()
		count++;
		console.log("this works?")
		setInterval(nextQuestion, 5000);
	}
	console.log("Correct: " + correctAnswers)
	console.log("Incorrect: " + wrongAnswers)
}

function gameOver(){
		stopClock();
		$("#show-number").empty();
		$("#answers").empty();
		$("#outcome").empty();
		$("#questions").empty();
		$("#correct").html("<h1>" +"Correct: " + correctAnswers + "</h1>")
		$("#incorrect").html("<h1>" + "Incorrect: " + wrongAnswers + "</h1>")
		$("button").fadeIn()
}
