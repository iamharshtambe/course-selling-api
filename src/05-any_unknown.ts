// 🌀 'any' — the wild child of TypeScript, accepts anything and does everything (dangerously!)
let value1: any;

value1 = 24;
value1 = true;
value1 = 'Harsh';

value1.toUpperCase(); // ✅ No error, but TypeScript won’t stop you from crashing your app

// 🔒 'unknown' — the mysterious one. Accepts anything, but won’t let you touch it without checking
let value2: unknown;

value2 = 15;
value2 = false;
value2 = 'Riya';

// ❌ Not allowed — TS says: “I don’t know what this is, so I won’t let you break things”
let result2 = value2.toUpperCase(); // Error!

// ✅ Safe and smart — check the type before use
if (typeof value2 === 'string') {
   value2.toUpperCase(); // ✅ Now TS is happy
}
