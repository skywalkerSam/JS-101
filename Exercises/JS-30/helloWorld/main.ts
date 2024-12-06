export function createHelloWorld() {
  return function (...args: any): string {
    // console.log(args)
    return "Hello World";
  };
}

if (import.meta.main) {
  console.log(createHelloWorld()())
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
