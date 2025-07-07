// 🚫 'void' — a function that returns nothing, just does its job and leaves
function hello(): void {
   console.log('Hello!');
}

// ❓ 'null' — the intentional absence of a value (like: “I’ve got nothing, and that’s on purpose”)
let username: string | null;

// 🤷 'undefined' — a variable that hasn’t been given a value yet (like: “I exist, but don’t know what I am”)
let value: undefined;

// ♾️ 'never' — a function that never finishes, never returns, and never surrenders
function neverType(): never {
   while (true) {} // Infinite loop — this function traps you forever 😈
}
neverType(); // ☠️ Beware: the code below this will never run!
console.log('Hello!'); // ❌ Unreachable
