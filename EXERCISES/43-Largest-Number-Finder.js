// In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

function largestOfAll(arr) {
  let thelargestNumFromEachSubArr = [];
  arrayLoop: for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let currentLargestNum = -10000000;
    subArrayLoop: for (let z = 0; z < arr[i].length; z++) {
      const subElement = arr[i][z];
      if (subElement > currentLargestNum) {
        currentLargestNum = subElement;
      }
    }
    thelargestNumFromEachSubArr.push(currentLargestNum);
  }
  return thelargestNumFromEachSubArr;
}

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
