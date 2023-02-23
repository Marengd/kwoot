function $ (element) { // Helper Function
  return document.querySelector(element);
}

// Logic
async function getQuotes(quoteTextfield) {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json();
  const quote = data.quote;

  console.log(data);

  if (quoteTextfield !== null) { // Checks If QuoteTextfield Is Not Null
    quoteTextfield.innerHTML = `"${quote}"`;
  }
}

// Event listener
document.addEventListener('click', function(event) {
  const quoteButton = $('#quoteButton');
  const quoteTextfield = $('#quote');

  if (event.target === quoteButton) { // Checks If A Click Occurred On The Element QuoteButton
    console.log("Button clicked");
    getQuotes(quoteTextfield); // JavaScript Closure
  }
});


// Call getQuotes On Page Load
getQuotes($('#quote'));
