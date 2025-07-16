var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  countdownString: () => countdownString,
  makeTimer: () => makeTimer
});
module.exports = __toCommonJS(index_exports);

// src/scriptable/countdownScriptable.ts
function getUnitsRemaining(deadlineMs) {
  const secondsRemaining = getSecondsRemaining(deadlineMs);
  if (secondsRemaining < 1)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  const seconds = secondsRemaining % 60;
  const minutes = Math.floor(secondsRemaining / 60 % 60);
  const hours = Math.floor(secondsRemaining / 60 / 60) % 24;
  const days = Math.floor(secondsRemaining / 60 / 60 / 24);
  return {
    days,
    hours,
    minutes,
    seconds
  };
}
function parseDeadline(deadlineString) {
  const deadlineMs = Date.parse(deadlineString);
  return deadlineMs;
}
function getSecondsRemaining(deadlineMs) {
  const now = Date.now();
  const differenceMs = deadlineMs - now;
  return Math.floor(differenceMs * 1e-3);
}
function makeTimerInline(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  const spans = getDigitSpans();
  return () => {
    updateDigits(spans, getUnitsRemaining(deadlineMs));
  };
  function getDigitSpans() {
    const digitCollection = document.querySelectorAll(".gld-countdown-digits");
    const digitRecord = {};
    digitCollection.forEach((spanElement) => {
      const name = spanElement.getAttribute("id").replace("gld-countdown-", "");
      digitRecord[name] = spanElement;
    });
    return digitRecord;
  }
  function updateDigits(digitRecord, newUnits) {
    Object.entries(digitRecord).forEach((entry) => {
      const [key, element] = entry;
      const newValue = newUnits[key].toString().padStart(2, "0");
      const oldValue = element.innerHTML;
      if (newValue != oldValue) {
        element.innerHTML = newValue;
      }
    });
  }
}
var timerGld = makeTimerInline("2025-07-20 23:59:59");
setInterval(() => {
  timerGld();
}, 1e3);

// src/countdown.ts
function makeTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}

// src/countdownString.ts
var string = `(()=>{function f(e){let n=p(e);if(n<1)return{days:0,hours:0,minutes:0,seconds:0};let t=n%60,i=Math.floor(n/60%60),c=Math.floor(n/60/60)%24;return{days:Math.floor(n/60/60/24),hours:c,minutes:i,seconds:t}}function m(e){return Date.parse(e)}function p(e){let n=Date.now(),t=e-n;return Math.floor(t*.001)}function l(e){let n=m(e),t=i();return()=>{c(t,f(n))};function i(){let o=document.querySelectorAll(".gld-countdown-digits"),r={};return o.forEach(s=>{let d=s.getAttribute("id").replace("gld-countdown-","");r[d]=s}),r}function c(o,r){Object.entries(o).forEach(s=>{let[d,a]=s,u=r[d].toString().padStart(2,"0"),g=a.innerHTML;u!=g&&(a.innerHTML=u)})}}var M=l("2025-07-20 23:59:59");setInterval(()=>{M()},1e3);})();`;
var countdownString = string;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  countdownString,
  makeTimer
});
