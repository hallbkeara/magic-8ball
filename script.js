$(document).ready(function(){

	var magic8Ball = {};
		magic8Ball.answers=["it is certain", "outlook good", "maybe", "very doubtful", "absolutely not"];
	$("#answer").hide();
	
// function of getting random answer
		magic8Ball.askQuestion = function (question) {
		$("#answer").fadeIn(4000);
      // show answer side img
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
		var randomNumber = Math.random();
		var randomNumberArray = randomNumber * magic8Ball.answers.length;
		var randomIndex = Math.floor (randomNumberArray);
		var randomAnswer = magic8Ball.answers[randomIndex];
			
// GETTING THE ANSWER TO SHOW AFTER ASKING A QUESTION : FINISHED
	$("#answer").text(randomAnswer);
console.log(question);			console.log(randomAnswer); 
	};
	
// click button, get prompt to appear function 
var onClick = function(){
		$("#answer").hide();
  // show 8ball img 
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
  // wait a half second before showing prompt
    setTimeout (
      function (){
		var question = prompt ("Ask Me Anything");
	magic8Ball.askQuestion(question);
      }, 500);
  $("#8ball").effect("shake");
};
	$("#questionButton").click(onClick);
});