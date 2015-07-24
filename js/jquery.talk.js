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
		["Hi.", "I'm Jordan Staniscia", "Might I ask what your name is?"],
		["", "That's a good name.", "Names are a funny thing", "It's one of the only decisions you don't make yourself"],
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
		["david", "That's my roommate's name", "And David Bowie is pretty dope..."],
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
		["jade", "I just started working with a guy named Jade", "He's got some great tattoos and frontend skillz...", "with a Z..."],
		["praveen", "Let's do animations, Praveen!", "You know you want to!"],
		["simon", "Simon says touch your hand to your nose", "Simon says you probably hate this joke if you're name is really Simon", "Simon says I'm still running with it"],
		["george", "George was my grandfather's name"],
		["jerry", "You're not Jerry Seinfeld are you?", "Wanna get in a car and get some coffee?"],
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
		["san francisco", "Hey, that's where I live too!", "You should grab coffee with me sometime", "I like coffee... almost a little too much..."],
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
		["How do you know me?"],
		["", "That's... quite specific"],
		["dont|don't", "Oh that is a shame.", "<a href=\"mailto:jordangetsthisemail@gmail.com\">Send me a note</a> or something if you want to"],
		["work", "Oh you're a coworker?", "Awesome"],
		["instacart", "Instacart, eh?", "Now take a Fernet shot", "I'm serious...", "You took one, right?", "TURNING WEBCAM ON TO VERIFY", "...", "Just Kidding..."],
		["high*school", "Class of 2010", "Back in Florida", "Good times!"],
		["school", "Those must've been the days!"]
	],[
		["What do you do for a living?"],
		["", "That's quite the job!"],
		["design|designer", "I'm a designer too!", "I work at Instacart on the consumer apps team"],
		["dentist", "I have an honest quesiton", "Would it be cheaper keep my real teeth or to yank all my teeth out right now...", "and then replace them all with fake teeth?", "On second thought...", "I don't want to know"],
		["engineer|programmer|eng", "I work with programmers a lot", "And I actually went to school for CompSci"],
		["doctor", "What's up, doc?", "You're not laughing..."],
		["sales|business|bd", "ABC", "Always", "Be", "Closing"],
		["gardener", "I envy people who make the world a little greener",],
		["teacher", "That's an important job!", "Gotta teach the next generation, y'know?"],
		["fireman|firefighter", "Sounds like a job that someone can never FIRE you from!", "Get it?", "..."],
		["unemployed", "Vacation 365, eh?"]
	],[
		["This is going to be odd but...", "I'm curious – do you like dogs?"],
		["", "Woah, don't get so excited"],
		["yes", "I really like dogs too!"],
		["love", "Love is a strong word", "But I'd describe myself that way too", "🐶🐶🐶"],
		["no", "You have no soul, huh?", "In the words of Bill Murray, \"I’m suspicious of people who don’t like dogs, but I trust a dog when it doesn’t like a person.\""],
		["hate", "HATE!?", "Wow", "That's a strong opinion"],
		["cats", "Cats are cool and all", "But dogs!", "Dogs are forever"]
	],[
		["Speaking of dogs...", "What's your favorite animal?"],
		["", "Good choice"],
		["monkey", "Quit monkeying around!", "But really... a monkey?"],
		["dog", "I bet you have had a furry little friend in your life who has kept you company before"],
		["cat", "Meow!", "When I was growing up, my cousin had some of those hairless cats...", "Pretty odd animals if you ask me"],
		["snake", "A snake?", "Really?"],
		["cow", "Is that because they make really good hamburgers?", "..."],
		["parrot", "Polly wanna cracker?"],
		["kangaroo", "You must be quite...", "Jumpy!"],
		["giraffe", "I feel like Giraffes would be fun to ride", "You must feel like you could do ANYTHING on the back of one of them!"],
		["lion", "Simba...", "Remember... Who... You... Are..."],
		["tiger", "Stripes on stripes on stripes"],
		["wolf", "The lone wolf!"],
		["mouse", "You should change that... and quick!", "Disney might sue you for copyright!"],
		["dinosaur|rex", "I'd like to jump on the back of a dinosaur", "a dinosaur with BATTLE ARMOR!"]
	],[
		["Is that your spirit animal?"],
		["", "Only someone in tune with their spirit animal would know that..."],
		["no", "It was worth a guess..."],
		["yes", "I'm an amazing guesser, huh?"]
	],[
		["Look, I hate to do this", "But I have to run", "Sorry we couldn't chat even more, but it was a pleasure.", "You can follow me on <a href=\"http://twitter.com/jordanstaniscia\">Twitter</a> if you want to chat more", "See ya!"]
	]
]

//Variables
var currentQuestion = 0,
	lastQuestion = questions.length - 1;

function storyController (questions) {
	current = 0;

	Parse.initialize("bXR1spQKnockXOYWs65m68f1yREQCU0uUqlMFJ8J", "WSQLkkafg4dzgbZv22EdA7D3FAlns8826XFQllpC");


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
	    	var answer = $.trim($('#answer').val());
	    	if (answer != ""){
	    		$('#answer').remove();
	        	createAnswerMessage(answer);
	        } else {
	        	$('#answer').removeClass('shake').removeClass('fadeInUp');
	        	$('#answer').addClass('shake');
	        	$('#answer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	        		$(this).removeClass('shake').removeClass('fadeInUp');
	        	});
	        }
	    }
	});

	$('#answer').on('touchstart', function () {
        $(this).focus();   // inside this function the focus works
        focused = $(this); // just for the example when I click next on fiddle
    });

	$('#answer').trigger('touchstart').focus();

	smoothScrollBottom();
}

function createAnswerMessage (answer) {
	var htmlWrapperBeginning = "<div class=\"line\"><div class=\"message message-right animated pulse\">",
		htmlWrapperEnding = "</div></div><div class=\"clear\"></div>";

	$('#container').append(htmlWrapperBeginning + answer + htmlWrapperEnding);

	//console.log(answer);
	//console.log(questions[currentQuestion]);


	// --- ANALYTICS --- //
	if (currentQuestion > 0){
		var stringNum = 0; // The first response is always the question
	} else {
		var stringNum = 2; // The first question's position in it's array
	}

	var dimensions = {
	  question: questions[currentQuestion][0][stringNum], // Which question is this?
	  answer: answer
	};
	//console.log(dimensions);
	// Send the dimensions to Parse along with the 'search' event
	Parse.Analytics.track('read', dimensions)
	// ------------------ //

	createMessage(findResponseForAnswer(answer, questions[currentQuestion]), 1, 1);
}

function findResponseForAnswer (answer, responses) {
	for (k = 2; k < questions[currentQuestion].length; k++) {
		// console.log(k + " - " + responses[k][0] + " == " + answer);
		if ( answer.toLowerCase().match(responses[k][0]) ) {
			return responses[k];
		}
	}
	//console.log("!= " + answer);
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

function openCloseMenu () {
	$menu = $('#menu');
	$overlay = $('#menu-overlay');
	$mainContent = $('#container');
	var animationOver = true;

	$menu.click(function(){
		if (animationOver){
			// If Active when you click
			if ($(this).hasClass('active')) {
				// Make Inactive
				$menu.removeClass('active');
				animationOver = false;
				// Fade Out
				$overlay.removeClass('fadeIn').addClass('fadeOut');
				$mainContent.removeClass('blur');

				$overlay.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						// And when it's done animating, hide it
		        		$(this).hide().removeClass('fadeOut');
		        		animationOver = true;
		        	});
			} else {
				$menu.addClass('active');
				animationOver = false;
				$overlay.show().addClass('fadeIn');
				$mainContent.addClass('blur');
				$overlay.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					animationOver = true;
				});
			}
		}
	});
}

$(document).ready(function() {
	new storyController(questions);
	new openCloseMenu();
});