"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { id: 1, name: "Robert", email: "robert@gmail.com" };
console.log(user);
let employee = {
    id: 101,
    name: "Mark",
    email: "mark@gmail.com",
    salary: 100000,
};
console.log(employee);
// Object Destructuring
let { name, email } = user;
let { name: userName, email: userEmail } = user;
console.log(name);
console.log(email);
console.log(userName);
console.log(userEmail);
