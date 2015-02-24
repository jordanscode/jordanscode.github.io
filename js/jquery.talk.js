var questions = [
						["Hi.", "I'm working on something really cool.", "I promise it will be done soon.", "Just have some patience.", "And before you know it...", "It'll be Christmas morning."]
					]
var currentQuestion = 0,
	lastQuestion = questions.length - 1;

function story_controller (questions) {
	current = 0;
	create_message(questions[current]);
}

// Recursive function that goes through the set of messages it is given
function create_message (messagesArray, i) {

	i = typeof i !== 'undefined' ? i : 0;

	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-left animated fadeInUp\">",
		htmlWrapperEnding = "</div></div>";

	var delay = (i > 0) ? calculateDelay(messagesArray[i - 1]) : 100;

	setTimeout(function(){
		if (i >= messagesArray.length) {
			create_answer_field(delay);
			return 1;
		}
		else {

			$('#container').append(htmlWrapperBeginning + messagesArray[i] + htmlWrapperEnding);
			smoothScrollBottom();
			i++;
			create_message (messagesArray, i)
		}
	}, delay);
}

// Creates an answer input bubble
function create_answer_field () {
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
	        create_answer_message(answer);
	    }
	});

	$('#answer').focus();
}

function create_answer_message (message) {
	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-right animated pulse\">",
		htmlWrapperEnding = "</div></div><div class=\"clear\"></div>";

	$('#container').append(htmlWrapperBeginning + message + htmlWrapperEnding);

	currentQuestion++;
	create_message(questions[currentQuestion]);
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
	new story_controller(questions);
});