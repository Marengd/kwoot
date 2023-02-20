const routerView = document.getElementById("router-view");

function loadPage(page) {  
   fetch(`./docs/pages/${page}.html`)
     .then(response => response.text())
     .then(html => routerView.innerHTML = html);
 }
 
function onRouteChanged() {
   const hash = window.location.hash;
 
   if (!(routerView instanceof HTMLElement)) {
     throw new ReferenceError("No router view element available for rendering");
   }
   
      switch (hash) {       
         case "#about":
           loadPage("about");
           break;
       
         default:
           loadPage("404");
           break;
   }
}
 
 
 window.addEventListener("hashchange", onRouteChanged);