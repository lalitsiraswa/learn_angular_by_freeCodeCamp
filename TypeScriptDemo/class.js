"use strict";
// either undefined or ! for the erro: Property 'name' has no initializer and is not definitely assigned in the constructor.
// In typescript you can only have either default constructor or parameterized constructor, but not both.
// In typescript Multiple constructor implementations are not allowed.
// When using constructor we don't need ! or undefined.
class Employee {
    //   constructor() {}
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
// We can't have both the constructors.
// let john = new Employee();
// console.log(john);
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
// console.log(john);
let john = new Employee(1, "John", "Highway 71");
console.log(john);
