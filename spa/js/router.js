// const routerView = document.getElementById("router-view");

// function loadPage(page) {  
//    fetch(`./pages/${page}.html`)
//      .then(response => response.text())
//      .then(html => routerView.innerHTML = html);
//  }
 
// function onRouteChanged() {
//    const hash = window.location.hash;
 
//    if (!(routerView instanceof HTMLElement)) {
//      throw new ReferenceError("No router view element available for rendering");
//    }
   
//       switch (hash) {    
//           case "#about":
//           loadPage("about");
//           break;

//           case "#generator":
//           loadPage("generator");
//           break;
       
//           default:
//           loadPage("404");
//           break;
//    }
// }
 
 
//  window.addEventListener("hashchange", onRouteChanged);










// const routerView = document.getElementById("router-view");

// function loadPage(page) {
//   fetch(`./pages/${page}.html`)
//     .then(response => response.text())
//     .then(html => routerView.innerHTML = html);
// }

// function onRouteChanged() {
//   const hash = window.location.hash;

//   if (!(routerView instanceof HTMLElement)) {
//     throw new ReferenceError("No router view element available for rendering");
//   }

//   switch (hash) {    
//     case "#about":
//       loadPage("about");
//       break;

//     case "#generator":
//       loadPage("generator");
//       break;

//     default:
//       loadPage("404");
//       break;
//   }

//   // Update the browser's history
//   history.pushState(null, null, hash);
// }

// window.addEventListener("hashchange", onRouteChanged);










const routerView = document.getElementById("router-view");

function loadPage(page) {
  let path = `./pages/${page}.html`;
  if (page === "default") {
    path = "./index.html";
  }
  fetch(path)
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

    case "#generator":
      loadPage("generator");
      break;

    default:
      loadPage("default");
      break;
  }

  // Update the browser's history
  history.pushState(null, null, hash);
}

window.addEventListener("hashchange", onRouteChanged);

// Is het wel juist om default loadpage te verwijzen naar index.html?
// Of moet ik wel een 404 hebben?