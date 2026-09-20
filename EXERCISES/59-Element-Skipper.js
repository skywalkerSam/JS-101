/** In this lab you will create a function that skips elements in an array until it finds an acceptable one based on a specific test function.
 *
 * For example, for an array like [1, 1, 1, 2, 1, 1, 1] and a test function function(n) {return n === 2}, the first element that is acceptable for this is the one at index 3, so all the elements before that need to be discarded, and the output should be the remaining elements [2, 1, 1, 1].
 *
 */

function dropElements(arr, func) {
  const filteredArr = [...arr];
  for (let i = 0; i < filteredArr.length; i) {
    const element = filteredArr[i];

    const funcOut = func(element);
    // console.log(element, funcOut);
    if (funcOut) {
      break;
    }
    filteredArr.splice(i, 1);
  }

  return filteredArr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
);

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
);
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
);
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
console.log(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
);
console.log(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
);
