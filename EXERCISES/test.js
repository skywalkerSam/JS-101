if (
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