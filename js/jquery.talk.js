//--------------------------------------TERMINOLOGY-------------------------------------------//
//
// Message = Generic message
//
// Question = Messages that end with a question
//    \/
// Answer = What the visitor types in response to a question
//    \/
// Response = How the system responds to the answer, usually followed by the next question
//
//-------------------------------------------------------------------------------------------//

// GLOBAL, which I know is bad...

var questions = [
					[
						["Hi.", "I'm the computer.", "What's your name?"],
						["It's a good name.", "The best name in the world, though, is Jordan.", "I read that on Wikipedia.", "Promise"],
						["Jordan","You have been enabled with Admin controls.", "...", "...Just kidding."],
						["CJ", "Sweet name", "I forsee many boats in your future"],
						["Carlos", "Cool name", "I bet you work from home", "and by \"work\", I mean you play lots of 2k."]
					],[
						["What city are you in right now?"],
						["San Francisco", "Hey, that's where Jordan lives too!", "You should grab coffee with him.", "He likes coffee... almost a little too much..."],
						["New York City", "So when are you moving to Williamsburg?", "Just kidding... Sorta..."],
						["NYC", "Too lazy to type in full words, eh?"],
						["SF", "Too lazy to type in full words, eh?"]
					],[
						["How do you know Jordan?"],
						["Work", "Oh you're a coworker?", "Awesome"]
					],[
						["What temperature do you think it is outside?"]
					],[
						["It was nice meeting you."]
					]
				]
var currentQuestion = 0,
	lastQuestion = questions.length - 1;

function storyController (questions) {
	current = 0;
	createMessage(questions[current][0]);
}

// Recursive function that goes through the set of messages it is given
function createMessage (messagesArray, i, response) {

	// i is optional - i is the current message in the array the system is displaying
	i = typeof i !== 'undefined' ? i : 0;

	// response is optional - response is a boolean that refers to whether the set of messages is a response to a question or the question itself
	response = typeof response !== 'undefined' ? response : false;

	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-left animated fadeInUp\">",
		htmlWrapperEnding = "</div></div>";

	// If this message is not the first, use the previous to calculate a delay, otherwise use a number
	var delay = (i > 0) ? calculateDelay(messagesArray[i - 1]) : 100;

	setTimeout(function(){
		// if it's the last message in the series
		if (i >= messagesArray.length) {

			// if it's the last response to an answer
			if (response) {
				currentQuestion++;
				createMessage(questions[currentQuestion][0]);
			}
			// If it's the last question before an answer
			else {
				createAnswerField(delay);
			}
			return 1;
		}
		// if it's not the last message, display the next one
		else {

			$('#container').append(htmlWrapperBeginning + messagesArray[i] + htmlWrapperEnding);
			smoothScrollBottom();
			i++;
			createMessage(messagesArray, i); 
		}
	}, delay);
}

// Creates an answer input bubble
function createAnswerField () {
	var htmlAnswerField = "<div class=\"line\"><input type=\"text\" name=\"answer\" id=\"answer\" class=\"message message-right animated fadeInUp\" value=\"\" placeholder=\"Write a response…\"></div>";

	if (currentQuestion >= lastQuestion) {
		return 1;
	}

	$('#container').append(htmlAnswerField);
	smoothScrollBottom();

	$('#answer').keyup(function(event){
	    if(event.keyCode == 13){
	    	var answer = $('#answer').val();
	    	$('#answer').remove();
	        createAnswerMessage(answer);
	    }
	});

	$('#answer').focus();
}

function createAnswerMessage (answer) {
	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-right animated pulse\">",
		htmlWrapperEnding = "</div></div><div class=\"clear\"></div>";

	$('#container').append(htmlWrapperBeginning + answer + htmlWrapperEnding);

	console.log(answer);
	console.log(questions[currentQuestion]);
	createMessage(findResponseForAnswer(answer, questions[currentQuestion]), 0, true);
}

function findResponseForAnswer (answer, responses) {
	for (k = 2; k < questions[currentQuestion].length; k++) {
		console.log(k + " - " + responses[k][0] + " == " + answer);
		if (responses[k][0].to_s === answer) {
			return responses[k];
		}
	}
	return responses[1];
}

// Calculates the delay based on whatever string you give it
function calculateDelay (string) {
	// 275 words per minute in milliseconds plus a constant
	var delayPerWord = 218;
	var delay = string.split(" ").length * delayPerWord;
	delay = (delay < delayPerWord * 3) ? delay + 400 : delay;
	return delay;
}

function smoothScrollBottom () {
	$('html,body').animate({ scrollTop: $(document).height() }, 100);
}

$(document).ready(function() {
	new storyController(questions);
});