/** The Chunky Monkey Algorithm
 *
 * Write a function that takes an array as first argument and a number as second argument.
 *
 * The function should split the array into smaller arrays of length equal to the second argument and returns them as a two-dimensional array.
 *
 */

function chunkArrayInGroups(arr, num) {
  let chunkedArr = [];
  // for loop
  for (let i = 0; i < arr.length; i += num) {
    let chunk = arr.slice(i, i + num);
    chunkedArr.push(chunk);
  }
  console.log(chunkedArr);
  return chunkedArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
