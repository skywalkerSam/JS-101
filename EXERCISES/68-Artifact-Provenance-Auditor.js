// in this workshop, you are going to build an artifact provenance auditor. You'll store museum artifacts in an object and write functions to look them up, tag them, move them between galleries, and summarize their history.

const collection = {
  101: {
    title: "Golden Mask",
    category: "Ceremonial",
    curator: { id: 201, name: "Earl Sinclair" },
    locations: [
      { gallery: "Hall A", year: 2020 },
      { gallery: "Hall C", year: 2024 },
    ],
    tags: ["gold", "egypt"],
    onDisplay: true,
  },
  102: {
    title: "Bronze Tablet",
    category: "Inscription",
    curator: {
      id: 202,
      name: "Robert Sinclair",
    },
    locations: [{ gallery: "Archive Wing", year: 2019 }],
    tags: ["bronze", "writing"],
    onDisplay: false,
  },
};

// console.log(collection[101].title);
// console.log(collection[101].curator.name);

function getArtifactTitle(id) {
  const artifact = collection[id];

  if (artifact?.title === undefined) {
    return "Artifact not found";
  } else {
    return artifact.title;
  }
}

// console.log(getArtifactTitle(102));
// console.log(getArtifactTitle(100));

function addTag(id, tag) {
  if (!collection[id]?.tags.includes(tag)) {
    collection[id]?.tags.push(tag);
  }
}

// console.log(addTag(101, "royal"));
// console.log(collection[101].tags);

function moveArtifact(id, gallery, year) {
  if (Object.hasOwn(collection, id)) {
    collection[id].locations.push({ gallery: gallery, year: year });
  }
}

console.log(moveArtifact(102, "Hall B", 2026));
console.log(collection[102].locations);

function toggleDisplayStatus(id) {
  if (Object.hasOwn(collection, id)) {
    collection[id].onDisplay = !collection[id].onDisplay;
  }
}

// console.log(collection[102].onDisplay);
// toggleDisplayStatus(102);
// console.log(collection[102].onDisplay);

function updateCurator(id, name) {
  if (Object.hasOwn(collection, id)) {
    collection[id].curator.name = name;
  }
}

// console.log(collection[101].curator.name)
updateCurator(101, "Fran Sinclair")
// console.log(collection[101].curator.name)

function buildSummary(id) {
  if (!Object.hasOwn(collection, id)) {
    return "Artifact not found";
  }

  const artifact = collection[id];
  const currentLocation = artifact.locations[artifact.locations.length - 1];

  return `${artifact.title} \nCategory: ${artifact.category} \nCurator: ${artifact.curator.name} \nCurrent Gallery: ${currentLocation.gallery} \nOn Display: ${artifact.onDisplay}`;
}

console.log(buildSummary(101));
