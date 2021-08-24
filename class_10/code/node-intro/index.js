const hello = require("./sayHello");
// Save the code that is exported from sayHello.js
// into the hello variable in this file

const maths = require("./math");
// Get the data that is exported from math.js
// Save it into the maths variable

const fetchWeather = require("./api/weather");
const translate = require("./translation/malay");

hello("Jane");

maths.add(5, 10);
maths.subtract(25, 1);

fetchWeather();

// Call the translate function
translate("How are you?");
