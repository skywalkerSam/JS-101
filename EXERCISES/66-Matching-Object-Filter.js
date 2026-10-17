// In this lab, you will create a function that filters an array of objects and returns only those objects that match all key-value pairs in a given source object.

function whatIsInAName(arr, srcObj) {
  const srcKey = Object.keys(srcObj);
  const srcVal = Object.values(srcObj);

  //   return arr.filter((obj) =>
  //     srcKey.length === 1
  //       ? obj[srcKey[0]] === srcVal[0]
  //       : obj[srcKey[0]] === srcVal[0] && obj[srcKey[1]] === srcVal[1],
  //   );

  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    if (srcKey.length === 1) {
      if (obj[srcKey[0]] === srcVal[0]) {
        filteredArr.push(obj);
      }
    }
    if (srcKey.length === 2) {
      if (obj[srcKey[0]] === srcVal[0] && obj[srcKey[1]] === srcVal[1]) {
        filteredArr.push(obj);
      }
    }
  }
  return filteredArr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" },
  ),
);
console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  }),
);
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 },
  ),
);
console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 },
  ),
);
