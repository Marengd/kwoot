function $ (element) { // Helper Function
  return document.querySelector(element);
}

async function getQuotes(quoteTextfield) {
  const quoteButton = $('#quoteButton');
  quoteButton.disabled = true;

  const response = await fetch('https://api.kanye.rest');
  const data = await response.json();
  const quote = data.quote;

  console.log(data);

  if (quoteTextfield !== null) { // Checks If QuoteTextfield Is Not Null
    quoteTextfield.innerHTML = '';
    typeWriterEffect(quote, quoteTextfield, quoteButton);
  }
}

function typeWriterEffect(text, quoteTextfield, quoteButton) {
  const caret = `<img src="./assets/icons/caret.svg" alt="caret">`;
  const cursor = `<span id="caret"> ${caret} </span>`;
  let index = 0;

  function type() {
    if (index < text.length) {
      quoteTextfield.innerHTML = `" ${text.substring(0, index + 1)} ."${cursor}`;
      index++;
      setTimeout(type, 50);
    } else {
      quoteButton.disabled = false;
    }
  }

  type();
}

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

