// Variabels
const OpenGeneratorBtn = $('header nav ul li button');
const CloseGeneratorBtn = $('aside nav ul li button');

const WisdomGenerator = $('aside');


// Logic
OpenGeneratorBtn.addEventListener('click', function() {
   WisdomGenerator.classList.add('visible'); // Make the Wisdom generator visible.
 });

 
 CloseGeneratorBtn.addEventListener('click', function() {
   WisdomGenerator.classList.remove('visible'); // Hide the Wisdom generator.
 });

// Function on load
function $ (element) {
   return document.querySelector(element);
}


