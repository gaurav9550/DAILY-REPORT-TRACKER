const quoteText = document.getElementById("quoteText");

const quoteAuthor = document.getElementById("quoteAuthor");

const newQuote = document.getElementById("newQuote");

async function getQuote(){

    try{

        let response = await fetch("https://api.quotable.io/random");

        let data = await response.json();

        quoteText.innerText = `"${data.content}"`;

        quoteAuthor.innerText = `- ${data.author}`;

    }

    catch(error){

        quoteText.innerText = "Stay focused and keep improving 🚀";

        quoteAuthor.innerText = "- FocusFlow";

    }
}

newQuote.addEventListener("click",getQuote);

// Load quote when page opens

getQuote();