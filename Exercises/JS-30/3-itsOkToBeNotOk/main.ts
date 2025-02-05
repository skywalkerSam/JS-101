type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

export function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (toBeVal: any) => {
      if (val === toBeVal) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (notToBeVal: any) => {
      if (val !== notToBeVal) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log(expect(3).toBe(3));
  // console.log(expect(3).toBe(6));
  console.log(expect(6).notToBe(9));
  // console.log(expect(6).notToBe(6));
}

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
