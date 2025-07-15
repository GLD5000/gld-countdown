import * as fs from 'fs';

const string = fs
  .readFileSync("./src/countdown.mjs", "utf8")
  .replaceAll("export ", "");
// console.log(`${string}`);
export const countdownString = string;
