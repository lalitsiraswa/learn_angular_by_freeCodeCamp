export interface User {
  id: number;
  name: string;
  age?: number; // '?' makes this has an optional property.
  email: string;
}

interface Employees extends User {
  salary: number;
}

let user: User = { id: 1, name: "Robert", email: "robert@gmail.com" };
console.log(user);

let employee: Employees = {
  id: 101,
  name: "Mark",
  email: "mark@gmail.com",
  salary: 100000,
};
console.log(employee);

export interface Login {
  login(): User;
}

// Object Destructuring
let { name, email } = user;
let { name: userName, email: userEmail } = user;
console.log(name);
console.log(email);
console.log(userName);
console.log(userEmail);
