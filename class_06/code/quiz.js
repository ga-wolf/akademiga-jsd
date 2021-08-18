console.log(this);

function logThis() {
  console.log(this);
}

logThis();

console.clear();

let button = document.querySelector("button");
function onButtonClick() {
  console.log(this);
}
button.addEventListener("click", onButtonClick);

let heading = document.querySelector("h1");
function onHeadingClick() {
  console.log(this);
}
heading.addEventListener("click", onHeadingClick);

let waterBottle = {
  brand: "Hydro Flask",
  stars: 5,
  damaged: true,
  quantity: 2,
  drink: function () {
    console.log(this);
  },
};

waterBottle.drink();

let car = {
  brand: "Toyota",
  model: "Landcruiser",
  drive: function () {
    console.log(this.model, this.brand);
  },
};

car.drive();

let person = { name: "Jacques" };

function sayHello() {
  console.log(this);
}

// sayHello.call(person);
// sayHello.apply(person);
let jacquesHello = sayHello.bind(person);
jacquesHello();

class Animal {
  constructor() {
    console.log(this);
  }
}

let wolf = new Animal();
