// Compare two arrays and return a new array with any items found in only one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  const diff1 = arr1.filter((element) => !arr2.includes(element));
  const diff2 = arr2.filter((element) => !arr1.includes(element));
  return diff1.concat(diff2);
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]),
);
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(
  diffArray(
    ["andesite", "grass", "dirt", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(diffArray([], ["apple", "banana"]));
console.log(diffArray([], []));
