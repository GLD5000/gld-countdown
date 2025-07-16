import { parseDeadline, getUnitsRemaining } from "./scriptable/countdownScriptable";

export function makeTimer(deadlineString: string) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}