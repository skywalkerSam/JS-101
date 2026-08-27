function getAverage(testScores) {
  let scores = 0;
  let totalScore = testScores.length * 100;

  testScores.forEach((element) => {
    scores += element;
  });

  let theAverage = (scores / totalScore) * 100;
  let numOfDecimals = theAverage.toString().split(".")[1].length;

  console.log(numOfDecimals);
  if (numOfDecimals > 3) {
    theAverage = Number(Number.parseFloat(theAverage).toFixed(2));
  }
  return theAverage;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
// console.log(getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]));
console.log(getAverage([10, 20, 30, 40, 55, 65, 75, 83]));
console.log(getAverage([10, 20, 30, 40, 50, 60, 70, 97]));

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}

// console.log(getGrade(100));
// console.log(getGrade(90));
// console.log(getGrade(80));
// console.log(getGrade(70));
// console.log(getGrade(60));
// console.log(getGrade(59));

function hasPassingGrade(score) {
  let theGrade = getGrade(score);
  if (theGrade !== "F") {
    return true;
  }

  return false;
}

// console.log(hasPassingGrade(100));
// console.log(hasPassingGrade(99));
// console.log(hasPassingGrade(89));
// console.log(hasPassingGrade(79));
// console.log(hasPassingGrade(69));
// console.log(hasPassingGrade(59));
// console.log(hasPassingGrade(0));

function studentMsg(scores, score) {
  if (hasPassingGrade(score)) {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(scores)}. Your grade: ${getGrade(score)}. You failed the course.`;
  }
}

// console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
// console.log(studentMsg([12, 22, 32, 42, 52, 62, 72, 92], 85));
// console.log(studentMsg([15, 25, 35, 45, 55, 60, 70, 60], 75));
