let crew = [
  {
    id: 1,
    name: "Andy",
    role: "Commander",
    isEVAEligible: true,
    priority: 3,
  },
  {
    id: 2,
    name: "Bart",
    role: "Pilot",
    isEVAEligible: false,
    priority: 8,
  },
  {
    id: 6,
    name: "Felix",
    role: "Navigator",
    isEVAEligible: true,
    priority: 6,
  },
  {
    id: 4,
    name: "Diego",
    role: "Scientist",
    isEVAEligible: false,
    priority: 1,
  },
  {
    id: 5,
    name: "Elise",
    role: "Medic",
    isEVAEligible: true,
    priority: 7,
  },
  {
    id: 3,
    name: "Caroline",
    role: "Engineer",
    isEVAEligible: true,
    priority: 4,
  },
  {
    id: 7,
    name: "Gertrude",
    role: "Communications",
    isEVAEligible: false,
    priority: 4,
  },
  {
    id: 8,
    name: "Hank",
    role: "Mechanic",
    isEVAEligible: true,
    priority: 2,
  },
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

console.log(crew);

// // Outer loop: controls how many passes we make
// for (let i = 0; i < crew.length - 1; i++) {
//   console.log(`i: ${i}`);
//   // Inner loop: compares neighboring items
//   for (let j = 0; j < crew.length - 1 - i; j++) {
//     // If current member has lower priority than next, swap
//     if (crew[j].priority < crew[j + 1].priority) {
//       // Using a temp variable for the swap
//       console.log(`j: ${j}`);
//       const temp = crew[j];
//       crew[j] = crew[j + 1];
//       crew[j + 1] = temp;
//     }
//   }
// }

// bubble sort
// iteration loop
iterations: for (let i = 0; i < crew.length - 1; i++) {
  // items loop
  console.log(`i: ${i}`);
  comparingItToNeighbours: for (let j = 0; j < crew.length - 1 - i; j++) {
    // if j < j + 1
    console.log(`j: ${j}`);
    if (crew[j].priority < crew[j + 1].priority) {
      // swap j with j + 1, and vice versa
      let delta = crew[j + 1];
      crew[j + 1] = crew[j];
      crew[j] = delta;
    }
  }
}

console.log(crew);
