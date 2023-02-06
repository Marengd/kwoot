const hoofd = document.querySelector('main section figure img');

let timer;

document.addEventListener("DOMContentLoaded", function() {
  timer = setTimeout(raakt_geïrriteerd, 10000);
});

hoofd.addEventListener("mouseover", function() {
  clearTimeout(timer);
  this.src = "./assets/images/Mijn_Geweldige_Blije_Hoofd.png";
});

hoofd.addEventListener("mouseout", function() {
  this.src = "./assets/images/Mijn_Geweldige_Hoofd.png";
});

function raakt_geïrriteerd() {
  hoofd.src = "./assets/images/Mijn_Geweldige_Boze_Hoofd.png";
}