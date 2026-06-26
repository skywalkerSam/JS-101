const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  if (value.trim() === "") {
    delete records[id][prop];
    return records;
  }

  if (prop !== "tracks" && value.trim() !== "") {
    records[id][prop] = value;
  } else if (
    prop === "tracks" &&
    value.trim() !== "" &&
    records[id].tracks === undefined
  ) {
    records[id].tracks = [value];
  } else if (prop === "tracks" && value.trim() !== "") {
    records[id].tracks.push(value);
  }
  return records;
}

// test 1
updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(recordCollection);

// test 2
updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(recordCollection);

// test 3
updateRecords(recordCollection, 2548, "artist", "");
console.log(recordCollection);

// test 4
updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(recordCollection);

// test 5
updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(recordCollection);

// test 6
updateRecords(recordCollection, 2548, "tracks", "");
console.log(recordCollection);

// test 7
updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(recordCollection);
