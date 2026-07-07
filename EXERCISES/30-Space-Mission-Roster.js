let squad = [];

let firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3,
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
  // console.log(`Added ${astronaut.name} as ${astronaut.role}`);
}

addCrewMember(squad, firstAstronaut);

let remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  {
    id: 3,
    name: "Caroline",
    role: "Engineer",
    isEVAEligible: true,
    priority: 4,
  },
  {
    id: 4,
    name: "Diego",
    role: "Scientist",
    isEVAEligible: false,
    priority: 1,
  },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  {
    id: 7,
    name: "Gertrude",
    role: "Communications",
    isEVAEligible: false,
    priority: 4,
  },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  {
    id: 9,
    name: "Irene",
    role: "Specialist",
    isEVAEligible: true,
    priority: 5,
  },
  {
    id: 10,
    name: "Joan",
    role: "Technician",
    isEVAEligible: false,
    priority: 1,
  },
];

// remainingCrew.forEach((astronaut) => addCrewMember(squad, astronaut));

// for (let i = 0; i < remainingCrew.length; i++) {
//   addCrewMember(squad, remainingCrew[i]);
// }

for (let astronaut of remainingCrew) {
  addCrewMember(squad, astronaut);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex < 0 ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }
  let updatedCrew = crew.slice();
  // let updatedCrew = [...crew];

  // console.log(updatedCrew);
  updatedCrew[toIndex] = updatedCrew.splice(
    fromIndex,
    1,
    updatedCrew[toIndex],
  )[0];
  // console.log(updatedCrew);

  // updatedCrew.forEach((astronaut) => {
  //   console.log(astronaut.name);
  // });

  // for (let astronaut of updatedCrew) {
  //   console.log(astronaut.name);
  // }

  return updatedCrew;
}

let updatedSquad = swapCrewMembers(squad, 2, 5);
// console.log(updatedSquad);

/** Bubble Sort */
function sortByPriorityDescending(crew) {
  // iteration loop
  iterationLoop: for (let i = 0; i < crew.length - 1; i++) {
    // comparision loop
    comparisonLoop: for (let y = 0; y < crew.length - 1 - i; y++) {
      // condition: sort by priority descending
      if (crew[y].priority < crew[y + 1].priority) {
        // swap values
        crew[y + 1] = crew.splice(y, 1, crew[y + 1])[0];
        // let delta = crew[y];
        // crew[y] = crew[y + 1];
        // crew[y + 1] = delta;
      }
    }
  }
}

// console.log(updatedSquad);
// sortByPriorityDescending(updatedSquad);
// console.log(updatedSquad);

function getEVAReadyCrew(crew) {
  let eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible === true) {
      eligible.push(astronaut);
    }
  }
  sortByPriorityDescending(eligible);
  return eligible;
}

let EVAReadySquad = getEVAReadyCrew(updatedSquad);
// EVAReadySquad.forEach((astronaut) => {
//   console.log(astronaut.name);
// });

// for (let astronaut of EVAReadySquad) {
//   console.log(astronaut.name);
// }

function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }
  let chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }
  return chunks;
}

let partners = chunkCrew(EVAReadySquad, 2);
console.log(partners);
