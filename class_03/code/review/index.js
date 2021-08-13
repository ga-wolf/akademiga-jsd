// Arrays

const emptyArr = [];

const data = [
  "String", // Index 0
  1, // Index 1
  null, // Index 2
  undefined, // Index 3
  [], // Index 4
  {}, // Index 5
];

data[0] = "STRING";

const letters = ["b", "c"];

letters.push("d", "e", "f", "g");
letters.pop();

letters.unshift("a");
letters.shift();

let tweets = [
  "My First Tweet",
  "My Second Tweet",
  "My Third Tweet",
  "My Fourth Tweet",
];

// A loop that goes through an array is called an iterator
// Starting Point: 0
// Ending Condition: < 3
// Step: += 1

for (let i = 0; i < tweets.length; i += 1) {
  let currentTweet = tweets[i];
  console.log(currentTweet);
}

// Objects
// Unordered structure comprised of key-value pairs

let emptyObj = {};

let course = {
  name: "JavaScript Development",
  teacher: "Jack",
  assistants: ["Nicholas", "Izzue"],
  numOfHours: 60,
};

course.name = "JSD";
course.topics = ["JS", "React", "APIs", "AJAX"];

for (let i = 0; i < course.topics.length; i += 1) {
  let currentTopic = course.topics[i];
  console.log(currentTopic);
}

let blog = [
  { title: "Blog Heading One", content: "Lorem ipsum", author: "Tilak" },
  { title: "Blog Heading Two", content: "Lorem ipsum", author: "Shafiq" },
  { title: "Blog Heading Three", content: "Lorem ipsum", author: "Nurain" },
  { title: "Blog Heading Four", content: "Lorem ipsum", author: "Veemelia" },
];

for (let i = 0; i < blog.length; i += 1) {
  let post = blog[i];
  let message = "<p>" + post.title + " was written by " + post.author + "</p>";
  document.body.innerHTML += message;
}

// Function

// Function Declaration
function speak() {
  console.log("Speaking...");
}

// Function Call-Site
speak();

function greet(name) {
  console.log("Hello " + name + "!");
}

greet("Jane");
greet("Jacques");
greet("Bill");

function divide(x, y) {
  let result = x / y;
  return result;
}

let divideByTwoPlusTen = divide(10, 2) + 10;
console.log(divideByTwoPlusTen);
