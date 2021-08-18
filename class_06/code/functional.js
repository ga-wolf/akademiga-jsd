let letters = ["a", "b", "c"];

function processLetter(item, index) {
  console.log(item, index);
}

letters.forEach(processLetter);

let todoItems = [
  "Learn Functional Array Methods",
  "Learn the keyword this",
  "Learn the class keyword",
  "Learn about the terminal",
];

function displayTodo(todo, index) {
  // Create a new paragraph tag
  let paragraph = document.createElement("p");
  // Set the paragraph's styles
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "16px";
  // Set the paragraph's innerHTML to the todo
  paragraph.innerHTML = `${index + 1}: ${todo}`;
  // Append the paragraph to the end of the body tag
  document.body.appendChild(paragraph);
}

todoItems.forEach(displayTodo);

let topics = [
  "JS",
  "React",
  "Terminal",
  "Git",
  "GitHub",
  "AJAX", // The way that we access APIs using JavaScript
  "APIs",
];

let ul = document.querySelector("ul");

function displayTopic(topic) {
  let li = document.createElement("li");
  li.style.fontSize = "18px";
  li.style.textDecoration = "underline";
  li.innerHTML = topic;
  ul.appendChild(li);
}

topics.forEach(displayTopic);

console.clear();

// Filter

let nums = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  let evenlyDivisible = num % 2 === 0;
  return evenlyDivisible;
}

let evenNumbers = nums.filter(isEven);

console.log(evenNumbers);
let myLetters = ["a", "B", "c", "D", "e", "F"];

// Using the .filter method
//  Remove all lowercased strings in the myLetters array

function isStringUppercased(str) {
  return str === str.toUpperCase();
}

let uppercased = myLetters.filter(isStringUppercased);

console.log(uppercased);

console.clear();

// .map
// Transform each item in an array

let alpha = ["a", "b", "c", "d", "e"];

function toUpper(str) {
  let uppercasedStr = str.toUpperCase();
  return uppercasedStr;
}

let uppercasedAlpha = alpha.map(toUpper);

let scores = [0.8, 0.75, 0.93, 0.45, 0.67, 0.9];

function toPercent(num) {
  let percentage = `${num * 100}%`;
  return percentage;
}

let percentages = scores.map(toPercent);

console.log(percentages);

console.clear();

let prices = [100, 65, 340, 52, 10];

function myrToAud(price) {
  return price * 0.32;
}

let ausPrices = prices.map(myrToAud);

console.log(prices);
console.log(ausPrices);

console.clear();
let myNumbers = [1, 2, 3, 4, 5, 6];

function addTogether(total, current) {
  return total + current;
}

let mySum = myNumbers.reduce(addTogether, 0);

console.log(mySum);

let moreTodos = ["Learn forEach", "Learn filter", "Learn map", "Learn reduce"];

function turnTodoIntoHTML(totalString, currentString) {
  return `${totalString}<p>${currentString}</p>`;
}

let html = moreTodos.reduce(turnTodoIntoHTML, "");
document.body.innerHTML += html;

// Iterate through moreTodos
// Essentially combine them into a single string
// That looks like this
// <p>Learn forEach</p><p>Learn filter</p>...
// After you have done that, append that string to the body
// Your starting value will need to be an empty string
