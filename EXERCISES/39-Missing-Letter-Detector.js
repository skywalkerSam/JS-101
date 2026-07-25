let theAlphabets = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  let youWillBeFound;

  let firstL = str[0];
  let lastL = str[str.length - 1];

  let theOrder = theAlphabets.slice(theAlphabets.indexOf(firstL), theAlphabets.indexOf(lastL) + 1)

  for (let l of theOrder) {
    if (!str.includes(l)) {
        youWillBeFound = l;
    }
  }

  console.log(youWillBeFound);
  return youWillBeFound;
}

fearNotLetter("abce");
fearNotLetter("abcdefghjklmno");
fearNotLetter("stvwx");
fearNotLetter("bcdf");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
