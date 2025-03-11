// Use closure patterns

export function createHelloWorld() {
  // @ts-ignore intentional type any
  return function (...args: any): string {
    // console.log(args)
    return "Hello, World!";
  };
}

if (import.meta.main) {
  // console.log(createHelloWorld()())

  // And now, you can do this:
  const sayHello = createHelloWorld();
  console.log(sayHello())
}

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
