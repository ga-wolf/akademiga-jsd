function addEventHandlers() {
  let heading = document.querySelector("h1");
  heading.addEventListener("click", function () {
    console.log("The heading was clicked");
  });
}

module.exports = addEventHandlers;
