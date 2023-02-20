// Variabels
const WisdomText = $('aside section:nth-child(2) p');
const GainWisdomBtn = $('aside section:nth-child(3) button');

// Logic
async function getQuotes() {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json(); // Convert the JSON data from the response object to a JavaScript object.
  const quote = data.quote;

  WisdomText.innerHTML = `"${quote}"`;
}

// Event listener
GainWisdomBtn.addEventListener('click', function() {
  getQuotes();
});

// Function on load
function $ (element) {
   return document.querySelector(element);
}

getQuotes();
