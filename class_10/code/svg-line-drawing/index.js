let pathLength = 1894.0460205078125;

function onMouseMove(event) {
  // How far in pixels is the mouse from the left hand side of the screen
  let x = event.clientX;
  // Get the percentage of how far the mouse is across
  let percentage = x / window.innerWidth;

  let path = document.querySelector("path");
  // The path length should be based on where your mouse is
  path.style.strokeDashoffset = pathLength * percentage;
}

window.addEventListener("mousemove", onMouseMove);

// let body = document.body;

// function onBodyClick() {
//   let path = document.querySelector("path");
//   path.style.strokeDashoffset = 0;
// }

// body.addEventListener("click", onBodyClick);
