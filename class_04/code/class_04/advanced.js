function pageReady() {
  console.log("The DOM has been loaded");

  let heading = document.querySelector("h1");

  function onHeadingClick(event) {
    let clientX = event.clientX;
    console.log(event);
  }

  heading.addEventListener("click", onHeadingClick);

  let img = document.querySelector("img");
  img.style.position = "absolute";
  img.style.top = 0;
  img.style.left = 0;
  img.style.transition = "all 0.1s";

  function onMouseMove(event) {
    let clientX = event.clientX;
    let clientY = event.clientY;
    img.style.left = `${clientX}px`;
    img.style.top = `${clientY}px`;
  }

  // window.addEventListener("mousemove", onMouseMove);

  let input = document.querySelector("input");

  function onKeyPress(event) {
    let key = event.key;
    let message = `${key} was pressed`;
    console.log(message);
  }

  input.addEventListener("keyup", onKeyPress);

  let anchor = document.querySelector("a");

  function onAnchorClick(event) {
    event.preventDefault();
    console.log("The a tag was clicked");
  }

  anchor.addEventListener("click", onAnchorClick);

  let myImage = document.querySelector("img");

  function onRightClick(event) {
    event.preventDefault();
    console.log("Right click");
  }

  myImage.addEventListener("contextmenu", onRightClick);
}

document.addEventListener("DOMContentLoaded", pageReady);
