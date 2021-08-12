// // // // // let emptyArray = [];

// // // // // let arrayWithDataTypes = ["String", undefined, 42, true];

// // // // // console.log(arrayWithDataTypes);

// // // // // let alpha = ["A", "B", "C"];

// // // // // console.log(alpha[3]); // undefined

// // // // // alpha[0] = "a";
// // // // // alpha[1] = "b";
// // // // // alpha[2] = "c";

// // // // // console.log(alpha);

// // // // const instruments = [
// // // //   "The Great Stalacpipe Organ",
// // // //   "Stylophone",
// // // //   "Ondes Martenot",
// // // //   "Sharpischord",
// // // //   "Hydraulophone",
// // // //   "Pyrophone",
// // // //   "Guitar",
// // // //   "Oud",
// // // // ];

// // // // // console.log(instruments[3]);

// // // // // instruments[5] = "Keyboard";

// // // // // console.log(instruments);

// // // // // const length = instruments.length;

// // // // // // Access the last element using the length!
// // // // // console.log(instruments[instruments.length - 1]);

// // // // const ordinals = ["Zeroeth", "First", "Second", "Third", "Fourth"];

// // // // // Use a for loop
// // // // // What is my starting point: index = 0
// // // // // What is my ending condition: index < 4
// // // // // What is my step: index += 1

// // // // for (let index = 0; index < 4; index += 1) {
// // // //   let currentOrdinal = ordinals[index];
// // // //   console.log(currentOrdinal, index);
// // // // }

// // // // // Loop through the instruments array - log out each instrument
// // // // // Starting Point: i = 0
// // // // // Ending Condition: i < instruments.length
// // // // // Step: i += 1

// // // // for (let i = 0; i < instruments.length; i += 1) {
// // // //   let currentInstrument = instruments[i];
// // // //   console.log(currentInstrument);
// // // // }

// // // // // Array Methods
// // // // //
// // // // // Add to the end: .push
// // // // // Remove from the end: .pop
// // // // // Add to the start: .unshift
// // // // // Remove from the start: shift

// // // // let myNumbers = [3, 4];
// // // // myNumbers.push(5); // Add the number 5 to the back of the array
// // // // myNumbers.unshift(2); // Add 2 to the start of the array
// // // // myNumbers.pop(); // Remove the last item
// // // // myNumbers.shift(); // Remove the first item

// // // // console.log(myNumbers);

// // // // Objects

// // // let emptyObj = {};

// // // let course = {
// // //   topic: "JavaScript",
// // // };

// // // // Change the topic's value to be "JavaScript Development"
// // // course.topic = "JavaScript Development";

// // // // Add a key called teacher to course and set it to Jack
// // // course.teacher = "Jack";
// // // // Add a key called assistants to course
// // // //   Set it to an array with Nicholas and Izzue in it
// // // course.assistants = ["Nicholas", "Izzue"];

// // // console.log(course);

// // // const bookSeries = {
// // //   name: "In Search of Lost Time",
// // //   author: "Marcel Proust",
// // //   rating: 5,
// // //   books: [
// // //     "Swann's Way",
// // //     "In the Shadow of Young Girls in Flower",
// // //     "The Guermantes Way",
// // //     "Sodom and Gomorrah",
// // //     "The Prisoner",
// // //     "The Fugitive",
// // //     "Time Regained",
// // //   ],
// // // };

// // // let name = bookSeries.name;
// // // let rating = bookSeries.rating;
// // // let author = bookSeries.author;

// // // console.log(name, rating, author);

// // // // Log out the whole bookSeries books array
// // // console.log(bookSeries.books);
// // // // Log out the fourth book in that array
// // // console.log(bookSeries.books[3]);
// // // console.log(bookSeries.thisDoesntExist);

// // // // Change the bookSeries rating to be 10
// // // bookSeries.rating = 10;
// // // // Log bookSeries
// // // console.log(bookSeries);

// // const explorer = {
// //   firstName: "Jacques",
// //   lastName: "Cousteau",
// //   birth: {
// //     day: 11,
// //     month: 6,
// //     year: 1910,
// //   },
// // };

// // console.log(explorer.firstName);
// // console.log(explorer.lastName);

// // // Go into explorer, get the birth key and then get the day out and log
// // console.log(explorer.birth.day);

// const marxFamily = [
//   { name: "Groucho", birthYear: 1890 },
//   { name: "Harpo", birthYear: 1888 },
//   { name: "Chico", birthYear: 1887 },
//   { name: "Zeppo", birthYear: 1901 },
//   { name: "Gummo", birthYear: 1893 },
// ];

// for (let i = 0; i < 5; i += 1) {
//   let currentBrother = marxFamily[i];
//   let brotherName = currentBrother.name;
//   let birthYear = currentBrother.birthYear;
//   console.log(brotherName, birthYear);
// }

// Function Declaration
function sayHello() {
  console.log("Hello!");
}

// Function Call-site (Run the function!)
// sayHello();

function talk() {
  console.log("I am talking!");
}

// talk();

function add() {
  let result = 4 + 4;
  console.log(result);
}

// add();

function greet(name) {
  let greeting = "Hello " + name;
  console.log(greeting);
}

greet("Syed");
greet("Aravin");
greet("Zahed");

// Create a function called exclaim
//   It receives a parameter - called message
//   It logs out message + "!"
// e.g. If I provided "hi", it should log "hi!"

function exclaim(message) {
  console.log(message.toUpperCase() + "!");
}

exclaim("hi");
exclaim("I need to drink more water");

function subtract(numOne, numTwo) {
  let res = numOne - numTwo;
  console.log(res);
}

subtract(5, 3);
subtract(10, 4);

// Create a function that multiplies two numbers
// Call it multiply
// It should receive two parameters - x and y
// Multiply x and y
// Log the result

function multiply(x, y) {
  return x * y;
}

multiply(5, 4);
multiply(12, 12);

console.log(multiply(4, 3) + 10); // 22

function logFirstItem(arr) {
  // Log the first item in `arr`
  console.log("logFirstItem was called", arr[0]);
}

logFirstItem([1, 2, 3]);
logFirstItem(["a", "b", "c"]);

function uppercase(str) {
  const result = str.toUpperCase();
  return result;
}

let capitals = uppercase("this is a string");
console.log(capitals);

function speak() {
  return "No.";
  console.log("Hi there!");
}

speak();
