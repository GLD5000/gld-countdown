import { parseDeadline, getUnitsRemaining } from "../util/scriptable/scriptable";

export function makeTimer(deadlineString: string) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}