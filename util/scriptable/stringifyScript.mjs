import fs from "fs";

const string = fs.readFileSync("dist/scriptable.global.js", 'utf8');
const prepend = "const string = String.raw`"
const append = "`;\n\nexport const countdownString = string;"
fs.writeFileSync('src/countdownString.ts',prepend+string+append)