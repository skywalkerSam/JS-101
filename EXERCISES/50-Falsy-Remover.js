// In this lab you will create a function that removes all falsy values from an array.
// Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

function bouncer(arr) {
  // let trueArr = [...arr];

  if (arr.length === 0) {
    return [];
  }

  // for (let i = 0; i < trueArr.length; i++) {
  //   const element = trueArr[i];
  //   if (!element) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`false removed: ${spliced}\n`);
  //   }
  //   if (element === null) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`null removed: ${spliced}\n`);
  //   }
  //   if (element === 0) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`0 removed: ${spliced}\n`);
  //   }
  //   if (element === "") {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`"" removed: ${spliced}\n`);
  //   }
  //   if (element === undefined) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`undefined removed: ${spliced}\n`);
  //   }
  //   if (typeof element === "number" && isNaN(element)) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`NaN removed: ${spliced}\n`);
  //   }
  // }
  // console.log(`\nloop 1: ${trueArr}`)

  // for (let i = 0; i < trueArr.length; i++) {
  //   const element = trueArr[i];
  //   if (!element) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`false removed: ${spliced}\n`);
  //   }
  //   if (element === null) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`null removed: ${spliced}\n`);
  //   }
  //   if (element === 0) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`0 removed: ${spliced}\n`);
  //   }
  //   if (element === "") {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`"" removed: ${spliced}\n`);
  //   }
  //   if (element === undefined) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`undefined removed: ${spliced}\n`);
  //   }
  //   if (typeof element === "number" && isNaN(element)) {
  //     let spliced = trueArr.splice(i, 1);
  //     console.log(`NaN removed: ${spliced}\n`);
  //   }
  // }
  // console.log(`loop 2: ${trueArr}\n`)

  // return trueArr;

  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));
