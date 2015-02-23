function create_message (questions, i) {

	i = typeof i !== 'undefined' ? i : 0;

	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-left animated fadeInUp\">",
		htmlWrapperEnding = "</div></div>";

	var delay = (i > 0) ? calculateDelay(questions[i - 1]) : 100;
	console.log(delay);

	setTimeout(function(){
		if (i >= questions.length) {
			create_answer_field(delay);
			return 1;
		}
		else {

			$('#container').append(htmlWrapperBeginning + questions[i] + htmlWrapperEnding);
			i++;
			new create_message (questions, i)
		}
	}, delay);
}

function create_answer_field () {
	var htmlAnswerField = "<div class=\"line\"><input type=\"text\" name=\"answer\" id=\"answer\" class=\"message message-right animated fadeInUp\" value=\"\" placeholder=\"Write a response…\"></div>";

	$('#container').append(htmlAnswerField);
	$('#answer').focus();
}

function calculateDelay (string) {
	// 275 words per minute in milliseconds
	return (string.split(" ").length * 218) + 400;
}

$(document).ready(function() {
	var questions = [
						["Hi.", "I'm the computer.", "What's your name?"],
						["Awesome name.", "What city are you in right now?"]
					]
	var question = 0;

	new create_message(questions[question]);
});