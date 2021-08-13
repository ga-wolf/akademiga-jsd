// // // let heading = document.querySelector("h1");

// // // let headingStyles = getComputedStyle(heading);
// // // let currentFontSize = headingStyles.fontSize;

// // // heading.style.fontSize = "100px";
// // // heading.style.color = "red";
// // // heading.style.textDecoration = "underline";
// // // heading.style.fontStyle = "italic";
// // // heading.style.textTransform = "uppercase";

// // // // Accessing Information about DOM Nodes
// // // heading.innerHTML = "This was changed through JS";

// // // let subheading = document.querySelector("h2");

// // // subheading.innerText = "<u>Changed</u> by JS";
// // // // Appending Text or HTML to an element
// // // subheading.innerHTML += "!!!!!!!!";

// // // // Prepending Text or HTML to an element
// // // subheading.innerHTML = "BEFORE" + subheading.innerHTML;

// // // let paragraph = document.querySelector("p");
// // // let listItem = document.querySelector("li");
// // // let anchor = document.querySelector(".container a");

// // // let currentHref = anchor.getAttribute("href");

// // // let currentId = anchor.getAttribute("id");

// // // anchor.setAttribute("href", "https://google.com");
// // // anchor.setAttribute("id", "google");

// // // anchor.innerText = "Google!";

// // // let allListItems = document.querySelectorAll("li");
// // // let allParagraphs = document.querySelectorAll("p");

// // // // Use an access method to select a DOM node and save it in a variable
// // // let image = document.querySelector("img");
// // // // Manipulate that DOM Node
// // // let currentSrc = image.getAttribute("src");

// // // image.style.width = "200px";
// // // image.style.border = "10px solid blue";
// // // // Change the image's width to be "200px"
// // // // Change the image's border to be "10px solid blue"

// // // let input = document.querySelector("input");
// // // let currentValue = input.value;
// // // console.log(currentValue);

// // // let myParagraph = document.createElement("p");
// // // myParagraph.innerText = "CREATED WITH JS";

// // // // Adds myParagraph to the end of the body tag
// // // // document.body.appendChild(myParagraph);

// // // document.body.insertBefore(myParagraph, heading);

// // // // Create an h3
// // // // Set the text to be "Also created by JS"
// // // // Set the following styles:
// // // //   font-size to be "30px"
// // // //   color to be "green"
// // // // Add it before the h2 on the page

// // // const headingThree = document.createElement("h3");
// // // headingThree.innerText = "Also created by JS";
// // // headingThree.style.fontSize = "30px";
// // // headingThree.style.color = "green";
// // // // Add headingThree before the subheading
// // // document.body.insertBefore(headingThree, subheading);

// // function onClick() {
// //   console.log("The page was clicked");
// // }

// // let heading = document.querySelector("h1");

// // heading.addEventListener("click", onClick);

// // let subHeading = document.querySelector("h2");

// // function subHeadingClicked() {
// //   console.log("The h2 was clicked");
// // }

// // subHeading.addEventListener("click", subHeadingClicked);

// // // Select the input DOM node using querySelector
// // let input = document.querySelector("input");

// // // Create a function that logs "The user typed something"
// // function onKeyPress() {
// //   let currentVal = input.value;
// //   console.log(currentVal);
// //   // Every time this function runs, log out the current value of the input
// // }

// // // When the "keypress" event takes place on the input DOM Node, run the function
// // input.addEventListener("keyup", onKeyPress);

// // let img = document.querySelector("img");

// // function onMouseMove() {
// //   console.log("The mouse is moving");
// // }

// // // Create the event listener - bind a DOM node, an event type and a callback together
// // img.addEventListener("mousemove", onMouseMove);

// // // When the first list item is clicked
// // // Call a function that logs out "The List Item was clicked"

// // let firstItem = document.querySelector("li");

// // function itemClicked() {
// //   console.log("The list item was clicked");
// // }

// // firstItem.addEventListener("click", itemClicked);

// function delayedFunction() {
//   console.log("This function should be delayed");
// }

// setTimeout(delayedFunction, 2000); // Call delayedFunction in 2 seconds time

// function regularlyCalledFunction() {
//   console.log("This should be called every three seconds");
// }

// setInterval(regularlyCalledFunction, 3000);

// let img = document.querySelector("img");
// img.style.width = "150px";

// function increaseWidth() {
//   let styles = getComputedStyle(img); // Get all styles applied to img
//   let currentWidth = parseInt(styles.width); // Get the width as a number
//   let newWidth = currentWidth + 5;
//   img.style.width = newWidth + "px";

//   setTimeout(increaseWidth, 20);
// }

// increaseWidth();

let img = document.querySelector("img");

function onMouseMove(event) {
  const x = event.clientX;
  const y = event.clientY;
  img.style.left = x + "px";
  img.style.top = y + "px";
}

document.body.addEventListener("mousemove", onMouseMove);
