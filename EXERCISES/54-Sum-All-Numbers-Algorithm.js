// In this lab, you will need to design a sum all numbers algorithm.

function sumAll(arrOfTwoNums) {
  let theSum = 0;
  let theSmallNum =
    arrOfTwoNums[0] > arrOfTwoNums[1] ? arrOfTwoNums[1] : arrOfTwoNums[0];
  let theLargeNum =
    arrOfTwoNums[0] > arrOfTwoNums[1] ? arrOfTwoNums[0] : arrOfTwoNums[1];

  for (let i = theSmallNum; i <= theLargeNum; i++) {
    // console.log(i)
    theSum += i;
  }
  return theSum;
}

console.log(sumAll([1,4]))
console.log(sumAll([4,1]))
