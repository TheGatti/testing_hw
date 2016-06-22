"use strict";

var chai = require("chai"),
  expect = chai.expect,
  assert = chai.assert;

class Muppet {
  constuctor(name, age){
    this.name = name;
    this.age = age;
  }
}
class Frog extends Muppet{
  constructor(name,age,color){
    super(name,age);
    this.color = color;
  }
  speak(){
    return "Ribbit Ribbit"
  }
}

describe("Muppet", function (){
  describe("Frog", function (){

    it("speaks like a frog",function(){
      var kermit = new Frog();
      expect(kermit.speak()).to.equal("Ribbit Ribbit")
    })
  })
});
