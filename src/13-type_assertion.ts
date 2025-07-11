// 🎭 'any' means TypeScript has no clue what this is
let someValue: any = 'Hello World';

// 🧠 But we *know* it's a string, so we assert its type to access string-specific features
let strLength: number = (someValue as string).length;

// 📏 Now we can safely get the length without errors
console.log(`String length is: ${strLength}`);
