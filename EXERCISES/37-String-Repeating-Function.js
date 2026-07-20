/**
 * In this lab, you will create a function that repeats a given string a specific number of times. For the purpose of this lab, do not use the built-in .repeat() method.
 */

function repeatStringNumTimes(str, repeat) {
  if (repeat <= 0) {
    return "";
  }

  let repeatedStr = str;
  for (let i = 0; i < repeat - 1; i++) {
    repeatedStr += str;
  }

//   console.log(repeatedStr);
  return repeatedStr;
}

repeatStringNumTimes("*", 3);
repeatStringNumTimes("abc", 3);
