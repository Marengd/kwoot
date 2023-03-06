// VARS
const routerView = document.getElementById("router-view");


// LOGIC
function loadPage(page) {
  let path = `./pages/${page}.html`;

  fetch(path)
    .then(response => response.text())
    .then(html => routerView.innerHTML = html);
}

// LOGIC
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

// Event Listeners
window.addEventListener("hashchange", onRouteChanged);