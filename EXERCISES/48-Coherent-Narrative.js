// In this lab, you will restore a coherent narrative from a corrupted array of story fragments.

const shuffledFragments = [
  {
    id: 15,
    text: "and, after a time, passed the place where the Hare was sleeping.",
  },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  {
    id: 11,
    text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare,",
  },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  {
    id: 1,
    text: "A Hare was making fun of the Tortoise one day for being so slow.",
  },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  {
    id: 6,
    text: "The Hare was much amused at the idea of running a race with the Tortoise,",
  },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(fragments) {
  let compactedFragments = [];

  for (let i = 0; i < fragments.length; i++) {
    const element = fragments[i];
    if (element === undefined) {
      console.log("[COMPACTED]");
      continue;
    }
    compactedFragments.push(element);
  }
  return compactedFragments;
}

// console.log(compactFragments([{ id: 1, text: "Hello" }, undefined]));
// console.log(compactFragments([{ id: 1, text: "Hello" }, ,]));
// console.log(
//   compactFragments([
//     { id: 1, text: "Hello" },
//     { id: 2, text: "World" },
//   ]),
// );
// console.log(
//   compactFragments([
//     { id: 1, text: "Hello" },
//     undefined,
//     { id: 2, text: "World" },
//   ]),
// );

let compactedShuffledFragments = compactFragments(shuffledFragments);
console.log(compactedShuffledFragments);

function sortFragments(compactedFragments) {
  let sortedFragments = [...compactedFragments];
  iterationLoop: for (let i = 0; i < compactedFragments.length - 1; i++) {
    // console.log(`i: ${i}`);
    sortingLoop: for (let z = 0; z < compactedFragments.length - 1 - i; z++) {
      // console.log(`z: ${z}`);
      const element = sortedFragments[z];
      const nextElement = sortedFragments[z + 1];
      if (nextElement.id < element.id) {
        let box = sortedFragments[z];
        sortedFragments[z] = sortedFragments[z + 1];
        sortedFragments[z + 1] = box;
      }
    }
  }
  return sortedFragments;
}

// console.log(
//   sortFragments([
//     { id: 30, text: "c" },
//     { id: 10, text: "a" },
//     { id: 10, text: "dup" },
//     { id: 20, text: "b" },
//   ]),
// );

let sortedFragments = sortFragments(compactedShuffledFragments);
console.log(sortedFragments);

function dedupeFragments(sortedFragments) {
  let setOfFragments = [];
  let unsortedObj = {};

  for (let i = 0; i < sortedFragments.length; i++) {
    const element = sortedFragments[i];
    if (!Object.hasOwn(unsortedObj, element.id)) {
      unsortedObj[element.id] = [];
    }
    unsortedObj[element.id].push(element);
  }

  for (const id in unsortedObj) {
    if (!Object.hasOwn(unsortedObj, id)) continue;

    const element = unsortedObj[id];
    if (element.length > 1) {
      console.log("[DEDUPED]".repeat(element.length - 1));
    }
    setOfFragments.push(element[0]);
  }

  return setOfFragments;
}

// console.log(
//   dedupeFragments([
//     { id: 1, text: "first" },
//     { id: 1, text: "dup" },
//     { id: 2, text: "second" },
//   ]),
// );
// console.log(
//   dedupeFragments([
//     { id: 1, text: "a" },
//     { id: 1, text: "dup" },
//     { id: 2, text: "b" },
//     { id: 2, text: "dup" },
//     { id: 3, text: "c" },
//   ]),
// );
// console.log(
//   dedupeFragments([
//     { id: 1, text: "a" },
//     { id: 2, text: "b" },
//     { id: 2, text: "dup" },
//   ]),
// );

// console.log(
//   dedupeFragments([
//     { id: 1, text: "a" },
//     { id: 2, text: "b" },
//     { id: 2, text: "dup" },
//     { id: 2, text: "dup" },
//     { id: 2, text: "dup" },
//   ]),
// );

let dedupedFragments = dedupeFragments(sortedFragments);
console.log(dedupedFragments);

function fillMissingFragments(dedupedFragments) {
  let filledFragments = [...dedupedFragments];

  for (let i = 0; i < dedupedFragments.length; i++) {
    const element = filledFragments[i];
    const nextElement = filledFragments[i + 1];
    if (nextElement.id - element.id > 1) {
      console.log("[FILLED]");
      filledFragments.splice(i + 1, 0, { id: element.id + 1, text: "[...]" });
    }
  }

  return filledFragments;
}

// console.log(
//   fillMissingFragments([
//     { id: 1, text: "a" },
//     { id: 3, text: "c" },
//   ]),
// );

let filledFragments = fillMissingFragments(dedupedFragments);
console.log(filledFragments);

function assembleStory(filledFragments) {
  let theStory = "";

  for (let i = 0; i < filledFragments.length; i++) {
    const element = filledFragments[i];
    theStory += element.text + "\n";
  }

  theStory = theStory.slice(0, theStory.length - 1);

  return theStory;
}

// console.log(
//   assembleStory([
//     { id: 1, text: "Hello" },
//     { id: 2, text: "World" },
//   ]),
// );

console.log(assembleStory(filledFragments));
