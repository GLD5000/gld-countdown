// util/scriptable/scriptable.ts
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
if (typeof document !== "undefined") {
  timerGld = makeTimerInline("2025-07-20 23:59:59");
  timerGld();
  setInterval(() => {
    timerGld();
  }, 1e3);
}
var timerGld;

// lib/countdown.ts
function makeTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}

// lib/countdownString.ts
var string = String.raw`(()=>{function f(e){let n=p(e);if(n<1)return{days:0,hours:0,minutes:0,seconds:0};let t=n%60,i=Math.floor(n/60%60),c=Math.floor(n/60/60)%24;return{days:Math.floor(n/60/60/24),hours:c,minutes:i,seconds:t}}function m(e){return Date.parse(e)}function p(e){let n=Date.now(),t=e-n;return Math.floor(t*.001)}function M(e){let n=m(e),t=i();return()=>{c(t,f(n))};function i(){let o=document.querySelectorAll(".gld-countdown-digits"),s={};return o.forEach(r=>{let a=r.getAttribute("id").replace("gld-countdown-","");s[a]=r}),s}function c(o,s){Object.entries(o).forEach(r=>{let[a,u]=r,g=s[a].toString().padStart(2,"0"),l=u.innerHTML;g!=l&&(u.innerHTML=g)})}}typeof document<"u"&&(d=M("2025-07-20 23:59:59"),d(),setInterval(()=>{d()},1e3));var d;})();
`;
var countdownString = string;
export {
  countdownString,
  makeTimer
};
