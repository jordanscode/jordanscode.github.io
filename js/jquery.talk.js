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
						["Hi.", "I'm Jordan", "What's your name?"],
						["", "It's a good name.", "I once named my hamster", "I read that on Wikipedia.", "Promise"],
						["jordan staniscia", "Welcome home, Jordan", "You have been enabled with Admin controls", "...", "Just kidding."],
						["jordan", "A solid name, I must say", "Computers can't lie y'know..."],
						["sarah li", "Hey Bae", "Want to go on another trip somewhere?", "The last few trips we've taken were so much fun!"],
						["sarah", "Wow", "That's also my girlfriend's name"],
						["sara", "I'm unsure what happened to the 'H' in your name", "Perhaps it was an ingenious simplification of an unnecessary letter", "Or perhap a lazy missing one!"],
						["cj", "Sweet name", "I forsee many boats in your future", "YUMUNSIMINIOR!"],
						["demi", "Hey, Demi!", "I'm eating airhead extremes while writing this", "\"sugar\" is all over my keyboard"],
						["carlos|carlos solares", "Cool name", "I bet you work from home", "and by \"work\", I mean you play lots of 2k"],
						["david bowie", "Funky, funky name, man"],
						["bowie", "Let me put this in terms you may understand", "🐶 bark bark!"],
						["ricki", "Hi, Mom!", "Miss ya!"],
						["peter staniscia", "Hi, Dad!", "Hope you're having a great day!", "Say hi to Bowie for me?"],
						["peter", "That's my dad's name", "and I have a coworker named Peter", "And my girlfriend's dad's name", "so many people named Peter!"],
						["corey", "Hey, Corey!", "Remember that time we paintballed Ross's car?", "haha", "Good times..."],
						["cory", "I had a teacher named Cory!", "He taught me a lot about journalism and comic books!"],
						["kevin", "I know a guy named Kevin", "He's one of the friendliest guys I know", "I once saw him eat a plate of nachos in two bites"],
						["zethus", "Hello fellow Jew!", "Still playing The Sims?", "also", "When you're done can we get boba?"],
						["david lee", "java extrordinaire", "heir to the Costco throne", "Wearer of Adidas", "Welcome"],
						["david", "That's my roommate's name", "But there are lots of Davids in the world"],
						["max mullen", "Hey, Max!", "SHIP IT"],
						["max malin", "What's up, Max?", "Want to go back to Berkeley soon?"],
						["max", "I know a few people named Max", "Are you tall?", "Do you have brownish/reddish hair?", "If so, we haven't narrowed it down at all"],
						["min", "Shortest intro ever is definitely \"Min iOS\"", "Let's build more cool shit, ok?"],
						["mike dean", "Hey, man!", "How's Bandit?"],
						["mike chlipala", "Hot Cheetos", "and Takis"],
						["mike", "I know lots of Mikes!", "And none of them are singers!", "zing", "Did you see what I did there?"],
						["chloe", "I know only two Chloes", "One is a good friend of mine who makes amazing latkes", "The other is a bottle of wine", "Friends and booze are both cool in my book"],
						["mod", "YO", "WASSUP BUDDY", "Let's grab some beers soon!", "I hope they're Chimays"],
						["bo", "I know only one Bo", "She's an awesome product manager", "she knows how to coral chickens", "and she's a good friend 😬"],
						["xavier", "I worked with a great guy named Xavier before!", "He's a real innovative guy"],
						["burt", "I know a guy named Burt, worked with him too!", "He's got some world-chaning ideas in his head"],
						["skyler", "Is that you, Superman?", "Have you flown here from your fortress of dad-joke-itude?"],
						["james smith", "mental!", "I know you!", "game night soon?", "I'll destroy you in Unreal"],
						["james", "I know a guy named James", "He really hates bugs"],
						["dieter rams", "I'm a huge fan", "Are you sure you wouldn't be a designer again?", "Designers are more than just creators of objects"],
						["jony ive", "I'm a big fan", "Can I design a special edition object with you too?", "Maybe a Space Gray shopping bag?", "...", "No you're right...", "Let's do it in gold"],
						["jack white", "Just wanted to say you're my musical idol", "minimalistic music", "minimalistic visuals", "You're brilliant"],
						["maksim", "Hey, Maksim!", "This site isn't very material", "I've let you down!"],
						["breana", "My neighbor back in middle and highschool was named Breana", "She's an awesome person who has a wonderful pup who likes to prance"],
						["brian dean", "Hey, old roomie!", "How's life?", "Still metaphyscial?", "Don't answer that."],
						["matt", "I know a lot of matts!", "You guys are always a crazy bunch"],
						["apoorva", "Hey, want to go to Novella?"],
						["shelley", "I know an awesome woman named Shelley who loves ramen as much as I do", "Let's go soon?"],
						["devon", "I know a guy named Devon", "The one guy who is younger than me when I was at Livefyre", "He's a kick-ass engineer"],
						["mark zuckerberg", "Hey dude", "👍"],
						["barbara", "I have a good family friend named Barbara", "She's pretty smart"],
						["charlie", "I have a good family friend named Charlie", "He's a sports almanac!"],
						["matias duarte", "I'm a huge fan!", "webOS was my jam", "And Material Design...", "Lovin' it"],
						["immad", "I worked with an Immad a few years back", "He's ruthless at board games!"],
						["jude", "I worked with a Jude a few years back", "He's a spontaneous guy who is a lot of fun"],
						["dan", "I know a few dans", "The common thread of all dans are that they are great, stand-up guys"],
						["kermit", "It's time to play the music..."],
						["miss piggie", "It's time to light the lights..."],
						["fozzie", "It's time to get things started..."],
						["gonzo", "Am I worthy?", "Of Gonzo the Great!?"],
						["pepe", "Pepe is my favorite muppet", "He's the shrimp"],
						["rizzo", "Rizzo is an awesome muppet!", "I had a stuffed animal of him as a kid"],
						["leon", "Leon was my favorite character on this show called The Puzzle Place", "I carried around the stuffed animal of him for years"],
						["marie|maria", "That's my grandmother's name", "She's a great cook"],
						["arlene", "That's my grandmother's name", "She's really cool", "She used to play Super Nintendo with us as kids"],
						["don", "Don, is that you?", "What is happiness?", "It's a moment before you need more happiness"],
						["rasheed", "Hey, Rasheed!", "Ready to be a brogrammer?"],
						["ben", "I worked with a smart dude named Ben", "He's a great friend now"],
						["brenna", "Hey, Brenna!", "I wish there were geology classes for adults", "taught by Hana"],
						["kayla", "I have a friend named Kayla", "She's really into cats", "and cat sweaters"],
						["jonathan", "I know a lot of Jonathans", "Like 50% of them have beards"],
						["jack", "I have a good friend named Jack", "He's what you'd call and artíst"],
						["nolan", "I have a friend named Nolan!", "aka The Pumpkin King", "Gotta love old online handles..."],
						["jen", "I have a friend named Jen", "She knows how to treat yo' self"],
						["arjun", "Arjun, Arjun, Arjun", "Miss you brehhh"],
						["ryan", "Ryan's are a unique type of person", "Ratchet at their core", "haha", "I kid, I kid"],
						["zain", "I know a guy named Zain", "He has a unique relationship with the color black", "And pulls it off flawlessly"],
						["francisco", "I know you eat healthy", "And I know you don't like beer", "But one day we will get beers and some greasy hamburger", "And it will be glorious"],
						["jade", "I just started working with a guy named Jade", "He's got some great tattoos"],
						["praveen", "Let's do animations, Praveen!", "You know you want to!"],
						["simon", "Simon says touch your hand to your nose", "Simon says you probably hate this joke if you're name is really Simon", "Simon says I'm still running with it"],
						["george", "George was my grandfather's name"],
						["jim", "Jim was my grandfather's name"],
						["shari", "Hey, Shari!", "WHEN ARE YOU VISITING SF!?"],
						["janiel", "I have a great friend named Janiel", "She sends me postcards from all over the world!", "Must be neat to travel so much"],
						["bill", "Like Mr. Bill?", "OH NOOOOooooooooo"],
						["becky", "Becky!", "Socks are a great present, you know"],
						["troy", "I have a friend named Troy", "He's a stand-up dude"],
						["josh", "Are you my cousin Josh?", "My friend Josh?", "So many Joshuas in my life!"],
						["ethan", "I have a friend named Ethan", "He likes that show The Inbetweeners a lot"]
					],[
						["What city are you in right now?"],
						["", "People live there?", "I had no idea"],
						["san francisco", "Hey, that's where Jordan lives too!", "You should grab coffee with him", "He likes coffee... almost a little too much..."],
						["new york city", "So when are you moving to Williamsburg?", "Just kidding... Sorta..."],
						["nyc|sf", "Too lazy to type in full words, eh?"],
						["london", "I've never been!", "Would love to visit soon, though"],
						["paris", "\"Soup DeJour\" is about the extent of my French"],
						["brooklyn", "Home of chya'boy!", "Uhhhhhh", "It's Jay-Z...", "I'm doing an impression of Jay-Z..."],
						["washington dc", "ahhhh", "The land of many monuments", "or something like that"],
						["coral springs", "Hey!", "I'm from there!"],
						["coconut creek", "I used to live there!", "How's the ol' hangout doing?"],
						["miami", "Ah", "A fellow Floridian!"],
						["tampa", "Ooooh", "Is Mel's Hot Dogs still there?", "I get mine with pickles"],
						["orlando", "I hope it's not lovebug season"]
					],[
						["How do you know Jordan?"],
						["", "That's... quite specific"],
						["work", "Oh you're a coworker?", "Awesome"],
						["high*school", "Class of 2010", "Back in Florida", "Good times!"],
						["school", "Those must've been the days!"]
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
	response = typeof response !== 'undefined' ? response : 0;

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
				return 1;
			}
			// If it's the last question before an answer
			else {
				createAnswerField(delay);
				return 1;
			}
		}
		// if it's not the last message, display the next one
		else {

			$('#container').append(htmlWrapperBeginning + messagesArray[i] + htmlWrapperEnding);
			smoothScrollBottom();
			i++;
			createMessage(messagesArray, i, response);
		}
	}, delay);
}

// Creates an answer input bubble
function createAnswerField () {
	var htmlAnswerField = "<div class=\"line\"><input type=\"text\" name=\"answer\" id=\"answer\" class=\"message message-right animated fadeInUp\" value=\"\" placeholder=\"Write a response…\"></div><div class=\"clear\"></div>";

	if (currentQuestion >= lastQuestion) {
		return 1;
	}

	$('#container').append(htmlAnswerField);

	$('#answer').keyup(function(event){
	    if(event.keyCode == 13){
	    	var answer = $('#answer').val();
	    	$('#answer').remove();
	        createAnswerMessage(answer);
	    }
	});

	$('#answer').focus();

	smoothScrollBottom();
}

function createAnswerMessage (answer) {
	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-right animated pulse\">",
		htmlWrapperEnding = "</div></div><div class=\"clear\"></div>";

	$('#container').append(htmlWrapperBeginning + answer + htmlWrapperEnding);

	console.log(answer);
	console.log(questions[currentQuestion]);
	createMessage(findResponseForAnswer(answer, questions[currentQuestion]), 1, 1);
}

function findResponseForAnswer (answer, responses) {
	for (k = 2; k < questions[currentQuestion].length; k++) {
		console.log(k + " - " + responses[k][0] + " == " + answer);
		if ( answer.toLowerCase().match(responses[k][0]) ) {
			return responses[k];
		}
	}
	console.log("!= " + answer);
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
	$('html,body').animate({ scrollTop: $(document).height() }, 1000);
}

$(document).ready(function() {
	new storyController(questions);
});