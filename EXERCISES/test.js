


function parseShipment(rawData) {
  // Early return if rawData is not an Array
  if (!Array.isArray(rawData)) return [];

  const result = [];
  const seenSKUs = [];

  for (let line of rawData) {
    const parts = line.split("|");

    const sku = parts[0].trim();

    if (seenSKUs.includes(sku)) continue; // Avoid duplicates

    const name = parts[1].trim();
    const qty = Number(parts[2].trim()); // Parse qty into a number
    const expires = parts[3].trim();
    const zone = parts[4] ? parts[4].trim() : "general";

    result.push({
      sku: sku,
      name: name,
      qty: qty,
      expires: expires,
      zone: zone,
    });

    seenSKUs.push(sku);
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (let item of shipment) {
    var exists = false;

    for (let stock of pantry) {
      if (stock.sku === item.sku) {
        exists = true;
      }
    }

    if (item.qty > 0) {
      if (exists) {
        actions.push({ type: "restock", item: item });
      } else {
        actions.push({ type: "donate", item: item });
      }
    } else {
      actions.push({ type: "discard", item: item });
    }
  }

  return actions;
}

function groupByZone(actions) {
  const byZone = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!byZone[zone]) {
      byZone[zone] = [];
    }

    byZone[zone].push(action);
  }

  return byZone;
}

function clonePantry(pantry) {
  const pantryClone = [];

  for (let item of pantry) {
    pantryClone.push({
      sku: item.sku,
      name: item.name,
      qty: item.qty,
      expires: item.expires,
      zone: item.zone,
    });
  }

  return pantryClone;
}

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

const rawData = [
  "A10|Tomatoes|5|2027-01-01", // Restock existing item
  "B21|Bananas|10|2027-01-01", // Donate new item without zone
  "C32|Eggs|3|2027-01-01|fridge", // Donate to a defined zone
  "C32|Eggs|3|2027-01-01", // Duplicated SKU in shipment
  "D43|Pineapples|0|2027-01-01", // Discard with quantity of 0
  "E54|Peppers|-1|2027-01-01|fridge", // Discard even if it's not in pantry
];

const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

// Show items expanded in zones
console.log(grouped);
