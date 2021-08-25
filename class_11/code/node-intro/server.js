const express = require("express"); // npm install --save express

let app = express(); // Create a new server-side application

// When a request comes in:
// - A path (anything after the domain name and before a ? or a #)
// - An HTTP method (GET, POST, PUT, PATCH, DELETE)

// HTTP Method: GET
// Path: /
app.get("/", function (req, res) {
  res.json({
    message: "This is the root path!",
    success: true,
  });
});

app.get("/hello", function (req, res) {
  console.log("A request was received");
  res.json({
    message: "A request came to /hello",
    success: true,
  });
});

app.get("/random", function (req, res) {
  let number = Math.random();
  res.json({
    message: `Your random number is ${number}`,
    success: true,
  });
});

app.get("/c/:colour", function (req, res) {
  let colour = req.params.colour;
  res.json({
    message: `Your colour is ${colour}`,
  });
});

// If I go to http://localhost:3000/rest/v2/name/COUNTRYNAME
// I want to see {message: "You want to see data about the country ____"}
app.get("/rest/v2/name/:country", function (req, res) {
  // Get some information from the database
  // Send that data back
  res.json({
    message: `You want to see data about the country ${req.params.country}`,
  });
});

// Create a new server accessible on port 3000
//   We can access it on localhost:3000
app.listen(3000, function () {
  console.log("The server started");
});
