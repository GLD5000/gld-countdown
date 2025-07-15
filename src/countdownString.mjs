const string = `/**
 * 
 *
 * @param {number} deadlineMs 
 * @returns {{ days: number; hours: number; minutes: number; seconds: number; }} 
 */
function getUnitsRemaining(deadlineMs) {
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

/**
 * 
 *
 * @param {string} deadlineString 
 * @returns {number} 
 */
function parseDeadline(deadlineString) {
  const deadlineMs = Date.parse(deadlineString);
  return deadlineMs;
}

/**
 * 
 *
 * @param {number} deadlineMs 
 * @returns {number} 
 */
function getSecondsRemaining(deadlineMs) {
  const now = Date.now();
  const differenceMs = deadlineMs - now;
  return Math.floor(differenceMs * 0.001);
}

/**
 * 
 *
 * @export
 * @param {string} deadlineString 
 * @returns {() => { days: number; hours: number; minutes: number; seconds: number; }} 
 */
export function makeTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}`.replaceAll("export ", "");
// console.log(`${string}`);
export const countdownString = string;
