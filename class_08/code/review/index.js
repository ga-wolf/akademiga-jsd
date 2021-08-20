// Arrays

let arr = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr.length; i += 1) {
  let letter = arr[i];
}

function logLetter(letter, index) {
  let msg = `#${index}: ${letter}`;
  console.log(msg);
}

arr.forEach(logLetter);

let nums = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 === 0;
  // Predicate functions always return a boolean
}

let evens = nums.filter(isEven);
console.log(evens);

console.clear();

let letters = ["a", "b", "c", "d", "e"];

function toUpper(letter) {
  return letter.toUpperCase();
}

let uppercasedAlphabet = letters.map(toUpper);
console.log(uppercasedAlphabet);

let numbers = [10, 20, 30, 40, 50];

function getSum(totalSum, currentValue) {
  console.log(totalSum, currentValue);
  return totalSum + currentValue;
}

let totalSum = numbers.reduce(getSum, 0);
console.log(totalSum);

let scores = [75, 92, 68, 100, 83];

function addAllScores(allScoresCombined, currentScore) {
  return allScoresCombined + currentScore;
}

let averageScore = scores.reduce(addAllScores, 0) / scores.length;
console.log(averageScore);

console.clear();

let people = [
  ["Nurul", "Ain", [1, 2, 3, 4, 5]],
  ["Izzue", "Eshak", [1, 2, 3, 4, 5]],
  ["Asyikin", "Azhar", [1, 2, 3, 4, 5]],
  ["Nurain", "Kesuma", [1, 2, 3, 4, 5]],
];

for (let i = 0; i < people.length; i += 1) {
  let person = people[i];
  for (let innerIndex = 0; innerIndex < person.length; innerIndex += 1) {
    console.log(person[innerIndex]);
  }
}

console.clear();

let lotto = [
  [19, 18, 88, 81, 7],
  [92, 81, 58, 21, 14],
];

for (let i = 0; i < lotto.length; i += 1) {
  let currentPicks = lotto[i];
  console.log(`#${i + 1} lotto combination`);
  for (let j = 0; j < currentPicks.length; j += 1) {
    let pick = currentPicks[j];
    console.log(`- ${pick}`);
  }
}

console.clear();

lotto.forEach(function (picks, index) {
  console.log(`#${index + 1} lotto numbers`);
  picks.forEach(function (num) {
    console.log(`- ${num}`);
  });
});

console.clear();

let person = {
  firstName: "Jacques",
  lastName: "Cousteau",
  birthday: {
    day: 11,
    month: {
      num: 6,
      name: "June",
    },
    year: 1910,
  },
  speak: function () {
    console.log(`${this.firstName} is speaking...`);
  },
};

let firstName = person.firstName;
let lastName = person.lastName;
person.speak();

let month = person.birthday.month;
console.log(month);

console.table(person);

console.log(person.birthday.month.name);

console.table(letters);

console.clear();

// DOM Access Methods
// DOM Manipulation

let heading = document.querySelector("h1");

heading.style.color = "red";
heading.style.textDecoration = "line-through";

heading.innerHTML = "This was changed by JS";

let newPara = document.createElement("p");
newPara.style.color = "blue";
newPara.style.fontSize = "25px";
newPara.innerHTML = "This was created through JS";

document.body.appendChild(newPara);

// Promises

function executor(resolve, reject) {
  // let successData = { success: true, message: "Woooo" };
  // resolve(successData); // This calls the .then callback function

  let errorData = { success: false, message: "Something went wrong" };
  reject(errorData); // This calls the .catch callback function
}

let myPromise = new Promise(executor);
myPromise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
