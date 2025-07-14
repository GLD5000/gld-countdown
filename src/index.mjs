import { makeTimer, makeFakeTimer, makeHybridTimer } from "./countdown.mjs";
const timeString = "2025-07-14 20:48";
const timer = makeTimer(timeString);
const fakeTimer = makeFakeTimer(timeString);
const hybridTimer = makeHybridTimer(timeString);

setInterval(() => {
  console.log("Real: ", timer());
}, 1000);
setInterval(() => {
  console.log("Fake: ", fakeTimer.next().value);
}, 1000);
setInterval(() => {
  console.log("Hybrid: ", hybridTimer.next().value);
}, 1000);
