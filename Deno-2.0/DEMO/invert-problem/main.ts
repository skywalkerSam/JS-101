import { toCamelCase } from "@std/text";
import { invert } from "@std/collections";

const justUnderstandIt: string = "You were loved";
const record = { a: "x", b: "y", c: "z" };

// camelCase
export function camelCase(text: string): string {
  const camelCasedText: string = toCamelCase(text);
  console.log(import.meta.main, camelCasedText);
  return camelCasedText;
}

// invert
export function invertKeyValuePair(object: any) {
  const invertedKeyValuePair = invert(object);
  console.log(import.meta.main, invertedKeyValuePair);
  return invertedKeyValuePair;
}

if (import.meta.main) {
  camelCase(justUnderstandIt);
  invertKeyValuePair(record);
}
