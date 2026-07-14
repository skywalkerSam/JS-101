/**
 * In this lab, you will create a factorial calculator that takes a number from the user and calculates the factorial of that number.
 *
 * A factorial is the product of an integer and all the integers below it. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
 */

let num = 6;

function factorialCalculator(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
}

let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

// console.log(factorialCalculator(3));
// console.log(factorialCalculator(4));
console.log(factorialCalculator(5));
// console.log(factorialCalculator(6));
console.log(factorialCalculator(7));
console.log(factorialCalculator(21));
