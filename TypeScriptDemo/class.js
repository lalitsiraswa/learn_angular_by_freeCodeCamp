"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
// either undefined or ! for the erro: Property 'name' has no initializer and is not definitely assigned in the constructor.
// In typescript you can only have either default constructor or parameterized constructor, but not both.
// In typescript Multiple constructor implementations are not allowed.
// When using constructor we don't need ! or undefined.
// By-default all the member variables are public.
// protected members are only accessible either inside the class or child class, these are not accessible through the object.
class Employee {
    //   constructor() {}
    constructor(id, name, address) {
        _Employee_id.set(this, void 0); // private member variable.
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}.`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager and stays at ${this.address}.`;
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
console.log(john.getNameWithAddress());
let mike = new Manager(2, "Mike", "Church Street");
console.log(mike);
console.log(mike.getNameWithAddress());
