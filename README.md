# Project 4 - Create a quotation generator
### OpenClassrooms 

 **1** - Write a program to randomly generate a quote from string fragments <br/>
 **2** - Console log the results <br/>
 **3** - Allow the user to select quote options <br/>
 **4** - Allow the user to select the amount of quotes generated <br/>
 **5** - Present over video call to simulate real life conditions
 <br/>
 ### Skills Developed
 * JavaScript
 * Design an algorithm to meet a specification
 * Implement the JavaScript syntax in a program
 
 ### Setup
 
 ```
 open index.html
 open the console and select from the options
 
 ```
 ![quote](https://user-images.githubusercontent.com/40371755/47440446-19ab4d80-d7a6-11e8-8684-83ab0fda2b6b.png)
<br/>
 ### Example Code
 
 ```JavaScript
 function spaceQuoteBuilder(){//function to create the random space quote
	var spaceQuoteComplete = spaceQuote[Math.floor(Math.random()*spaceQuote.length)];
	console.log(spaceQuoteComplete);
}

function philosophyQuoteBuilder(){//function to create the random philosphy quote
	var philosophyQuoteComplete = philosophyQuote[Math.floor(Math.random()*philosophyQuote.length)];
	console.log(philosophyQuoteComplete);
}


		});
