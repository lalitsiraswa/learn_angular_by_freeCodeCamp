// function with optional parameter.
function add(num1: number, num2: number, num3?: number): number {
  return num3 ? num1 + num2 + num3 : num1 + num2;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));

// function with required parameter.
const sub = (num1: number, num2: number, num3 = 2): number =>
  num1 - num2 - num3;
console.log(sub(4, 5));
console.log(sub(2, 4, 6));

const multi = function (num1: number, num2: number): number {
  return num1 * num2;
};
console.log(multi(4, 5));
