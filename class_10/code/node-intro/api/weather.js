// Get the code that is exported from math.js
//  in the previous directory
const maths = require("../math");
const translate = require("../translation/malay");

function fetchWeather() {
  // Call the translate function here
  translate();
  maths.add(5, 6);
  console.log("Fetching weather...");
}

// Make fetchWeather available to other files
//   Meaning they will be able to require it
module.exports = fetchWeather;
