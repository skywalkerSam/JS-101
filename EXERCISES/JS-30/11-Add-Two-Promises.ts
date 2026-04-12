/**
 *
 * Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 *
 * @param promise1
 * @param promise2
 */

type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
    const promised: number = await Promise.all([promise1, promise2]).then(
        (values) => values[0] + values[1]
    );
    return promised;
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// #2
async function addTwoPromisesAgain(promise1: P, promise2: P): P {
    const [a, b]: [number, number] = await Promise.all([promise1, promise2]);
    const promised = a + b;
    return promised;
}

addTwoPromises(Promise.resolve(6), Promise.resolve(9)).then(result => console.log(`\nThe sum is: ${result}\n`));
