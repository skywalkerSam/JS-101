let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // check for firstname
  let contactFound;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      contactFound = contacts[i];
    }
  }

  if (!contactFound) {
    return "No such contact";
  }

  // check for the prop
  if (Object.hasOwn(contactFound, prop)) {
    return contactFound[prop];
  } else {
    return "No such property";
  }
}

console.log(lookUpProfile("Akira", "lastName"));
