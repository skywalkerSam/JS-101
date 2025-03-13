import { assertEquals } from "@std/assert";
import { filter } from "./main.ts";

const anArray: number[] = [0, 1, 3, 6, 9, 12, 15, 18, 21];

/**
 * Checks if a number is greater than or equal to 3.
 * @param num - The number to check
 * @returns True if the number is greater than or equal to 3, false otherwise
 */
function greaterThan3(num: number): boolean {
  if (num >= 3) {
    return true;
  }
  return false;
}

/**
 * Checks if a number is greater than 15.
 * @param num - The number to check
 * @returns True if the number is greater than 15, false otherwise
 */
function greaterThan15(num: number): boolean {
  if (num > 15) {
    return true;
  }
  return false;
}

Deno.test(function filterTest() {
  assertEquals(filter(anArray, greaterThan3), [3, 6, 9, 12, 15, 18, 21]);
});

// #2
Deno.test(function secondFilterTest() {
  assertEquals(filter(anArray, greaterThan15), [18, 21]);
});
