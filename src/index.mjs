import { makeTimer, makeFakeTimer } from "./countdown.mjs";
const timeString = "2025-07-14 19:12"
const timer = makeTimer(timeString);
const fakeTimer = makeFakeTimer(timeString);

setInterval(() => {
  console.log('Real: ',timer());
}, 1000,)
setInterval(() => {
  console.log('Fake: ', fakeTimer.next().value);
},1000,)