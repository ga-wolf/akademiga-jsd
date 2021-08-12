// WHAT NUMBER'S BIGGER

// Create two variables
//   numOne
//   numTwo

function compareNumbers(numOne, numTwo) {
  if (numOne > numTwo) {
    console.log("numOne is bigger");
  } else if (numOne < numTwo) {
    console.log("numTwo is bigger");
  } else {
    console.log("numOne and numTwo are even");
  }
}

compareNumbers(1, 40);
compareNumbers(45, 40);

function drive(name, age) {
  if (age < 16) {
    console.log(name + ", you can't drive yet");
  } else {
    console.log(name + ", you can drive");
  }
}

drive("Roger", 13);
drive("Jane", 44);

// Log every fourth number from 8 to 41
// Starting Point: 8
// Ending Condition: < 42
// Step: += 4

for (let num = 8; num < 42; num += 4) {
  console.log(num);
}

// FIZZBUZZ

for (let i = 0; i <= 100; i += 1) {
  if ((i % 3 === 0) & (i % 5 === 0)) {
    console.log("FizzBuzz", i);
  } else if (i % 5 === 0) {
    console.log("Buzz", i);
  } else if (i % 3 === 0) {
    console.log("Fizz", i);
  } else {
    console.log(i);
  }
}
