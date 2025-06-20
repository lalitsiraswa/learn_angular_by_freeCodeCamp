"use strict";
// function with optional parameter.
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
// function with required parameter.
const sub = (num1, num2, num3 = 2) => num1 - num2 - num3;
console.log(sub(4, 5));
console.log(sub(2, 4, 6));
const multi = function (num1, num2) {
    return num1 * num2;
};
console.log(multi(4, 5));
// function with rest parameters.
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [3, 4, 5, 6];
console.log(add2(1, 2, ...numbers));
console.log(add2(2, 4, ...[1, 2, 3, 4]));
