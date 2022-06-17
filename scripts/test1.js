function Dog(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;

  this.bark = function () {};
}
class Cat {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}
function testObjects() {
  // object literal
  let dog1 = {
    name: "jim",
    age: 3,
    color: "brown",
  };
  let dog2 = {
    name: "lim",
    age: 2,
    color: "brown",
  };

  console.log(dog1, dog2);
}
//object constructor
let dog3 = new Dog("dan", 3, "green");
let dog4 = new Dog("lola", 7, "pink");

//classes
let cat1 = new Cat("drMeow", 4, "grey");
let cat2 = new Cat("msNAils", 2, "orange");

function runTests() {
  console.log("-----TEST------");
  testObjects();
}
