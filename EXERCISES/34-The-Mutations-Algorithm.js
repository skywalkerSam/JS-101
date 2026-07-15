/** The Mutations Algorithm
 *
 * it should return true if the string in the first element of the array contains all of the letters of the string in the second element of the array, and false otherwise.
 *
 */

function mutation(arr) {
  // element[0]
  let theFirstElement = arr[0].toLowerCase();

  // element[1]
  let theSecondElement = arr[1].toLowerCase();

  // element[0] should contain each letter of element[1], may that be in any order
  let theOutput;
  
  for (let letter of theSecondElement) {
    if (theFirstElement.includes(letter)) {
      theOutput = true;
    } else {
      theOutput = false;
      break;
    }
  }

  // console.log(theFirstElement,theSecondElement)
  return theOutput;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["floor", "for"]));

console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
