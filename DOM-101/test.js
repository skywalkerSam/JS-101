const input = document.querySelector("input");
const log = document.getElementById("log");

// Callback function: logkey
input.addEventListener("keydown", logKey);

function logKey(event) {
  log.textContent += ` ${event.code}`;
  console.log(log.textContent);     // Enter
  console.log(e.code);              // Enter
}
