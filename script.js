// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


//This is an array containing the quotes as objects in the array.

var quotes = [
  {quote: "Give me chastity and continence, but not yet.",
   source: " Saint Augustine",
   cite: "",
   year:"",
   tag:"Humor, Religion"
  },

  {quote: "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
   source: "Richard Dawkins",
   cite: "",
   year:"",
   tag:"Philosophy, Religion"
  },

  {quote: "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
   source: "Ambrose Redmoon",
   cite: "",
   year: "",
   tag:"Philosophy"
  },

  {quote: " To the man who only has a hammer, everything he encounters begins to look like a nail.",
   source: "Abraham Maslow",
   cite: "",
   year:"",
   tag:"Philosophy, Psychology"
  },

  {quote: " What the world needs is more geniuses with humility, there are so few of us left.",
   source: "Oscar Levant",
   cite: "",
   year: "",
   tag:"Humor"
  },

  {quote: " When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.",
   source: "Norm Crosby",
   cite: "",
   year:"",
   tag:"Humor"
  },

  {quote: " Those who believe in telekinetics, raise my hand.",
   source: "Kurt Vonnegut",
   cite: "",
   year: "",
   tag:"Humor"
  },

  {quote: " It is the mark of an educated mind to be able to entertain a thought without accepting it.",
   source: "Aristotle",
   cite: "",
   year: "",
   tag:"Philosphy"

  }

];

//Uses a random number generator to randomly generate a quote to display, and returns the value, which is then stored in the outQuote var.

function getRandomQuote(){
  var randomNumber = (Math.floor(Math.random() * quotes.length));
    return quotes[randomNumber];

};

function getRandomBackGroundColor(){
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
     var bgColor = "rgb(" + a + "," + b + "," + c + ")";
    return bgColor;
 console.log(bgColor);

    document.body.style.background = bgColor;
    };



//Prints the output from the getRandomQuote var to the HTML. It also prescribes the correct formatting of the elements such as "quote", and "source" so that they display properly on the page. Also includes conditional statements to display the citation and date if available for each quote.

function printQuote(){
 var outQuote = getRandomQuote();


  var produceQuote ='';
    produceQuote += '<p class="quote">' + outQuote.quote + '</p>';
    produceQuote +=  '<p class="source">' + outQuote.source + '</p>';
    if (outQuote.cite){
  produceQuote += '<span class="citation">' + outQuote.cite + '</span>'
    }
  if (outQuote.year){
  produceQuote += '<span class="year">' + outQuote.year + '</span>'
  }
  if (outQuote.tag){
  produceQuote += '<span class="tag">' + outQuote.tag + '</span>'

  document.body.style.backgroundColor = getRandomBackGroundColor();
      var timeoutID = window.setTimeout(printQuote, 5000);
  }

 //Prints to HTML the output of the printQuote function. Provides it is rendered with the proper element from the HTML.

  var produceQuote = document.getElementById('quote-box').innerHTML = produceQuote;

}
//This sets an interval to automatically refresh the page, and retrieves a new random quote and back ground color.
var autoRefresh;
function delayedAlert() {
  autoRefresh = window.setInterval(autoButton, 40000);
}
