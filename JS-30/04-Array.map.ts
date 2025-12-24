/**
 *
 * @param arr
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
