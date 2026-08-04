/** In this lab, you will build a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.
 *
 * A palindrome is a word that reads the same forwards and backwards. For example, "racecar" and "level" are palindromes, but "hello" is not.
 *
 * A phrase is a sequence of consecutive words. For example, in ["the", "cat", "sat", "the", "cat"], the phrase "the cat" (a sequence of 2 words) appears at positions 0 and 3.
 *
 */

/** You should define a function named `isPalindrome` that takes a `word` string as its argument. 
 * 
 * it should return `true` if the word reads the same forwards and backwards (case-insensitive), and `false` otherwise.
 */
function isPalindrome(word) {
  let result = false;

  if (word.toLowerCase() === word.toLowerCase().split("").reverse().join("")) {
    result = true;
  }

  return result;
}

/** You should define a function named `findPalindromeBreaks` that takes a `words` array as its argument. 
 * 
 * it should return an array of indices of words that are not palindromes. 
 * 
 * it should return an empty array if the input is empty.
 */
function findPalindromeBreaks(words) {
  let result = [];

  if (words.length === 0) {
    return result;
  }

  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if (!isPalindrome(element)) {
      result.push(i);
    }
  }

  return result;
}

/** You should define a function named `findRepeatedPhrases` that takes a `words` array and a `phraseLength` number as arguments. it should return an array of all start indices where a sequence of `phraseLength` consecutive words appears more than once in the array.
 * 
 * including the index of the first occurrence. 
 * 
 * it should return an empty array if phraseLength is greater than or equal to the length of words. 
 * 
 * Overlapping sequences should also be counted.
 */
function findRepeatedPhrases(words, phraseLength) {
  let result = [];

  if (phraseLength >= words.length) {
    return result;
  }

  return result;
}

/** You should define a function named analyzeTexts that takes a texts array and a phraseLength number as arguments. It should process each element of texts (each an array of words) and return an array of objects, each with repeatedPhrases and palindromeBreaks properties. It should return an empty array if texts is empty.
 */
function analyzeTexts(texts, phraseLength) {
  let result = [];

  if (texts.length === 0) {
    return result;
  }

  return result;
}

console.log(isPalindrome("racecar"));
console.log(findPalindromeBreaks(["hello", "level", "abyss", "racecar", "Drive"]));
console.log(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2))
// console.log(analyzeTexts(["the", "cat", "sat", "the", "cat"], 2))
