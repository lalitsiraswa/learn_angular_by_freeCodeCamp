"use strict";
let fname = "lalit";
let lname = "siraswa";
let fullname = fname.toUpperCase().concat(lname.toUpperCase());
console.log(fullname);
let age;
age = 25;
let dob = "25";
let date_of_birth = parseInt(dob);
let isValid = true;
console.log("isValid: ", isValid);
let empList;
empList = ["ramu", "rakesh", "anuj", "dharmesh"];
let numList;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numList.filter((num) => num % 2 == 0).forEach((num) => console.log(num));
console.log(numList.find((num) => num === 11));
console.log("Sum Of numList : ", numList.reduce((acc, num) => acc + num, 5)); // 5 represents the initial value, default is 0;
let red = 0 /* Colors.Red */;
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
console.log(swapNumbs);
let random;
random = "string";
random = 10;
