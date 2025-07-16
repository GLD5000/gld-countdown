declare function makeTimer(deadlineString: string): () => void;

declare const countdownString: string;

export { countdownString, makeTimer };
