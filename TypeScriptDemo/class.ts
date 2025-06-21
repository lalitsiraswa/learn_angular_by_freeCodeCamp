// either undefined or ! for the erro: Property 'name' has no initializer and is not definitely assigned in the constructor.
// In typescript you can only have either default constructor or parameterized constructor, but not both.
// In typescript Multiple constructor implementations are not allowed.
// When using constructor we don't need ! or undefined.
// By-default all the member variables are public.
// protected members are only accessible either inside the class or child class, these are not accessible through the object.
class Employee {
  #id: number; // private member variable.
  protected name: string;
  address: string;
  //   constructor() {}
  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}.`;
  }
}

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }
  getNameWithAddress(): string {
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
