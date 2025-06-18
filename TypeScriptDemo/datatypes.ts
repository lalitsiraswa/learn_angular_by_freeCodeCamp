let fname: string = "lalit";
let lname: string = "siraswa";

let fullname: string = fname.toUpperCase().concat(lname.toUpperCase());
console.log(fullname);

let age: number;
age = 25;

let dob: string = "25";
let date_of_birth: number = parseInt(dob);

let isValid: boolean = true;
console.log("isValid: ", isValid);

let empList: string[];
empList = ["ramu", "rakesh", "anuj", "dharmesh"];
let numList: Array<number>;
numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numList.filter((num) => num % 2 == 0).forEach((num) => console.log(num));
console.log(numList.find((num) => num === 11));
console.log(
  "Sum Of numList : ",
  numList.reduce((acc, num) => acc + num, 5)
); // 5 represents the initial value, default is 0;
