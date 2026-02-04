/**
 * Calculates the hypotenuse of a right triangle given the lengths of the other two sides.
 *
 * @param {number} a - The length of one side of the triangle.
 * @param {number} b - The length of the other side of the triangle.
 * @returns {number} The length of the hypotenuse.
 */
export function findHypotenuse(a: number, b: number) {
  const hypotenuse = Math.sqrt(a ** 2 + b ** 2);
  return hypotenuse;
}

/**
 * Calculates the first ten Pythagorean triplets.
 *
 * @returns {number[]} The first ten Pythagorean triplets.
 * @see https://en.wikipedia.org/wiki/Pythagorean_triple
 *
 * @todo
 * Will implement the logic later...
 *
 */
export function pythagoreanTriplets() {
  // smallest values for a 📐 that has a perfect `c` i.e w/o floating values
  let a: number = 3;
  let b: number = 4;
  let c: number = 5;
  let hypotenuseStore: number[] = [];

  console.log(hypotenuseStore);
  return hypotenuseStore;
}
