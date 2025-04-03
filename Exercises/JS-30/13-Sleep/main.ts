/**
 * Pauses execution of the async function for the given number of milliseconds.
 * @param millis time to wait in milliseconds
 * @returns a promise that resolves when the sleep is over
 * @see https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
 */
export async function sleep(millis: number): Promise<void> {
  await new Promise((resolve, reject) => {
    console.log(`\nDelay requested for ${millis}ms\n`);
    setTimeout(resolve, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */

if (import.meta.main) {
  let t = Date.now();
  sleep(1000).then(() => console.log(Date.now() - t));
}
