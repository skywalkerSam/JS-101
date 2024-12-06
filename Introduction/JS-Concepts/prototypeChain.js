/** Prototype Chain, Inheritance within objects

The prototype chain is a mechanism that allows objects to inherit properties and methods from other objects. Every object can have exactly one prototype object. That prototype object can also have a prototype object, and so on, creating a chain of inheritied properties and methods. The end of this chain is called the `null` prototype.

In general, you don’t need to think about the prototype chain when doing everyday JavaScript development. However, it is important to understand how it works because it’s the basis for the `class` keyword and essential knowledge as you dive deeper into the language.

In the example below, we see how an dog can inherit properties from the animal object, which itself inherits properties from the root `Object.prototype`.

  */


// animal object
const animal = {
    dna: 'ACGT',
    origin: 'Planet-Earth',
    sleep: () => {
        console.log('...ZZZzzzZZZzzz...')
    }
}


// dog object
const dog = new Object(
    {
        name: 'dwag',
        face: '🐺'
    }
);


// initially, the dog object has no prototype...
console.log(animal.__proto__);       // [Object: null prototype] {}
console.log(dog.__proto__);


// Inherit properties from animal object
Object.setPrototypeOf(dog, animal);


// now, the dog object has a prototype...
console.log(dog.__proto__);         // { dna: 'ACGT', origin: 'Planet-Earth', sleep: [Function: sleep] }


console.log(dog.name)        // dwag
console.log(dog.dna)        // ACGT
console.log(dog.sleep())        // ...ZZZzzzZZZzzz...


console.log(dog)
console.log(animal)


console.log(Object.getPrototypeOf(dog))
console.log(Object.getPrototypeOf(dog) === animal)      // true
