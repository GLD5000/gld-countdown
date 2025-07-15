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

// src/countdown.ts
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
function makeTimer(deadlineString) {
  const deadlineMs = parseDeadline(deadlineString);
  return () => {
    return getUnitsRemaining(deadlineMs);
  };
}

// src/countdownString.ts
var string = `/**
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
var countdownString = string;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  countdownString,
  makeTimer
});
