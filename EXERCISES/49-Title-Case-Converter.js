// In this lab you will create a function that converts a string to title case. Title case means that the first letter of each word is capitalized and the rest of the word is in lower case.

function titleCase(str) {
  let titleCased = str.split(" ");
  for (let i = 0; i < titleCased.length; i++) {
    const element = titleCased[i];
    titleCased[i] =
      element.slice(0, 1).toUpperCase() +
      element.slice(1, element.length).toLowerCase();
  }
  return titleCased.join(" ");
}

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("fuck my life"));
