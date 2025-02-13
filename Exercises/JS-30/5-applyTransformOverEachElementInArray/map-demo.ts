const someArr = [1, 3, 6, 9];

export function createMap(arr: number[]) {
  //   let localArr = arr;
  return {
    plus: function (plusValue: number) {
      const output = arr.map((i) => i + plusValue);
      return output;
    },
    exponent: (exponentValue: number) => {
      const output = arr.map((i) => i ** exponentValue);
      return output;
    },
    // square: function () {
    //   localArr.map((i) => i ** 2);
    //   return localArr;
    // },

    // cube: function () {
    //   localArr.map((i) => i ** 3);
    //   return localArr;
    // },

    // reset: () => {
    //   localArr = arr;
    //   return localArr;
    // },
  };
}

if (import.meta.main) {
  //   const anotherArr = someArr.map((i) => i ** 2);
  //   console.log(someArr);
  //   console.log(anotherArr);

  // map demo
  const fuckAroundAndFindOut = createMap(someArr);
  console.log(fuckAroundAndFindOut.plus(9));
  console.log(fuckAroundAndFindOut.exponent(2));
  console.log(fuckAroundAndFindOut.exponent(3));
  console.log(fuckAroundAndFindOut.exponent(10));
}
