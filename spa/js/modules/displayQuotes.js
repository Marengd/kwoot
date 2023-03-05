import { $ } from "./helper.js";
import { quotePromises } from './fetchQuotes.js';

// Function to display quotes in the ul with id #quote-list
export async function displayQuotes() {
  const quoteList = $('#quote-list');

  if (!quoteList) {
    console.log("Error: Could not find quote list element");
    return;
  }

  // Wait for all the quote promises to resolve
  const quotes = await Promise.all(quotePromises);

  // Loop through the quotes and add them to the ul as li's
  quotes.forEach(quote => {
    const li = document.createElement('li');
    li.innerText = quote;
    quoteList.appendChild(li);
  });

  console.log(`${quotes.length} Quotes displayed`);
}

// Call the displayQuotes function when the window is loaded
window.addEventListener('load', displayQuotes);
