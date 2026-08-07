function getVowelCount(sentence) {
  let numOfVowels = 0;
  for (let char of sentence.toLowerCase()) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      numOfVowels++;
    }
  }
  return numOfVowels;
}

let vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  let theConsonants = "bcdfghjklmnpqrstvwxyz";
  let numOfCons = 0;
  for (let char of sentence.toLowerCase()) {
    if (theConsonants.includes(char)) {
      numOfCons++;
    }
  }
  return numOfCons;
}

let consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence) {
  let theNonPunctuations = "abcdefghijklmnopqrstuvwxyz ";
  let numOfPuncts = 0;
  for (let char of sentence.toLowerCase()) {
    if (!theNonPunctuations.includes(char)) {
      numOfPuncts++;
    }
  }
  return numOfPuncts;
}

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence) {
  if (sentence.trim() === "") {
    return 0;
  }
  let theWords = sentence.split(" ");
  return theWords.length;
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
