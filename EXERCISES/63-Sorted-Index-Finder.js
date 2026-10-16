// In this lab you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

function getIndexToIns(arr, num) {
  if (arr.length === 0) {
    return 0;
  }

  arr.sort((a, b) => a - b);

  if (arr[arr.length - 1] < num) {
    return arr.length;
  }

  return arr.findIndex((element) => element >= num);
}

console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 11));
console.log(getIndexToIns([], 5));
