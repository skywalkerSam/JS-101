// in this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

function smallestCommons(arrOfTwoNums) {
    
}

// console.log(smallestCommons([1, 5]));
// console.log(smallestCommons([5, 1]));
// console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
// console.log(smallestCommons([23, 18]));

/** Computational Barrier: Brute force attempt failed!
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

/** Day2: Same as multiplying them alltogether.)
 * 
 * if (arrOfTwoNums[0] === 0 || arrOfTwoNums[1] === 0) {
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

  let lastResult = nums;
  const divisors = [];

  deltaLoop: for (let x = 10; x > 0; x--) {
    console.log(`x: ${x}`);
    divisorLoop: for (let i = 0; i < nums.length; i++) {
      const divisor = nums[i];
      const results = [];
      dividentLoop: for (let l = 0; l < lastResult.length; l++) {
        const divident = lastResult[l];
        if (divident % divisor === 0) {
          results.push(divident / divisor);
        } else {
          results.push(divident);
        }
      }
      console.log(`divisor, results: ${divisor} ${results}`);
      if (results.toString() !== lastResult.toString()) {
        divisors.push(divisor);
        lastResult = results;
      }
    }
  }
  return lastResult.concat(divisors).reduce((acc, curr) => acc * curr, 1);
 */
