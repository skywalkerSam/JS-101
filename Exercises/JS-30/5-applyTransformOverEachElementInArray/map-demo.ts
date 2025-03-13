// Demo: `.map()`

/**
 * Creates an object with methods to transform an array of numbers.
 * @param arr - The input array of numbers to transform
 * @returns An object with transformed values
 * @example
 * const transformer = createMap(arr);
 * transformer.plus(3);
 * transformer.exponent(2);
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export function createMap(arr: number[]) {
  return {
    plus: function (plusValue: number) {
      const transformedArr= arr.map((i) => i + plusValue);
      return transformedArr;
    },
    exponent: (exponentValue: number) => {
      const transformedArr= arr.map((i) => i ** exponentValue);
      return transformedArr;
    },
    square: function () {
      const transformedArr= arr.map((i) => i ** 2);
      return transformedArr;
    },

    cube: function () {
      const transformedArr= arr.map((i) => i ** 3);
      return transformedArr;
    },
  };
}
