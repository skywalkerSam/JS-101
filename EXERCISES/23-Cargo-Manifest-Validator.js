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
  if (manifest.containerId === null || undefined) {
    validatedManifest.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number") {
    validatedManifest.containerId = "Invalid";
  }

  // destination
  if (manifest.destination === null || undefined) {
    validatedManifest.destination = "Missing";
  } else if (manifest.destination === "") {
    validatedManifest.destination = "Missing";
  } else if (typeof manifest.destination !== "string") {
    validatedManifest.destination = "Invalid";
  }

  // weight
  if (manifest.weight === null || undefined) {
    validatedManifest.weight = "Missing";
  } else if (typeof manifest.weight !== "number") {
    validatedManifest.weight = "Invalid";
  }

  // unit
  if (manifest.unit === null || undefined) {
    validatedManifest.unit = "Missing";
  } else if (manifest.unit === "") {
    validatedManifest.unit = "Missing";
  } else if (typeof manifest.unit !== "lb" || "kg") {
    validatedManifest.unit = "Invalid";
  }

  // hazmat
  if (manifest.hazmat === null || undefined) {
    validatedManifest.hazmat = "Missing";
  } else if (manifest.hazmat !== true || false) {
    validatedManifest.hazmat = "Invalid";
  }

  return validatedManifest;
}

function processManifest(manifest) {
  let validatedContainerId = validateManifest(manifest).containerId;
  let validatedDestination = validateManifest(manifest).destination;
  let validatedWeight = validateManifest(manifest).weight;
  let validatedUnit = validateManifest(manifest).unit;
  let validatedHazmat = validateManifest(manifest).hazmat;

  // containerId
  if (validatedContainerId !== "Missing" || "Invalid") {
    console.log(`Validation success: ${validatedContainerId}`);
  } else {
    console.log(`Validation error: ${validatedContainerId}`);
    return validatedContainerId;
  }

  // destination
  if (validatedDestination !== "Missing" || "Invalid") {
    console.log(`Validation success: ${validatedDestination}`);
  } else {
    console.log(`Validation error: ${validatedDestination}`);
    return validatedDestination;
  }

  // weight
  if (validatedWeight !== "Missing" || "Invalid") {
    console.log(`Validation success: ${validatedWeight}`);
  } else {
    console.log(`Validation error: ${validatedWeight}`);
    return validatedWeight;
  }
  // unit
  if (validatedUnit !== "Missing" || "Invalid") {
    console.log(`Validation success: ${validatedUnit}`);
  } else {
    console.log(`Validation error: ${validatedUnit}`);
    return validatedUnit;
  }

  // hazmat
  if (validatedHazmat !== "Missing" || "Invalid") {
    console.log(`Validation success: ${validatedHazmat}`);
  } else {
    console.log(`Validation error: ${validatedHazmat}`);
    return validatedHazmat;
  }
}
