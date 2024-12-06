// Object destructuring 101

const { foo: bar } = { foo: 21 }

// console.log(foo)
console.log(bar)        // yeah, ik... foo is gettin assigned to bar. what in the actual fuck??

/** Destructuring assignment, a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.

In the line const `{ foo: bar } = { foo: 21 }`, it's creating a new constant variable named `bar` and assigning it the value of the `foo` property from the object `{ foo: 21 }`

So, `bar` will be 21.   wtf??

*/

const starboy = {
    name: 'Starboy',
    dna: 'ACGT',
    origin: 'Planet-Earth',
    symbol: '🌠',
    activate: () => {
        // console.log('Can\'t rn, soon tho...')
        return 'processing...'      // undefined
    }
}

// console.log(starboy)
console.log(starboy.origin)
console.log(starboy.activate())
console.log(starboy.symbol)


// destructuring
const { name, dna, origin, symbol, activate } = starboy;
console.log('\nDestructured object values...')
console.log(symbol)
console.log(dna)
console.log(origin)
console.log(activate())
// looks minimal n' DRYed, don't it?


// Object destructuring with alias
const { name: humanName, origin: planetName } = starboy;
/**
Creating two new constant variables, `humanName` and `planetName`. It's getting their values from the properties `name` and `origin` of the `starboy` object, respectively.

This is known as "destructuring with aliasing". It's useful when you want to extract values from an object and assign them to variables with different names.
 */

console.log('\nObject destructuring with alias...')
console.log(humanName)
console.log(planetName)


// Array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;

console.log('\nArray destructuring...')
console.log(fruits)
console.log('first:', first)
console.log('second:', second)
console.log('third:', third)
console.log('\n' + first, second, third)
// neat, init?
