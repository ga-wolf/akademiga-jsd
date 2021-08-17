let user = {
  firstName: "Jacques",
  lastName: "Cousteau",
  sayHi: function () {
    console.log("Hello!");
  },
  greet: function (name) {
    let message = `Hello, ${name}`;
    console.log(message);
  },
};

user.sayHi();
user.greet("Ananda");

console.clear();

function receiveCallback(cb) {
  cb(); // Run the function that was received as a parameter
}

function myFirstCallback() {
  console.log("The callback was run");
}

receiveCallback(myFirstCallback);

console.clear();

function delay(cb, time) {
  let timeInMS = time * 1000;
  setTimeout(cb, timeInMS);
}

function animate() {
  console.log("Animate was called");
}

// delay(animate, 2.5);

// console.clear();

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i += 1) {
    let currentItem = arr[i];
    callback(currentItem);
  }
}

let letters = ["a", "b", "c"];

function processLetter(letter) {
  let message = `${letter} is the current item`;
  console.log(message);
}

forEach(letters, processLetter);

let random = true;

forEach([1, 2, 3, 4, 5], function (num) {
  let msg = `${num} multiplied by 5 is ${num * 5}`;
  console.log(msg);
});

let todos = ["Learn about JS", "Learn about APIs", "Learn about React"];

function showTodo(todo) {
  document.body.innerHTML += `<p>${todo}</p>`;
}

forEach(todos, showTodo);

console.clear();

let global = "GLOBAL";

function createScope() {
  const local = "LOCAL";

  if (2 === 2) {
    const veryLocal = "VERY LOCAL";
  }

  function createAnotherScope() {
    const veryVeryLocal = "VERY VERY LOCAL";
  }

  createAnotherScope();
}

createScope();

console.clear();

function createGame() {
  let score = 0;

  return function scorePoint() {
    score += 1;
    console.log(score);
  };
}

let scoreGoal = createGame();
scoreGoal();

function createBank() {
  let balance = 0;
  function deposit(myr) {
    balance += myr;
  }
  function withdraw(myr) {
    balance -= myr;
  }
  function showBalance() {
    let msg = `Your current balance is ${balance}`;
    console.log(msg);
  }
  function deleteAccount() {
    console.log("Your account has been deleted");
  }
  return {
    deposit: deposit,
    withdraw: withdraw,
    showBalance: showBalance,
    deleteAccount: deleteAccount,
  };
}

let bank = createBank(); // Store the return value of createBank in bank
bank.deposit(100);
bank.withdraw(30);
bank.showBalance();
bank.deleteAccount(); // MAKE THIS WORK!!!

console.clear();

(function () {
  let hiddenData = "OH MY GOSH, I CAN'T HAVE THIS SEEN";
  console.log("This is an IIFE");
})();

console.clear();

// function add(...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i += 1) {
//     let currentNum = nums[i];
//     sum += currentNum;
//   }
//   console.log(sum);
// }

function add(...nums) {
  let sum = 0;
  forEach(nums, function (n) {
    sum += n;
  });
  console.log(sum);
}

add(4, 5, 6);

console.clear();

function createGreeting(prefix) {
  return function (name) {
    let msg = `${prefix} ${name}!`;
    console.log(msg);
  };
}

let hi = createGreeting("Hi");
let hello = createGreeting("Hello");
let selamatPetang = createGreeting("Selamat Petang");

hi("Aqilah");
hello("Kevin");
selamatPetang("Alias");
