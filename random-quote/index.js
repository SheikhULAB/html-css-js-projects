const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {
    try {
      const response = await fetch("https://api.quotable.io/quotes/random");
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      quoteEl.innerText = data.content;
      authorEl.innerText = "~ " + data.author;
    } catch (err) {
      quoteEl.innerText = "⚠️ Could not load a quote.";
      authorEl.innerText = "";
      console.error("Fetch failed:", err);
    }
  }
  

btnEl.addEventListener("click", getQuote());