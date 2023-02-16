console.log('Made with ❤️ by Danian Marengo');

// Variabels
const WisdomText = $('aside section:nth-child(2) p');
const GainWisdomBtn = $('aside section:nth-child(3) button');

const OpenGeneratorBtn = $('header nav ul li button');
const CloseGeneratorBtn = $('aside nav ul li button');

const WisdomGenerator = $('aside');

// Logic
async function gainWisdom() {
  const response = await fetch('https://api.kanye.rest');
  const data = await response.json(); // Convert the JSON data from the response object to a JavaScript object.
  const quote = data.quote;

  WisdomText.innerHTML = `"${quote}"`;
}

// Event listener
OpenGeneratorBtn.addEventListener('click', function() {
   WisdomGenerator.classList.add('visible'); // Make the Wisdom generator visible.
 });
 
 CloseGeneratorBtn.addEventListener('click', function() {
   WisdomGenerator.classList.remove('visible'); // Hide the Wisdom generator.
 });
 
GainWisdomBtn.addEventListener('click', function() {
  gainWisdom();
});


// Function on load
function $ (element) {
   return document.querySelector(element);
}

gainWisdom();





// 0. Notities en Variabele in Engels ✅
// 1. Typwriter effect toevoegen 🤞
// 2. Button animeren zolang als dat de tekst getypt wordt 🤞
// 3. Uberduck API voor Text to Speech 🤞
// 4. Button Disablen totdat de quote is uitgetypt 🤞
// 5. States implementeren 🤞
