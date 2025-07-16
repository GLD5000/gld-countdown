declare function makeTimer(deadlineString: string): () => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

declare const countdownString = "(()=>{function f(e){let n=p(e);if(n<1)return{days:0,hours:0,minutes:0,seconds:0};let t=n%60,i=Math.floor(n/60%60),c=Math.floor(n/60/60)%24;return{days:Math.floor(n/60/60/24),hours:c,minutes:i,seconds:t}}function m(e){return Date.parse(e)}function p(e){let n=Date.now(),t=e-n;return Math.floor(t*.001)}function l(e){let n=m(e),t=i();return()=>{c(t,f(n))};function i(){let o=document.querySelectorAll(\".gld-countdown-digits\"),r={};return o.forEach(s=>{let d=s.getAttribute(\"id\").replace(\"gld-countdown-\",\"\");r[d]=s}),r}function c(o,r){Object.entries(o).forEach(s=>{let[d,a]=s,u=r[d].toString().padStart(2,\"0\"),g=a.innerHTML;u!=g&&(a.innerHTML=u)})}}var M=l(\"2025-07-20 23:59:59\");setInterval(()=>{M()},1e3);})();";

export { countdownString, makeTimer };
