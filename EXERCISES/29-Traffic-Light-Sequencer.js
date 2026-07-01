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
  for (let i = 0; i < cycles; i++) {
    for (let j = 0; j < config.phases.length; j++) {
      if (config.phases.length === 0) {
        console.log("No phases found");
        return "No phases found";
      } else if (config.fault === true) {
        console.log("Faulted phase!");
        break;
      } else if (config.phases[j].duration <= 0) {
        console.log("Invalid phase detected");
        continue;
      }
      console.log(
        `Switching to ${config.phases[j].color} for ${config.phases[j].duration} s`,
      );
      console.log(`i: ${i}`);
      console.log(`j: ${j}`);
    }
  }
}

function generateTimeline(config, cycles) {
  let elapsedTime = [];
  for (let i = 0; i < cycles; i++) {
    // console.log(`i: ${i}`)
    for (let j = 0; j < config.phases.length; j++) {
      // console.log(`j: ${j}`)

      if (elapsedTime.length === 0) {
        elapsedTime.push(config.phases[j].duration);
      } else {
        elapsedTime.push(config.phases[j].duration + elapsedTime[j - 1]);
      }
    }
  }
  return elapsedTime;
}

runSequence(config1, 1);
runSequence(config1, 2);

console.log(generateTimeline(config1, 1));
