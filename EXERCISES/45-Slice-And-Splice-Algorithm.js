// In this lab, you will need to create an algorithm to merge two arrays.

function frankenSplice(arr1, arr2, index) {
  let theFrankesteinedArr = [...arr2];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    theFrankesteinedArr.splice(index + i, 0, element);
  }
  return theFrankesteinedArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1))
