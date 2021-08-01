const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const loaderElement = document.getElementById("loader")

const newQuoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter-button");

let quotes = "";

function showLoadingSpinner() {

    quoteContainer.hidden = true;
    loaderElement.hidden = false;
}

function hideLoadingSpinner() {

    quoteContainer.hidden = false;
    loaderElement.hidden = true;
}



function quoteToTwitter() {
    // get current quote and author put it into twitter api
    // make event listener to twitter button
    console.log("twitter button clicked.!")
}


function generateQuote() {


    const randomNumber = Math.floor(Math.random() * quotes.length)
    quote = quotes[randomNumber]
    const quoteTextNew = quote.text;
    const quoteAuthorNew = quote.author;
    quoteText.textContent = quoteTextNew;
    quoteAuthor.textContent = quoteAuthorNew;




    if (quoteTextNew.length < 50) {
        quoteText.classList.add("big-fontsize")
    } else {
        quoteText.classList.remove("big-fontsize")
    }


    if (quoteAuthorNew === "") {
        quoteAuthorNew = "Unknown"
    }
    
    quoteText.textContent = quoteTextNew;
    quoteAuthor.textContent = quoteAuthorNew;
    
}

async function fetchQuotes() {
    showLoadingSpinner();

    const apiUrl = "https://type.fit/api/quotes";
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        quotes = data
        generateQuote();
        
    } catch (err) {
        console.log(err)
    }

    hideLoadingSpinner();

}


fetchQuotes();


newQuoteButton.addEventListener("click", generateQuote);
twitterButton.addEventListener("click", quoteToTwitter);