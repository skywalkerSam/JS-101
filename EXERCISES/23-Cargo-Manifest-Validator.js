/**
 * In this lab, you will use JavaScript to normalize and validate cargo manifests. A cargo manifest is a document that typically lists goods being transported (for example, by ship or train) and includes details about those goods.
 * 
 * Each cargo manifest will be represented as an object with the following properties:
 *
 * `containerId`: a positive integer identifying the associated cargo container.
 *
 * `destination`: a non-empty string (after trimming whitespace) denoting the cargo's target destination.
 *
 * `weight`: a positive number representing the cargo's weight.
 *
 * `unit`: a string describing the units for the cargo's weight property (either "kg" for kilograms or "lb" for pounds).
 *
 * `hazmat`: a boolean value indicating whether hazardous material handling is needed.
 * 
 * Example cargo manifest object:
 * {
    containerId: 1,
    destination: "Monterey, California, USA",
    weight: 831,
    unit: "lb",
    hazmat: false
 * }
 */

function normalizeUnits(manifest) {
  let metricManifest = { ...manifest };
  if (manifest.unit === "lb") {
    metricManifest.weight = metricManifest.weight * 0.45;
    metricManifest.unit = "kg";
  }
  return metricManifest;
}

function validateManifest(manifest) {
  // basic object validation
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    return { isValid: false, error: "input must be an object!" };
  }

  let validatedManifest = { ...manifest };

  // TODO: if the input manifest object is not valid, your `validateManifest` function should `return` an object describing missing and/or invalid properties. (Test 15)
  let requiredKeys = ["containerId", "destination", "weight", "unit", "hazmat"];
  let keyVerification = requiredKeys.every((key) =>
    Object.hasOwn(manifest, key),
  );
  
  let isContainerIdNotMissing = Object.hasOwn(manifest, requiredKeys[0])
  let isDestinationNotMissing = Object.hasOwn(manifest, requiredKeys[1])
  let isWeightNotMissing = Object.hasOwn(manifest, requiredKeys[2])
  let isUnitNotMissing = Object.hasOwn(manifest, requiredKeys[3])
  let isHazmatNotMissing = Object.hasOwn(manifest, requiredKeys[4])

  // containerId
  if (manifest.containerId === undefined || !isContainerIdNotMissing) {
    validatedManifest.containerId = "Missing";
  } else if (
    Number.isNaN(manifest.containerId) ||
    typeof manifest.containerId !== "number" ||
    manifest.containerId <= 0 ||
    Number.isInteger(manifest.containerId) !== true
  ) {
    validatedManifest.containerId = "Invalid";
  }

  // destination
  if (manifest.destination === undefined || !isDestinationNotMissing) {
    validatedManifest.destination = "Missing";
  } else if (
    typeof manifest.destination !== "string" ||
    manifest.destination.trim() === ""
  ) {
    validatedManifest.destination = "Invalid";
  }

  // weight
  if (manifest.weight === undefined || !isWeightNotMissing) {
    validatedManifest.weight = "Missing";
  } else if (
    Number.isNaN(manifest.weight) ||
    typeof manifest.weight !== "number" ||
    manifest.weight <= 0
  ) {
    validatedManifest.weight = "Invalid";
  }

  // unit
  if (manifest.unit === undefined || !isUnitNotMissing) {
    validatedManifest.unit = "Missing";
  } else if (typeof manifest.unit !== "string" || manifest.unit.trim() === "") {
    validatedManifest.unit = "Invalid";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    validatedManifest.unit = "Invalid";
  }

  // hazmat
  if (manifest.hazmat === undefined || !isHazmatNotMissing) {
    validatedManifest.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validatedManifest.hazmat = "Invalid";
  } else if (manifest.hazmat !== true && manifest.hazmat !== false) {
    validatedManifest.hazmat = "Invalid";
  }

  // return objects
  if (
    validatedManifest.containerId !== "Missing" &&
    validatedManifest.containerId !== "Invalid" &&
    validatedManifest.destination !== "Missing" &&
    validatedManifest.destination !== "Invalid" &&
    validatedManifest.weight !== "Missing" &&
    validatedManifest.weight !== "Invalid" &&
    validatedManifest.unit !== "Missing" &&
    validatedManifest.unit !== "Invalid" &&
    validatedManifest.hazmat !== "Missing" &&
    validatedManifest.hazmat !== "Invalid"
  ) {
    return {};
    // TODO: Return only missing/invalid properties.
  } else if (
    (validatedManifest.containerId === "Missing" ||
      validatedManifest.containerId === "Invalid") &&
    (validatedManifest.destination === "Missing" ||
      validatedManifest.destination === "Invalid") &&
    (validatedManifest.weight === "Missing" ||
      validatedManifest.weight === "Invalid") &&
    (validatedManifest.unit === "Missing" ||
      validatedManifest.unit === "Invalid") &&
    (validatedManifest.hazmat === "Missing" ||
      validatedManifest.hazmat === "Invalid")
  ) {
    return {
      containerId: validatedManifest.containerId,
      destination: validatedManifest.destination,
      weight: validatedManifest.weight,
      unit: validatedManifest.unit,
      hazmat: validatedManifest.hazmat,
    };
  } else if (
    (validatedManifest.containerId === "Missing" ||
      validatedManifest.containerId === "Invalid") &&
    (validatedManifest.destination === "Missing" ||
      validatedManifest.destination === "Invalid") &&
    (validatedManifest.weight === "Missing" ||
      validatedManifest.weight === "Invalid") &&
    (validatedManifest.unit === "Missing" ||
      validatedManifest.unit === "Invalid")
  ) {
    return {
      containerId: validatedManifest.containerId,
      destination: validatedManifest.destination,
      weight: validatedManifest.weight,
      unit: validatedManifest.unit,
    };
  } else if (
    (validatedManifest.containerId === "Missing" ||
      validatedManifest.containerId === "Invalid") &&
    (validatedManifest.destination === "Missing" ||
      validatedManifest.destination === "Invalid") &&
    (validatedManifest.weight === "Missing" ||
      validatedManifest.weight === "Invalid")
  ) {
    return {
      containerId: validatedManifest.containerId,
      destination: validatedManifest.destination,
      weight: validatedManifest.weight,
    };
  } else if (
    (validatedManifest.containerId === "Missing" ||
      validatedManifest.containerId === "Invalid") &&
    (validatedManifest.destination === "Missing" ||
      validatedManifest.destination === "Invalid")
  ) {
    return {
      containerId: validatedManifest.containerId,
      destination: validatedManifest.destination,
    };
  } else if (
    validatedManifest.containerId === "Missing" ||
    validatedManifest.containerId === "Invalid"
  ) {
    return { containerId: validatedManifest.containerId };
  }
}

function processManifest(manifest) {
  // basic object validation
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    return { isValid: false, error: "input must be an object!" };
  }

  if (
    manifest.containerId !== undefined &&
    manifest.containerId !== null &&
    typeof manifest.containerId === "number" &&
    !Number.isNaN(manifest.containerId) &&
    Number.isInteger(manifest.containerId) &&
    manifest.containerId > 0
  ) {
    console.log(`Validation success: ${manifest.containerId}`);
    let metrifiedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${metrifiedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
} 

// test 7
console.log("\ntest 7\n");
console.log(
  validateManifest({
    containerId: 1,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false,
  }),
);

// test 8
console.log("\ntest 8\n");
console.log(validateManifest({}));

// test 9
console.log("\ntest 9\n");
console.log(
  validateManifest({
    containerId: null,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false,
  }),
);

// test 10
console.log("\ntest 10\n");
console.log(
  validateManifest({
    containerId: 0,
    destination: 405,
    weight: -84,
    unit: "pounds",
    hazmat: "no",
  }),
);

// test 12, 13, & 14
console.log("\ntest 12, 13, & 14\n");
console.log(validateManifest({ containerId: 3.5 }));
console.log(validateManifest({ destination: "  " }));
console.log(validateManifest({ weight: NaN }));

// test 15 (failing)
console.log("\ntest 15 (failing!!)\n");
let obj = { name: "Sam", title: "Starboy" };
let manifest = {
  containerId: 3,
  destination: "nowhere",
  weight: 110,
  unit: "kg",
  hazmat: false,
};

console.log(obj);
console.log(validateManifest([]));
console.log(validateManifest(obj));

// test 18
console.log("\ntest 18\n");
console.log(
  processManifest({
    containerId: 55,
    destination: "Carmel",
    weight: 400,
    unit: "lb",
    hazmat: false,
  }),
);

// test 22
console.log("\ntest 22\n");
console.log(
  processManifest({ containerId: -88, destination: "Soledad", weight: NaN }),
);
