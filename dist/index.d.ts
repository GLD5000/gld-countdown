declare function makeTimer(deadlineString: string): () => {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

declare const countdownString: string;

export { countdownString, makeTimer };
