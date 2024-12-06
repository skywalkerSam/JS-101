/** 🦺 Nullish Coalescing ( ?? )

 * Nullish coalescing is a relatively new operator that was introduced in ES2020. It is similar to the logical OR operator `||`, but it only returns the right-hand side if the left-hand side is `null` or `undefined`.

 */

// ||
let moments = ''
let reasonsToLive = moments || 'None'
console.log(reasonsToLive)           // None bc '' is falsy for some reason...  


// ??
let life = ''
let reasonsToDie = life ?? '...nothingMatters!'
console.log(reasonsToDie)         // '' bc life is not null or undefined. nothing's wrong but nothing feels right either...


console.log('lifeGoesOn...')
