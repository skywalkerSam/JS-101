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
  let validatedManifest = { ...manifest };

  // containerId
  if (manifest.containerId === undefined) {
    validatedManifest.containerId = "Missing";
  } else if (
    typeof manifest.containerId !== "number" ||
    manifest.containerId <= 0
  ) {
    validatedManifest.containerId = "Invalid";
  }

  // destination
  if (manifest.destination === undefined || manifest.destination === "") {
    validatedManifest.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    validatedManifest.destination = "Invalid";
  }

  // weight
  if (manifest.weight === undefined) {
    validatedManifest.weight = "Missing";
  } else if (typeof manifest.weight !== "number") {
    validatedManifest.weight = "Invalid";
  }

  // unit
  if (manifest.unit === undefined || manifest.unit === "") {
    validatedManifest.unit = "Missing";
  } else if (typeof manifest.unit !== "string") {
    validatedManifest.unit = "Invalid";
  } else if (manifest.unit !== "lb" && manifest.unit !== "kg") {
    validatedManifest.unit = "Invalid";
  }

  // hazmat
  if (manifest.hazmat === undefined) {
    validatedManifest.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    validatedManifest.hazmat = "Invalid";
  } else if (manifest.hazmat !== true && manifest.hazmat !== false) {
    validatedManifest.hazmat = "Invalid";
  }

  //TODO: Return the objects individually.
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
  } else {
    return validatedManifest;
  }
}

function processManifest(manifest) {
  let processedManifest = validateManifest(manifest);

  let validatedContainerId = processedManifest.containerId;
  let validatedDestination = processedManifest.destination;
  let validatedWeight = processedManifest.weight;
  let validatedUnit = processedManifest.unit;
  let validatedHazmat = processedManifest.hazmat;

  // containerId
  if (
    validatedContainerId !== "Missing" &&
    validatedContainerId !== "Invalid"
  ) {
    console.log(`Validation success: ${validatedContainerId}`);
  } else {
    console.log(`Validation error: ${validatedContainerId}`);
    return processedManifest;
  }

  // destination
  if (
    validatedDestination !== "Missing" &&
    validatedDestination !== "Invalid"
  ) {
    console.log(`Validation success: ${validatedDestination}`);
  } else {
    console.log(`Validation error: ${validatedDestination}`);
    return processedManifest;
  }

  // weight
  if (validatedWeight !== "Missing" && validatedWeight !== "Invalid") {
    console.log(`Validation success: ${validatedWeight}`);
  } else {
    console.log(`Validation error: ${validatedWeight}`);
    return processedManifest;
  }
  // unit
  if (validatedUnit !== "Missing" && validatedUnit !== "Invalid") {
    console.log(`Validation success: ${validatedUnit}`);
  } else {
    console.log(`Validation error: ${validatedUnit}`);
    return processedManifest;
  }

  // hazmat
  if (validatedHazmat !== "Missing" && validatedHazmat !== "Invalid") {
    console.log(`Validation success: ${validatedHazmat}`);
  } else {
    console.log(`Validation error: ${validatedHazmat}`);
    return processedManifest;
  }
}

// tests
console.log(
  validateManifest({
    containerId: 1,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false,
  }),
);

console.log(validateManifest({}));

console.log(
  validateManifest({
    containerId: null,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false,
  }),
);

// console.log({}.containerID)
