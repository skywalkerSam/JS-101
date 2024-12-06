/** ⛓Optional Chaining, Call object properties safely.

Optional chaining `?` is a relatively new operator that was introduced in ES2020. It allows you to call object properties safely, without throwing an error. When calling properties without this operator, you many crash your application with the error `Cannot read property 'foo' of undefined`.
 */

const homoSapien = {}
const human = homoSapien.name    //error
console.log(human)

// error handling
const starboy = homoSapien?.name
console.log(starboy)

// im not getting any errors, its `undefined` by default... idk...
