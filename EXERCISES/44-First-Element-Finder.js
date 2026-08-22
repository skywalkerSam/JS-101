// In this lab, you will create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test").

function findElement(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element, isTrue)
    if (fn(element)) {
      return element;
    }
  }
  return undefined;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
);
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
);
console.log(
  findElement(["hello", "world", "javascript"], function (str) {
    return str.length > 5;
  }),
);
