// Arrays
// Structural Data Types
// Mutable - they can change
// Ordered and they can be accessed through an index

let arr = [];
let letters = ["a", "b", "c", "d", "e"];

let letterA = letters[0];

letters[0] = "A";

// Objects
// Structural, mutable
// Unordered, access through a key

let course = {
  name: "JSD",
  provider: "GA",
  topics: ["JS", "React", "Node", "Firebase", "APIs"],
  teachingAssistants: ["Nicholas", "Izzue"],
};

console.log(course.name);
console.log(course.topics[1]);
course.topics.splice(2, 1);
console.log(course);

course.provider = "General Assembly";

// Functions
// Structural Data Type
// Reusable chunk of code - subprograms

// Function Declaration
function speak() {
  console.log("Hello");
}

// Function Call-Site
speak();

function greet(name, language) {
  let greeting = null;
  if (language === "english") {
    greeting = "Hello, " + name;
  } else if (language === "malay") {
    greeting = "Selamat Petang, " + name;
  } else {
    greeting = "Bonjour, " + name;
  }
  console.log(greeting);
  // D.R.Y - Don't Repeat Yourself
}

greet("Hidayah", "english");
greet("Kevin", "malay");
greet("Fatin", "malay");
greet("Nurain");

function pleaseSpeak() {
  return "No"; // return is always the last line that runs
  console.log("OH HI");
}

function add(x, y) {
  return x + y;
}

// DOM Selectors
console.clear();

// CSS Selectors
// tagname
// .class
// #id
// parent child

let headingNode = document.querySelector("h1");
console.log(headingNode);

let firstListItem = document.querySelector(".first-list-item");
console.log(firstListItem);

let thirdItem = document.querySelector("#third");
console.log(thirdItem);

let anchor = document.querySelector("p a");

anchor.innerHTML = "THIS WAS CHANGED BY JS";
anchor.style.fontSize = "50px";
anchor.style.color = "papayawhip";
let currentHREF = anchor.getAttribute("href");
console.log(currentHREF);
anchor.setAttribute("href", "SOME OTHER URL");

let allListItems = document.querySelectorAll("li");
console.log(allListItems);

// EVENTS
//   Target - DOM Node
//   Event Type
//   Callback
// Event Listener = target + event type + callback

let target = document.querySelector("h1");

let eventType = "click";

function myCallback() {
  console.log("Something was clicked");
}

target.addEventListener(eventType, myCallback);
