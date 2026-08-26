function pyramid(char, rows, isUpsideDown) {
  let theStructure = "\n";
  let theChars = [];

  for (let i = 1; i < rows * 2; i += 2) {
    theChars.push(i);
  }

  if (isUpsideDown) {
    let theReversedChars = theChars.reverse();
    for (let i = 1; i <= rows; i++) {
      let row = " ".repeat(i - 1) + char.repeat(theReversedChars[i - 1]) + "\n";
      theStructure += row;
    }

    return theStructure;
  }

  for (let i = 1; i <= rows; i++) {
    let row = " ".repeat(rows - i) + char.repeat(theChars[i - 1]) + "\n";
    theStructure += row;
  }

  return theStructure;
}

console.log(pyramid("*", 9, false));
console.log(pyramid("*", 9, true));
