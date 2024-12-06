// ...Spread Operator, combine two objects and arrays.
console.log('\n...spreadOperator!\n')

/** Spread Syntax
The spread syntax ... is a relatively new operator that was introduced in ES2018. It provides a concise way to combine objects and arrays.
 */

// combine two objects
const crushes = {
    one: 'Ashley',
    two: 'Karol',
    three: 'Rosalía',
    four: 'Elizabeth',
    five: 'Olivia',
    six: 'Miley',
    seven: 'Taylor',
    eight: 'Dua',
    nine: 'Billie',
}

const newCrushes = {
    ...crushes,    // combine crushes object
    a: 'Tris',
    b: 'Anya',
    c: 'Lyliana',
    d: 'Hayley',
    e: 'Abigail',
    f: 'Sophie',
    // ...crushes,    // where you import matters, it overwrites the existing values!
}

// console.log(crushes)
// console.log(newCrushes)


// combine two arrays
const idk = ['newborn', 'child', 'teen']
const fucked = ['adult', '30s', '40s', 'fuckedAF', 'ceaseToExist...']
const life = [...idk, ...fucked]

console.log(life)
