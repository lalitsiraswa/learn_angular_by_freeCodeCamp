"use strict";
// either undefined or ! for the erro: Property 'name' has no initializer and is not definitely assigned in the constructor.
class Employee {
}
let john = new Employee();
console.log(john);
john.id = 1;
john.name = "John";
john.address = "Highway 71";
console.log(john);
