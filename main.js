// ##Write and Test the following challenges using Mocha and Chai.
//
// * Create a class named Muppet that has a constructor that takes a name and age.
// * Create a subclass of Muppet called Frog that has a color attribute.
// * Frogs speak by saying "Ribbit Ribbit"
// * verify the properties: Such as a frog named Kirmet that is green
// * verify frogs speak correctly and muppets speak correctly
//
class Muppet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  class Frog {
    this.color = color;
  }
}
var speak = function (event){
  if (this.name === "Muppet") {
    console.log = "Ribbit Ribbit"
  } else {console.log = "I am not a Muppet"}
}
class Frog extends Muppet {
  this.color = green;
}

//Below is the test case. Above is most likely the wrong fuction.

it("Muppets Speak", function(){
  //Given
  var piggy = Muppet("Miss Piggy", 1);
  //When
  var wordsSpoken = piggy.speak();
  //Then
  expect(wordsSpoken).to.equal("");

})

//
// Write a function called sum() that returns the sum of 2 numbers
// continue with divide(), multiply() and subtract()

//
// Write a function called summation() that returns the sum of all numbers in an array of numbers
//
// Write a function sum_recursive() that sums all numbers in the provided list of lists (of lists of lists)


//
// Write a function Greatest Common Denominator named gcd() using Euclides algorithm that returns an integer
//
// Write a function that takes a string that replaces all occurrence of a number character [0...9] to be `1337`
//
// ####Hard Mode
// Write your own shuffle([]) using this Algorithm: https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
//
// ####Epic Mode
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
// Do not use division in your solution.
