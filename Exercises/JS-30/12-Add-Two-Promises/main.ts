type P = Promise<number>;

/**
 * Takes two promises that resolve to numbers and returns a new promise that
 * resolves to the sum of the two numbers.
 *
 * @param promise1 - the first promise
 * @param promise2 - the second promise
 * @returns a new promise that resolves to the sum of the two numbers
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */
export async function addTwoPromises(promise1: P, promise2: P): P {
  const promised: number = await Promise.all([promise1, promise2]).then(
    (values) => values[0] + values[1]
  );
  // console.log(promised);
  return promised;
}

export async function addTwoPromisesDemo(promise1: P, promise2: P): P {
  const [a, b]: [number, number] = await Promise.all([promise1, promise2]);
  const promised = a + b;
  // console.log(promised);
  return promised;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

if (import.meta.main) {
  addTwoPromises(Promise.resolve(6), Promise.resolve(9)).then(result => console.log(`\nThe sum is: ${result}\n`));
}
