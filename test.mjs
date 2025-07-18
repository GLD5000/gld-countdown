import * as countdown from "./dist/index.mjs";

const timeString = "2025-08-18 20:51";
const timer = countdown.makeTimer(timeString);

setInterval(() => {
  console.log("Remaining: ", timer());
}, 1000);

console.log(countdown.countdownString);
