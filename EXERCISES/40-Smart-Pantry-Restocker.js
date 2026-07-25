const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

// sku|name|qty|expires|zone (zone is optional)
const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

/** implement a parseShipment(rawData) function that takes an array of strings and returns an array of objects with { sku, name, qty, expires, zone } properties.
 *
 */
function parseShipment(rawData) {
    
    // handle duplicates

    // zone defaults to "general"

    // qty should be a number 
}

/** implement a planRestock(pantry, shipment) function that compares the current pantry with the incoming shipment and returns an array of actions in the form { type, item }, where type is one of "restock", "discard", or "donate", and item is the parsed shipment object.
 * 
 * The pantry parameter is an array of objects with the same shape as a parsed shipment item ({ sku, name, qty, expires, zone }).
 * 
 */
function planRestock(pantry, shipment) {
    
    // If a shipment item has a qty of 0 or less, the action type should be "discard", regardless of whether the item exists in the pantry.

    // Otherwise, if the shipment item's sku already exists in the pantry, the action type should be "restock".

    // Otherwise (the shipment item's sku does not exist in the pantry), the action type should be "donate".
}

/** implement a groupByZone(actions) function that groups the actions into storage zones based on each item's zone property. 
 * 
 * return an object where each key is a zone name and the value is an array of actions belonging to that zone.
 * 
 * For example, if actions contain items with zones "fridge" and "pantry", the result should be { fridge: [...], pantry: [...] }.
 * 
 */
function groupByZone(actions) {

}

/** implement a clonePantry(pantry) function that returns a deep copy of the pantry so planning changes do not affect the original list. 
 * 
 * A deep copy means creating a new array with new objects, so modifying the copy does not change the original pantry.
 * 
 */
function clonePantry(pantry) {

}

// You should use all of the functions together to process a shipment and log the final grouped result object to the console.

