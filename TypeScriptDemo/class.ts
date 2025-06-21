import { Login, User } from "./interface";

// either undefined or ! for the erro: Property 'name' has no initializer and is not definitely assigned in the constructor.
// In typescript you can only have either default constructor or parameterized constructor, but not both.
// In typescript Multiple constructor implementations are not allowed.
// When using constructor we don't need ! or undefined.
// By-default all the member variables are public.
// protected members are only accessible either inside the class or child class, these are not accessible through the object.
interface Address {
  street: string;
  city: string;
  state: string;
  pin: string;
}
class Employee implements Login {
  #id: number; // private member variable.
  protected name: string;
  address: Address;
  //   constructor() {}
  constructor(id: number, name: string, address: Address) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  login(): User {
    return { id: 101, name: "john", email: "john@gmail.com" };
  }
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address.city}.`;
  }
  static getEmployeeCount(): number {
    return 50;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: Address) {
    super(id, name, address);
  }
  getNameWithAddress(): string {
    return `${this.name} is a manager and stays at ${this.address.city}.`;
  }
}

// We can't have both the constructors.
// let john = new Employee();
// console.log(john);
// john.id = 1;
// john.name = "John";
// john.address = "Highway 71";
// console.log(john);

let john = new Employee(1, "John", {
  street: "ABC",
  city: "Bangalore",
  state: " Karnataka",
  pin: "560076",
});
console.log(john);
console.log(john.getNameWithAddress());

let mike = new Manager(2, "Mike", {
  street: "DEG",
  city: "Bangalore",
  state: " Karnataka",
  pin: "560054",
});
console.log(mike);
console.log(mike.getNameWithAddress());

console.log(Employee.getEmployeeCount());
