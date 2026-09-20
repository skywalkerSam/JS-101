// In this lab, you will build a simple string inverter that reverses the characters of a given string.

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
