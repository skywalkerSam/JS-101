// in this lab you will test a specific property of each object in an array to see if it always has a truthy value or not.

function truthCheck(collection, pre) {
  const propVals = [];

  collection.forEach((element) => {
    propVals.push(element[pre]);
  });

  if (propVals.length === propVals.filter(Boolean).length) {
    return true;
  } else {
    return false;
  }
}

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot",
  ),
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name",
  ),
);

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role",
  ),
);

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number",
  ),
);

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "caught",
  ),
);

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number",
  ),
);
