// Variables
const introductie = $('main section:nth-child(2) ul li figcaption h2');

const volledigeNaam = $('main section:nth-child(1) nav ul li:nth-child(1) h2');
const mijnrol = $('main section:nth-child(1) nav ul li:nth-child(2) h3');

// Logica
fetchData()

// Functions
function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/member?id=cldepnfgq3ybd0av0udnjtz0d'

    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        changeHTML(data)
                    })
}

function changeHTML (data) {
    const name = data.member.name
    const lastName = data.member.surname
    const rol = data.member.role

    volledigeNaam.insertAdjacentHTML('afterbegin', `${name} ${lastName}`)
    mijnrol.insertAdjacentHTML('afterbegin', `${rol}`)

    introductie.insertAdjacentHTML('afterbegin', `${name} ${lastName}`) 
}

function $ (element) {
    return document.querySelector(element)

}

function $$ (elements) {
    return document.querySelectorAll(elements)
}





const hoofd = document.querySelector('main section figure img');
let timer;

function aftellen() {
  timer = setTimeout(raakt_geïrriteerd, 5000);

  // Als er na 5 seconde niet op mijn hoofd is gedrukt.
  function raakt_geïrriteerd() {
    hoofd.src = "./assets/images/mijngeweldigebozehoofd.png";
  }
}
document.addEventListener("DOMContentLoaded", aftellen);

// Zodra de gebruiker op mijn hoofd drukt, om mijn contactgegevens te bekijken.
function enorm_blij() {
  clearTimeout(timer);
  this.src = "./assets/images/mijngeweldigeblijehoofd.png";
}
hoofd.addEventListener("mouseover", enorm_blij);

// Zodra de gebruiker mijn contactgegevens heeft bekeken.
function weer_blij() {
  this.src = "./assets/images/mijngeweldigehoofd.png";
}
hoofd.addEventListener("mouseout", weer_blij);





const btn1 = document.querySelector('main section:nth-child(1) button');
const voorkant = document.querySelector('main section:nth-child(1)');

const btn2 = document.querySelector('main section:nth-child(2) button');
const achterkant = document.querySelector('main section:nth-of-type(2)');

// Kaart draaien naar de achterkant.
function kaart_draaien() {
  voorkant.classList.add('kaart_draaien_1');
  achterkant.classList.add('kaart_draaien_2');
}
btn1.addEventListener('click', kaart_draaien);

// Kaart terugdraaien naar de voorkant.
function kaart_terug_draaien() {
  voorkant.classList.remove('kaart_draaien_1');
  achterkant.classList.remove('kaart_draaien_2');
}
btn2.addEventListener('click', kaart_terug_draaien);

