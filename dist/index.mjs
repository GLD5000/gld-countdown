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

// src/countdown.ts
function makeTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}

// src/countdownString.ts
var string = `function getUnitsRemaining(deadlineMs) {
  const secondsRemaining = getSecondsRemaining(deadlineMs);
  if (secondsRemaining < 1)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  const seconds = secondsRemaining % 60;
  const minutes = Math.floor((secondsRemaining / 60) % 60);
  const hours = Math.floor(secondsRemaining / 60 / 60) % 24;
  const days = Math.floor(secondsRemaining / 60 / 60 / 24);
  return {
    days,
    hours,
    minutes,
    seconds,
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
makeTimerInline("2025-07-20 23:59:59");`.replaceAll("export ", "");
var countdownString = string;
export {
  countdownString,
  makeTimer
};
