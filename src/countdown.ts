/**
 * Description placeholder
 *
 * @param {number} deadlineMs 
 * @returns {{ days: number; hours: number; minutes: number; seconds: number; }} 
 */
function getUnitsRemaining(deadlineMs: number) {
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
 * Description placeholder
 *
 * @param {string} deadlineString 
 * @returns {number} 
 */
function parseDeadline(deadlineString:string) {
  const deadlineMs = Date.parse(deadlineString);
  return deadlineMs;
}

/**
 * Description placeholder
 *
 * @param {number} deadlineMs 
 * @returns {number} 
 */
function getSecondsRemaining(deadlineMs:number) {
  const now = Date.now();
  const differenceMs = deadlineMs - now;
  return Math.floor(differenceMs * 0.001);
}

/**
 * Description placeholder
 *
 * @export
 * @param {string} deadlineString 
 * @returns {() => { days: number; hours: number; minutes: number; seconds: number; }} 
 */
export function makeTimer(deadlineString:string) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}