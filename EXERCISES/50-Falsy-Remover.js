// In this lab you will create a function that removes all falsy values from an array.
// Falsy values in JavaScript are `false`, `null`, `0`, `""`, `undefined`, and `NaN`.

function bouncer(arr) {
  let trueArr = [...arr];

  if (arr.length === 0) {
    return [];
  }

  for (let i = 0; i < trueArr.length; i++) {
    const element = trueArr[i];
    if (!element) {
      trueArr.splice(i, 1);
    }
    if (element === null) {
      trueArr.splice(i, 1);
    }
    if (element === 0) {
      trueArr.splice(i, 1);
    }
    if (element === "") {
      trueArr.splice(i, 1);
    }
    if (element === undefined) {
      trueArr.splice(i, 1);
    }
    if (typeof element === "number" && isNaN(element)) {
      trueArr.splice(i, 1);
    }
  }

  return trueArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
console.log(bouncer([]));
