// An array to store promises that will eventually resolve to Kanye West quotes
export const quotePromises = [];

fetchQuotes();

// An async function to fetch all quotes using the Kanye.rest API
export async function fetchQuotes() {
  
  // Loop through the API calls and add their promises to the array
  for (let i = 0; i < 100; i++) { // Fetching 100 quotes

    // Make an API call using fetch and extract the quote from the response
    const promise = fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => data.quote)
      .catch(error => {
        console.log(error);
        throw error;
      });

    // Add the promise to the array
    quotePromises.push(promise);
  }
  console.log(`${quotePromises.length} quotes fetched`);
}

