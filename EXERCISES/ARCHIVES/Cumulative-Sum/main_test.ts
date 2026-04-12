import { assertEquals } from "@std/assert";
import { cumulatedSum, cumulativeSummed, cumulativeSum } from "./main.ts";

const theArray: number[] = [3, 6, 9, 33, 66, 99, 36, 69, 96];
const theAnotherArray: number[] = [-3, -6, -9];

Deno.test(function cummulativeSum() {
  assertEquals(cumulatedSum(theArray), 417);
  assertEquals(cumulatedSum(theAnotherArray), -18);
  assertEquals(cumulativeSummed(theArray), 417);
  assertEquals(cumulativeSummed(theAnotherArray), -18);
  assertEquals(cumulativeSum(theArray), 417);
  assertEquals(cumulativeSum(theAnotherArray), -18);
});

// import { expect, test } from "vitest";

// import { cumSum } from "./main";
// test('cumSum()', () => {
//     expect(cumSum(theArray)).toBe(417);
//     expect(cumSum(anotherArray)).toBe(-18);
// })

// import { cumSummed } from "./main";
// test('cumSummed()', () => {
//     expect(cumSummed(theArray)).toBe(417);
//     expect(cumSummed(anotherArray)).toBe(-18);
// })

// import { cummedSum } from "./main";
// test('cummedSum()', () => {
//     expect(cummedSum(theArray)).toBe(417);
//     expect(cummedSum(anotherArray)).toBe(-18);
// })

// i know how it sounds, please don't...🙏
