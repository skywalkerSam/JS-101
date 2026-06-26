let tiger = {
  species: "Tiger",
  age: 5,
  isEndangered: true,
};

let elephant = {
  species: "Elephant",
  age: 10,
  isEndangered: true,
};

function getSpecies(animal) {
  return animal.species;
}

console.log(getSpecies(tiger));

const getAge = (animal) => animal.age;
console.log(getAge(tiger));

function addHabitat(animal, habitat) {
  animal.habitat = habitat;
  return animal;
}

console.log(addHabitat(tiger, "Rainforest"));

function updateAge(animal, newAge) {
  animal.age = newAge;
  return animal;
}

console.log(updateAge(elephant, 12));

function removeEndangeredStatus(animal) {
  delete animal.isEndangered;
  return animal;
}

console.log(removeEndangeredStatus(tiger));

function hasHabitat(animal) {
  return animal.hasOwnProperty("habitat");
}

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

function getProperty(animal, propertyName) {
  return animal[propertyName];
}

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));
