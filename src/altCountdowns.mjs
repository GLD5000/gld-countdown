export function* makeFakeTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  let unitsRemaining = getUnitsRemaining(deadlineMs);
  yield unitsRemaining;
  while (true) {
    unitsRemaining = decrementUnitsRemaining(unitsRemaining);
    yield unitsRemaining;
  }
}
export function* makeHybridTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  let unitsRemaining = getUnitsRemaining(deadlineMs);
  yield unitsRemaining;
  while (true) {
    const secondsRemaining = unitsRemaining.seconds;
    unitsRemaining =
      secondsRemaining === 33
        ? getUnitsRemaining(deadlineMs)
        : decrementUnitsRemaining(unitsRemaining);
    yield unitsRemaining;
  }
}
function decrementUnitsRemaining(unitsRemaining) {
  const {
    days: oldDays,
    hours: oldHours,
    minutes: oldMinutes,
    seconds: oldSeconds,
  } = unitsRemaining;

  const hasDays = oldDays > 0;
  const hasHours = oldHours > 0;
  const hasMinutes = oldMinutes > 0;
  const hasSeconds = oldSeconds > 0;
  if (!hasDays && !hasHours && !hasMinutes && !hasSeconds)
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

  const newSeconds = hasSeconds || hasMinutes ? decrementValue(oldSeconds) : 0;
  const newMinutes =
    newSeconds === 59 && (hasHours || hasMinutes)
      ? decrementValue(oldMinutes)
      : oldMinutes;
  const newHours =
    newMinutes === 59 && (hasHours || hasDays)
      ? decrementValue(oldHours, 23)
      : oldHours;
  const newDays = newHours === 23 ? Math.max(0, oldDays - 1) : oldDays;
  return {
    days: newDays,
    hours: newHours,
    minutes: newMinutes,
    seconds: newSeconds,
  };
}
function decrementValue(oldValue, upperLimit = 59) {
  return oldValue > 0 ? oldValue - 1 : upperLimit;
}
