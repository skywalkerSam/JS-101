const morningGates = [
  { id: "North", capacity: 5, queue: [3, 6, 2, 4] },
  { id: "East", capacity: 3, queue: [2, 4, 3, 5] },
  { id: "South", capacity: 4, queue: [1, 2, 3, 1] },
  { id: "West", capacity: 2, queue: [4, 1, 2, 3] },
];

const nightGates = [
  { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
  { id: "East", capacity: 2, queue: [3, 3, 4, 2] },
  { id: "South", capacity: 5, queue: [2, 1, 2, 3] },
  { id: "West", capacity: 3, queue: [5, 2, 1, 4] },
];

/**
 * Throughput refers to the total number of attendees processed by a gate across all ticks in a single simulation (morning or night).
 *
 * Your initializeThroughput function will prepare an object to track how many attendees each gate processes.
 *
 */
function initializeThroughput(gates) {
  let summary = {};
  for (let gate of gates) {
    summary[gate.id] = 0;
  }
  // console.log(summary);
  return summary;
}

// initializeThroughput(nightGates);

/** Handle logic for one gate at a single tick.
 *
 * gate: The gate object being processed.
 * tickIndex: The current simulation tick position in the queue array.
 *
 */
function processGateFlow(gate, tickIndex) {
  let currentTickQueue = gate.queue[tickIndex];
  let processed = 0;

  while (currentTickQueue > 0 && processed < gate.capacity) {
    currentTickQueue--;
    processed++;
  }

  return {
    processed: processed,
    overflow: currentTickQueue,
  };
}

// console.log(processGateFlow(nightGates[0], 0));

/** Rerouting overflow attendees to another gate.
 *
 * gates: The full array of gate objects.
 * currentGate: The gate where the overflow occurred.
 * tickIndex: The current tick position in the queue.
 * overflowAmount: The number of attendees that could not be processed.
 */
function rerouteOverflow(gates, currentGate, tickIndex, overflowAmount) {
  let currentIndex = gates.indexOf(currentGate);
  let nextGateIndex = (currentIndex + 1) % gates.length;

  gates[nextGateIndex].queue[tickIndex] += overflowAmount;
  console.log(
    `${overflowAmount} attendees rerouted to ${gates[nextGateIndex].id}`,
  );
}

// rerouteOverflow(
//   nightGates,
//   { id: "North", capacity: 4, queue: [6, 2, 5, 1] },
//   0,
//   processGateFlow(nightGates[0], 0).overflow,
// );

/** Handle all the actions for one gate during a single tick of the simulation.
 *
 * gates: The full array of gate objects.
 * gate: The current gate being processed.
 * tickIndex: The current tick index for the simulation.
 * throughputSummary: An object tracking total processed attendees per gate.
 */
function handleGateAtTick(gates, gate, tickIndex, throughputSummary) {
  console.log(`\nProcessing ${gate.id}...`);
  console.log(`${gate.queue[tickIndex]} attendees arriving.`);

  let result = processGateFlow(gate, tickIndex);
  throughputSummary[gate.id] += result.processed;

  if (result.overflow > 0) {
    console.log(`Overflow of ${result.overflow} attendees. Rerouting...`);
    rerouteOverflow(gates, gate, tickIndex, result.overflow);
  }
}

// handleGateAtTick(nightGates, nightGates[0], 0, initializeThroughput(nightGates))

function printSummary(summary) {
  console.log("\nThroughput Summary");
  for (const k in summary) {
    if (!Object.hasOwn(summary, k)) continue;

    const attendees = summary[k];

    console.log(`${k}: ${attendees} attendees processed`);
  }
}

// printSummary(initializeThroughput(nightGates));

function simulateFestival(gates, timeBlock) {
  console.log(`\n${timeBlock} Simulation`);
  let throughputSummary = initializeThroughput(gates);
  let maxTicks = gates[0].queue.length;
  let tickIndex = 0;

  while (tickIndex < maxTicks) {
    console.log(`\nTick ${tickIndex + 1}`);
    gates.forEach((gate) => {
      handleGateAtTick(gates, gate, tickIndex, throughputSummary);
    });
    tickIndex++;
  }
  printSummary(throughputSummary);
}

// simulateFestival(morningGates, "Morning");
simulateFestival(nightGates, "Night");
