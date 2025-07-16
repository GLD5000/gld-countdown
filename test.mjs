// import * as countdown from "./dist/index.mjs";
import fs from "fs";

// let document ={}
// const timeString = "2025-08-18 20:51";
// const timer = countdown.makeTimer(timeString);

// setInterval(() => {
//   console.log("Remaining: ", timer());
// }, 1000);

// console.log(countdown.countdownString);
const string = fs.readFileSync("dist/scriptable.global.js", 'utf8');
console.log('string:', string);
const prepend = "const string = String.raw`"
const append = "`;\n\nexport const countdownString = string;"
fs.writeFileSync('src//countdownString.ts',prepend+string+append)