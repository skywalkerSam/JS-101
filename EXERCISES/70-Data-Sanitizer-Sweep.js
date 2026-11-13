// in this lab, you will clean semi-structured log files by replacing disallowed characters with # and tracking how many entries were processed.

function sanitizeLog(entry, disallowedCharacters) {
  for (let i = 0; i < disallowedCharacters.length; i++) {
    const char = disallowedCharacters[i];
    entry = entry.replaceAll(char, "#");
  }

  return entry;
}

function cleanLogs(logs, disallowedCharacters) {
  let sanitizedEntries = 0;
  let informationalEntries = 0;
  let fatalMarker = false;

  for (let i = 0; i < logs.length; i++) {
    const entry = logs[i];
    if (entry.includes("$")) {
      fatalMarker = true;
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    }

    if (entry[0] === "/") {
      informationalEntries++;
      continue;
    }

    sanitizeLog(entry, disallowedCharacters);
    sanitizedEntries++;
  }

  if (!fatalMarker) {
    return `Total Entry Count: ${logs.length}. Sanitized Entry Count: ${sanitizedEntries}. Informational Entry Count: ${informationalEntries}. Finished sanitizing logs.`;
  }
}

console.log(
  sanitizeLog("DEBUG: Server started on port 3000", ["a", "S", "r", "t"]),
);

console.log(
  sanitizeLog("WARN: Disk usage at 92%, threshold=90%",["a", "A", "d", "e"])
);

console.log(
  sanitizeLog("TESTING: No Disallowed Characters", ["A", "b", "z", "Y"])
);

let logs_1 = [
  "INFO: Server started on port 3000",
  "DEBUG: user=admin token=abc123 connected",
  "WARN: High memory usage detected at 87%"
];

let logs_2 = [
  "FATAL: System overload detected, shutting down",
  "DEBUG: token=def456$ refreshed for session",
  "ERROR: Null pointer exception in module auth"
];

let logs_3 = [
  "ERROR: Failed to connect to db, retry=3",
  "DEBUG: api_key=XYZ789 used in request",
  "/INFO: Cache cleared successfully",
  "WARN: Disk usage at 92%, threshold=90%",
  "/INFO: Disk usage stabilized"
];

console.log(cleanLogs(logs_1, ["a", "A", "c", "T"]))
console.log(cleanLogs(logs_2, ["a", "A", "c", "T"]))
console.log(cleanLogs(logs_3, ["a", "A", "c", "T"]))
