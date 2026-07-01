// `fault`: a boolean flag that triggers early termination when true.

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

function runSequence(config, cycles) {
  for (let i = 0; i <= cycles + 1; i++) {
    if (config.phases.length === 0) {
      console.log("No phases found");
      return "No phases found";
    } else if (config.fault === true) {
      console.log("Faulted phase!");
      break;
    } else if (config.phases[i].duration <= 0) {
      console.log("Invalid phase detected");
      continue;
    }
    console.log(
      `Switching to ${config.phases[i].color} for ${config.phases[i].duration} s`,
    );
  }
}

function generateTimeline(config, cycles) {
  let elapsedTime = [];
  for (let i = 0; i <= cycles + 1; i++) {
    if (elapsedTime.length === 0) {
      elapsedTime.push(config.phases[i].duration);
    } else {
      elapsedTime.push(config.phases[i].duration + elapsedTime[i - 1]);
    }
  }
  return elapsedTime;
}

runSequence(config1, 1);
runSequence(config1, 2)


// console.log(generateTimeline(config1, 1));
