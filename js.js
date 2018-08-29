var fragmentOne = [//array to store the first part of the quote
	"The quick", "The slow", "The lazy", "The excited", "The terrible",
	 "The magnificent", "The scruffy", "The plump", "The glamorous", 
	 "The aggressive", "The long", "The handsome","The acclaimed","The focused","The keen",
	 "The ordinary","The questionable","The precious","The limp","The intelligent","The miserable"]

var fragmentTwo = [//array to store the second half 
" dog", " cat", " elephant", " penguin"," alien",
	" president of the united states", " octopus", " lobster", " astronaut",
	" wookie", " droid", " postman"," centipede"," racecar driver"," platypus", " DJ",
	" jedi"," sith lord"," builder"," policeman"," barman"," businessman"]


var fragmentThree = [//and the third
	" jumped over the fence", " joked with the dog", " ate the rabbit", " had a long conversation with the demon",
	" stole from his pet", " married the octopus", " baked a cake with jimmy", " walked alongside the cat", 
	" played video games with his brother", " wished they were somewhere else", " apsired to be the dog",
	" fed the lion"," went for a drive"," wished they had stayed at home"," laughed at there nose",
	" ate cake"," did the rain dance"," watched star wars", " fell in the hole"," cooked steak"]


var spaceQuote = [//array to store the space quotes
"I’m coming back in… and it’s the saddest moment of my life",
	"When I first looked back at the Earth, standing on the Moon, I cried",
	"We have your satellite. If you want it back send 20 billion in Martian money. No funny business or you will never see it again",
	"That may have been ‘one small step’ for Neil, but it’s a heck of a big leap for me!",
	"Okay, Houston, we’ve had a problem here", "Go Flight", 
	"The probability of success is difficult to estimate; but if we never search the chance of success is zero",
	"Astronomy compels the soul to look upward, and leads us from this world to another.","The sky is the ultimate art gallery just above us.",
	"Equipped with his five senses, man explores the universe around him and calls the adventure Science." ]

var philosophyQuote = [//array to store the philo
"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
	"Go to heaven for the climate and hell for the company",
	"A day without laughter is a day wasted","One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away",
	"Without deviation from the norm, progress is not possible","Never let your sense of morals prevent you from doing what is right",
	"Every strike brings me closer to the next home run","Man is always prey to his truths. Once he has admitted them, he cannot free himself from them",
	"People know what they do; frequently they know why they do what they do; but what they don't know is what what they do does.",
	"I don't want to be a tree; I want to be its meaning.",
	"On the whole human beings want to be good, but not too good, and not quite all the time","The aim of art is to represent not the outward appearance of things, but their inward significance"]
	



function quoteBuilder(){ //randomise the fragment arrays and concatenate them 
	var randomOne = fragmentOne[Math.floor(Math.random()*fragmentOne.length)];
	var randomTwo = fragmentTwo[Math.floor(Math.random()*fragmentTwo.length)];
	var randomThree = fragmentThree[Math.floor(Math.random()*fragmentThree.length)]	;
	var completeQuote = randomOne + randomTwo + randomThree;
	console.log(completeQuote);
}

function spaceQuoteBuilder(){//function to create the random space quote
	var spaceQuoteComplete = spaceQuote[Math.floor(Math.random()*spaceQuote.length)];
	console.log(spaceQuoteComplete);
}

function philosophyQuoteBuilder(){//function to create the random philosphy quote
	var philosophyQuoteComplete = philosophyQuote[Math.floor(Math.random()*philosophyQuote.length)];
	console.log(philosophyQuoteComplete);
}
	
	
console.log("=====================================")	
console.log("Welcome to my random Quote Generator!");
console.log("Select from the options below")
console.log("=====================================")

function theOptions(){
	console.log("Press 1 to Generate 1 quote");
	console.log("Press 2 to Generate 2 quotes");
	console.log("Press 3 to Generate 3 quotes");
	console.log("Press 4 to Generate 4 quotes");
	console.log("Press 5 to Generate 5 quotes");
	console.log("Press 6 to generate a quote about space !")
	console.log("Press 7 to generate a quote about philosophy !")
	console.log("Press 0 to End program");
	console.log("=====================================")
	
}

theOptions();

function thePrompt(){ //switch statement to accept user input and run code based on input
	let userInput = prompt("Enter an option");

	switch(userInput){
		case "1": quoteBuilder();
		break;

		case "2": 
		var i = 0;
		while (i < 2){
			quoteBuilder();
			i++;
		}
		break;

		case "3": 
		var i = 0;
		while (i < 3){
			quoteBuilder();
			i++;
		}
		break;

		case "4": 
		var i = 0;
		while (i < 4){
			quoteBuilder();
			i++;
		}
		break;	
		
		case "5":	
		var i = 0;
		while (i < 5){
			quoteBuilder();
			i++;
		}
		break;

		case "6": 
		var spaceInput = prompt("Enter the number of space quotes to be displayed");
		parseInt(spaceInput);
		var i = 0;
		while (i < spaceInput){
			spaceQuoteBuilder();
			i++;
		}
		break;

		case "7": 
		var philosophyInput = prompt("Enter the number of philosophy quotes to be displayed");
		parseInt(philosophyInput);
		var i = 0;
		while (i < philosophyInput){
			philosophyQuoteBuilder();
			i++;
		}
		break;


		default:
		if (userInput != 0){
		console.log("Incorrect Input, please choose from the above options");
		}		
		break;
	}
	
	(userInput == "0")?console.log('<========= Program Finished =========>'): 
  		window.setTimeout(thePrompt,4000);


}


setTimeout(function(){ //sets the function the prompt() to run after 4 seconds
	thePrompt();
}, 4000);















