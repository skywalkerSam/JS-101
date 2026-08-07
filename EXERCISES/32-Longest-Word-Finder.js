/**
 * In this lab, you will build a function that returns the length of the longest word in the provided sentence.
 *
 * For example, in the sentence "The quick brown fox jumped over the lazy dog", the longest word is "jumped", which has a length of 6.
 */

function findLongestWordLength(str) {
  // split the words
  let splitedStr = str.split(" ");
  let theLongest = 0;

  // find the longest word
  splitedStr.forEach((word) => {
    if (word.length > theLongest) {
      theLongest = word.length;
    }
  });
  //   for (let word of splitedStr) {
  //     if (word.length > theLongest) {
  //       theLongest = word.length;
  //     }
  //   }

  // return the length of the longest word in the string.
  return theLongest;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);

console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("Googling do a barrel roll"));
console.log(
  findLongestWordLength(
    "What is the average airspeed velocity of an unladen swallow",
  ),
);
console.log(
  findLongestWordLength(
    "What if we try a super-long word such as otorhinolaryngology",
  ),
);
