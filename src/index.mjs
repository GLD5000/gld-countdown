import * as countdown from "./countdown.mjs";
const timeString = "2025-08-18 20:51";
const timer = countdown.makeTimer(timeString);
const fakeTimer = countdown.makeFakeTimer(timeString);
const hybridTimer = countdown.makeHybridTimer(timeString);

setInterval(() => {
  console.log("Real: ", timer());
}, 1000);
setInterval(() => {
  console.log("Fake: ", fakeTimer.next().value);
}, 1000);
setInterval(() => {
  console.log("Hybrid: ", hybridTimer.next().value);
}, 1000);
