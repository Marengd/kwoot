function $ (element) {
  return document.querySelector(element);
}

// Logic
async function getQuotes(wisdomtext) {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json();
  const quote = data.quote;

  console.log(data);

  if (wisdomtext !== null) {
    wisdomtext.innerHTML = `"${quote}"`;
  }
}

// Event listener using event delegation
document.addEventListener('click', function(event) {
  if (event.target.matches('#quoteButton')) {
    console.log("Button clicked");
    getQuotes($('#quote'));
  }
});

// Call getQuotes on page load
getQuotes($('#quote'));
