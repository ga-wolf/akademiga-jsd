// let animal = "Orca";
// let book = "Sapiens";

// let myInstrument = "Guitar";
// myInstrument = "Piano";

// const favouriteNumber = 42;

// var computer = "Mac";
// computer = "Windows";

// // Comparison Operators

// 4 == 4; // true
// "a" == "a"; // true
// 5 == "5"; // true - because of type coercion

// 5 === 5; // true
// "b" === "b"; // true
// 27 === "27"; // false

// 5 != 4; // true
// "Hello" != "HELLO"; // true
// 15 != 15; // false

// 11 !== 13; // true
// "Salam" !== "salam"; // true
// 14 !== 14; // false
// 27 !== "27"; // true

// 5 < 10; // true
// 12 < 9; // false
// 11 < 11; // false

// 15 >= 13; // true
// 28 >= 28; // true
// 16 >= 94; // false

// if (4 === 4) {
//   console.log("Math's seems to be working");
// }

// IF myName is Wolf
// ELSE IF myName is Izzue OR myName is Nicholas
// ELSE

let myName = "Wong";

if (myName === "Wolf") {
  console.log("You are a teacher");
} else if (myName === "Izzue" || myName === "Nicholas") {
  console.log("You are a teaching assistant");
} else {
  console.log("You are a student");
}

// const loggedIn = true;

// if (loggedIn === true) {
//   console.log("You can visit this site");
// } else {
//   console.log("You will have to login first");
// }

// let number = 5;

// // IF the number is greater than 0
// //   Log "The number is positive"
// // ELSE
// //   Log "The number is negative"

// if (number > 0) {
//   console.log("The number is positive");
// } else if (number === 5) {
//   console.log("The number is 5");
// } else {
//   console.log("The number is negative");
// }

// LOGICAL OPERATORS
// && - AND

let validCreditCardDetails = true;
let balance = 120;
let itemCost = 45;

// validCreditCardDetails must be true
// AND
// the balance must be over or equal to the itemCost

let canPurchase = validCreditCardDetails === true && balance >= itemCost;

if (canPurchase) {
  console.log("You can purchase this item!");
} else {
  console.log("You can't buy this");
}

let correctEmail = true;
let correctPassword = true;

// IF correctEmail is true AND correctPassword is true
//   Log "You are logged in now"
// ELSE
//   Log "Your email or password was incorrect"

if (correctEmail && correctPassword) {
  console.log("You are logged in now");
} else {
  console.log("Your email or password was incorrect");
}

let lang = "Rust";

let isFrontEnd = lang === "HTML" || lang === "CSS" || lang === "JS";

if (isFrontEnd) {
  console.log("You are talking about a front-end language");
} else {
  console.log("You are talking about a back-end language");
}

let hasAccount = true;

if (!hasAccount) {
  console.log("You can create an account");
} else {
  console.log("You already have an account");
}

let count = 0;

while (count <= 5) {
  console.log(count);
  count += 1;
}

// I want to count from 3 to 0

let n = 3;

while (n >= 0) {
  console.log("N: " + n);
  n -= 1;
}

// Count from 4 to 1
// Starting Point: 4
// Ending condition: >= 1
// Step: -1

for (let i = 4; i >= 1; i -= 1) {
  console.log("The current value is " + i);
}

// Count from -3 to -11
// Starting Point: -3
// Ending Condition: >= -11
// Step: -1

for (let j = -3; j >= -11; j -= 1) {
  console.log(j);
}

// Count every third number from 1 to 17
for (let k = 1; k <= 17; k += 3) {
  console.log("K: " + k);
}

let todos = ["Learn HTML", "Learn CSS", "Learn JS"];

for (let index = 0; index <= 2; index += 1) {
  let currentTodo = todos[index];
  console.log(currentTodo);
}
