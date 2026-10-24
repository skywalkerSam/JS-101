// in this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

function smallestCommons(arrOfTwoNums) {
  if (arrOfTwoNums[0] === 0 || arrOfTwoNums[1] === 0) {
    return 0;
  }

  let largeNum;
  let smallNum;
  if (arrOfTwoNums[0] < arrOfTwoNums[1]) {
    smallNum = arrOfTwoNums[0];
    largeNum = arrOfTwoNums[1];
  } else {
    largeNum = arrOfTwoNums[0];
    smallNum = arrOfTwoNums[1];
  }

  const nums = [];
  for (let i = smallNum; i <= largeNum; i++) {
    nums.push(i);
  }

  
}

// console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
// console.log(smallestCommons([1, 13]));
// console.log(smallestCommons([23, 18]));




/** Computational Barrier
 * 
 * function smallestCommons(arrOfTwoNums) {
  if (arrOfTwoNums[0] === 0 || arrOfTwoNums[1] === 0) {
    return 0;
  }

  let largeNum;
  let smallNum;
  if (arrOfTwoNums[0] < arrOfTwoNums[1]) {
    smallNum = arrOfTwoNums[0];
    largeNum = arrOfTwoNums[1];
  } else {
    largeNum = arrOfTwoNums[0];
    smallNum = arrOfTwoNums[1];
  }

  const nums = [];
  for (let i = smallNum; i <= largeNum; i++) {
    nums.push(i);
  }

  const multiples = [];
  for (let n = 0; n < nums.length; n++) {
    const num = nums[n];

    const multiplesOfNum = [];
    for (let x = 1; x <= 10000; x++) {
      multiplesOfNum.push(num * x);
    }
    multiples.push(multiplesOfNum);
  }

  //   console.log(nums, multiples);

  let lcms = [];
  elementLoop: for (let i = 0; i < multiples[0].length; i++) {
    const element = multiples[0][i];

    let checks = [];
    arrLoop: for (let a = 1; a < multiples.length; a++) {
      const arr = multiples[a];
      if (arr.includes(element)) {
        checks.push(true);
      } else {
        checks.push(false);
      }
    }

    if (checks.filter(Boolean).length === checks.length) {
      lcms.push(element);
    } else {
      continue;
    }
  }

  console.log(lcms)
  return lcms[0];
}
 */