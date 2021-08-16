// Make this page work!

function pageReady() {
  // Event Listeners
  //   Target DOM Node - h1
  //   Event Type - click
  //   Callback Function - Log out the heading was clicked

  let heading = document.querySelector("h1");

  let eventType = "click";

  function onHeadingClick() {
    console.log("The heading was clicked");
  }

  heading.addEventListener(eventType, onHeadingClick);

  // When the button is clicked, log the button was clicked
  let button = document.querySelector("button");

  function onButtonClick() {
    console.log("The button was clicked");
  }

  button.addEventListener("dblclick", onButtonClick);

  let theme = "light";

  let themeButton = document.querySelector(".theme");

  function themeClick() {
    if (theme === "light") {
      theme = "dark";
      document.body.style.color = "white";
      document.body.style.background = "black";
    } else {
      theme = "light";
      document.body.style.color = "black";
      document.body.style.background = "white";
    }
  }

  themeButton.addEventListener("click", themeClick);

  // Start with a clickCount of 0

  // Anytime the button with the class of click-count is clicked
  //   Increment clickCount by 1
  //   Change the HTML of a p tag to be "Number of clicks: 1"

  let clickCount = 0;
  let clickCountButton = document.querySelector(".click-count");
  let paragraph = document.querySelector("p");

  function showClickCount() {
    let newHTML = `Number of clicks: ${clickCount}`; // Interpolation
    paragraph.innerHTML = newHTML;
  }

  function increment() {
    clickCount += 1;
    showClickCount();
  }
  clickCountButton.addEventListener("click", increment);

  let decrementButton = document.querySelector(".decrement");
  function decrement() {
    clickCount -= 1;
    showClickCount();
  }
  decrementButton.addEventListener("click", decrement);
}

document.addEventListener("DOMContentLoaded", pageReady);
