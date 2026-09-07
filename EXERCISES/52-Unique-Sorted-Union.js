function uniteUnique(arr1, arr2, ...args) {
  const arrays = [arr1, arr2];
  const uniqueValues = [];

  for (const arr of args) {
    arrays.push(arr);
  }

  arrayLoop: for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    elementLoop: for (let z = 0; z < array.length; z++) {
      const element = array[z];
      if (uniqueValues.includes(element)) {
        continue;
      }
      uniqueValues.push(element);
    }
  }
  return uniqueValues;
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5])); // [1, 2, 4, 3, 5]
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // [1, 3, 2, 5, 4]
