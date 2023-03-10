// Import necessary modules
import { $ } from "./helper.js";
import { quotePromises } from './fetchQuotes.js';
import { loading, loaded } from './states.js';


// Call the loading state function immediately
loading();

// Call the displayQuotes function immediately
displayQuotes();


// VARS
let currentLetter = '';
let currentDetails = null;

// LOGIC
async function displayQuotes() {

  // Get the loader element
  const loader = $('#loader');
  // Get the quote list element
  const quoteList = $('#quote-list');

  // Handle error if the element is not found
  if (!quoteList) {
    console.log("Error: Could not find the 'quote list'");
    return;
  }

  // Get all the quotes using the quotePromises array
  const quotes = await Promise.all(quotePromises);

  // Create a set with unique quotes
  const quotesSet = new Set(quotes);


  // TO DO: Add quotes to local storage.

  loader.classList.add('active');

  // Sort the unique quotes alphabetically and loop through them
  // NOTE: I'VE HAD HELP FROM CHATGPT, SORTING THE QUOTES ON ALPHABETICAL ORDER AND DISPLAYING THEM IN HTML TAGS

  Array.from(quotesSet).sort().forEach((quote) => {
    // Get the starting letter of the quote
    const startingLetter = quote.charAt(0).toUpperCase();

    // If the starting letter is different than the current letter
    if (startingLetter !== currentLetter) {
      // If there is a current details element, append it to the quote list
      if (currentDetails !== null) {
        quoteList.appendChild(currentDetails);
      }

      // Create a new details element for the current letter
      currentDetails = document.createElement('details');
      const summary = document.createElement('summary');
      const ul = document.createElement('ul');
      summary.textContent = `${startingLetter}`;
      currentDetails.appendChild(summary);
      currentDetails.appendChild(ul);

      // Update the current letter to the starting letter
      currentLetter = startingLetter;
    }

    // Create a new list item for the quote and add it to the current details element
    const li = document.createElement('li');
    li.textContent = quote;
    // Log quote on click
    li.addEventListener('click', () => {
      //Log the content of the console
      console.log(li.textContent);
      // Alert the content of the li.
      alert(li.textContent);
    });
    currentDetails.querySelector('ul').appendChild(li);
  });

  // If there is a current details element, append it to the quote list
  if (currentDetails !== null) {
    quoteList.appendChild(currentDetails);
  }

  loaded();
}


