/**
 * in this lab, you will be implementing an array flattening algorithm.
 *
 * Flattening an array means turning a nested array of any depth into a single, one-dimensional array. The process extracts all elements in order, unwrapping only arrays. Other types are left unchanged.
 */

function steamrollArray(nestedArr) {
  const flattenedArr = [];

  loop1: for (let i = 0; i < nestedArr.length; i++) {
    const element = nestedArr[i];
    if (Array.isArray(element)) {
      loop2: for (let x = 0; x < element.length; x++) {
        const nestedElement = element[x];
        if (Array.isArray(nestedElement)) {
          loop3: for (let x = 0; x < nestedElement.length; x++) {
            const deeplyNestedElement = nestedElement[x];
            if (Array.isArray(deeplyNestedElement)) {
              loop4: for (let x = 0; x < deeplyNestedElement.length; x++) {
                const moreDeeplyNestedElement = deeplyNestedElement[x];
                // i give up.)
                flattenedArr.push(moreDeeplyNestedElement);
              }
            } else {
              flattenedArr.push(deeplyNestedElement);
            }
          }
        } else {
          flattenedArr.push(nestedElement);
        }
      }
    } else {
      flattenedArr.push(element);
    }
  }

  return flattenedArr;
}

console.log(steamrollArray([[1], [], [2, [3]]]));
console.log(steamrollArray([1, { foo: "bar" }, [2]]));
console.log(steamrollArray(["baz", [1, 2], {}]));
