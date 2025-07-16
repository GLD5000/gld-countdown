export function getUnitsRemaining(deadlineMs: number) {
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

export function parseDeadline(deadlineString: string) {
  const deadlineMs = Date.parse(deadlineString);
  return deadlineMs;
}

export function getSecondsRemaining(deadlineMs: number) {
  const now = Date.now();
  const differenceMs = deadlineMs - now;
  return Math.floor(differenceMs * 0.001);
}

export default function makeTimerInline(deadlineString: string) {
  const deadlineMs = parseDeadline(deadlineString);
  const spans = getDigitSpans();
  return () => {
    updateDigits(spans, getUnitsRemaining(deadlineMs));
  };
  function getDigitSpans() {
    const digitCollection = document.querySelectorAll(".gld-countdown-digits");
    const digitRecord: Record<string, Element> = {};
    digitCollection.forEach((spanElement) => {
      const name = spanElement.getAttribute("id").replace("gld-countdown-", "");
      digitRecord[name] = spanElement;
    });
    return digitRecord;
  }

  function updateDigits(
    digitRecord: Record<string, Element>,
    newUnits: Record<string, number>
  ) {
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
}, 1000);