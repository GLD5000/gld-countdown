# [@gld5000-cli/countdown](https://www.npmjs.com/package/@gld5000-cli/countdown)

A simple, lightweight countdown timer to a given deadline

## Install

```
npm i @gld5000-cli/countdown
```

## Example Usage

### Import (.mjs)

```
import * as countdown from '@gld5000-cli/countdown'
```

### Example Input

```
const timeString = "2025-08-18 20:51";
const timer = countdown.makeTimer(timeString);

setInterval(() => {
  console.log("Remaining: ", timer());
}, 1000);
```
console.log(countdown.countdownString)
### Example Output

```
Remaining:  { days: 34, hours: 12, minutes: 13, seconds: 3 }
Remaining:  { days: 34, hours: 12, minutes: 13, seconds: 2 }
Remaining:  { days: 34, hours: 12, minutes: 13, seconds: 1 }
Remaining:  { days: 34, hours: 12, minutes: 13, seconds: 0 }
Remaining:  { days: 34, hours: 12, minutes: 12, seconds: 59 }
Remaining:  { days: 34, hours: 12, minutes: 12, seconds: 58 }
Remaining:  { days: 34, hours: 12, minutes: 12, seconds: 57 }
Remaining:  { days: 34, hours: 12, minutes: 12, seconds: 56 }

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
```

## Update

```
npm update @gld5000-cli/countdown
```

## Uninstall

```
npm uninstall @gld5000-cli/countdown
```

## License

MIT License

Copyright (c) 2025 Gareth L Devlin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
