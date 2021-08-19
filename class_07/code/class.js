// Set up the blueprint
// We are describing what `MyFirstClass can do`
class MyFirstClass {}

// Create an instance
let c = new MyFirstClass();

console.log(c);

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.alive = true;
  }
  greet() {
    let greeting = `Hi, I am ${this.name}!`;
    console.log(greeting);
  }
}

let p = new Person("Douglas", "doug@ga.co");
p.greet();

console.log(p);

// Create a class called Post
// Whenever an instance of Post is created:
//   Log "A post was published"
//   Add published: true to `this`
// Create an instance!

class Post {
  constructor(title, author) {
    console.log("A post was published");
    this.published = true;
    this.title = title;
    this.author = author;
  }
  display() {
    let msg = `${this.title} was written by ${this.author}`;
    console.log(msg);
  }
}

let post = new Post("My Blog Post", "Anonymous");
post.display();

class Animal {
  constructor() {
    this.isAnimal = true;
    console.log("An animal was born!");
  }
  eat() {
    console.log("An animal is eating...");
  }
}

class Dog extends Animal {
  constructor(breed) {
    super(); // Run Animal's constructor
    this.breed = breed;
    console.log("A dog was born!");
  }
  bark() {
    console.log("A dog is barking...");
  }
}

let dog = new Dog("Belgian Shepherd - Groenendael");
dog.eat();
dog.bark();

// Create a new class called Orca that extends Animal
// Instances of the Orca class should also be able to swim
// Add an instance method call swim
//   That logs "Roaming the big blue"

class Orca extends Animal {
  constructor() {
    super(); // Run Animal's constructor - inherit Animal stuff
    console.log("An orca was born. Yay for Jack!");
  }
  swim() {
    console.log("Roaming the big blue");
  }
}

let o = new Orca();
o.swim();
o.eat();
