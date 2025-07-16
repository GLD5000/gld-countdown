import { parseDeadline, getUnitsRemaining } from "./scriptable/scriptable";

export function makeTimer(deadlineString: string) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}