// Global Binding - Default, set to window

console.log(this);

function hello() {
  console.log(this);
}

hello();

// Event Binding - Set to the target of the event

let heading = document.querySelector("h1");

function onHeadingClick() {
  console.log(this);
}

heading.addEventListener("click", onHeadingClick);

let allListItems = document.querySelectorAll("li");

function onItemClick() {
  console.log(this);
  this.style.color = "red";
  // this refers to the element that was interacted with
}

for (let i = 0; i < allListItems.length; i += 1) {
  let currentLI = allListItems[i];
  currentLI.addEventListener("click", onItemClick);
}

// Implicit Binding (method binding)

let person = {
  firstName: "Jacques",
  lastName: "Cousteau",
  speak: function () {
    let fullName = `${this.firstName} ${this.lastName}`;
    console.log(`Hello, I am ${fullName}`);
  },
};

person.speak();

console.clear();

// Explicit Binding

let p = { name: "Maddi" };

function sayHello() {
  let greeting = `${this.name} said hello`;
  console.log(greeting);
}

sayHello.call(p); // Set the keyword this to `p`
sayHello.apply({ name: "Fatin" }); // Set this to the data provided
sayHello.apply({ name: "Tilak" }); // Set this to the data provided

let p2 = { name: "Rodney" };

let rodneysHello = sayHello.bind(p2);
// Create a copy of sayHello where this always refers to p2
rodneysHello(); // Call rodneysHello

console.clear();

// new Binding - If `new` is present, this refers to a new empty object

class Vehicle {
  constructor() {
    // constructor will automatically be run when instances are created
    console.log("A new vehicle was created");
    console.log(this); // By default, this refers to a new empty object
  }
}

let v = new Vehicle();
let v2 = new Vehicle();
let v3 = new Vehicle();
// Create an instance of the vehicle class
// The keyword this refers to a new empty object
// It will run the constructor method on Vehicle
