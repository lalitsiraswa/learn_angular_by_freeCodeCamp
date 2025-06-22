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
let users = [
    { id: 101, name: "ABC", email: "abc@gmail.com" },
    { id: 102, name: "DEF", email: "def@gmail.com" },
    { id: 103, name: "GHI", email: "ghi@gmail.com" },
];
let [, user2, user3] = users;
console.log(user2);
console.log(user3);
