// 🧠 A flexible info function — takes details and prints them out
function info(
   name: string = 'Unknown', // 🏷️ Default name if not provided
   age: number, // 🎂 Required: person's age
   printInfo: (value: string) => void, // 📣 Function that prints a message (callback)
   gender?: string // 🚻 Optional: gender (can be skipped)
) {
   // 🔔 Calling the passed-in function
   printInfo('This is my info:');

   // 🗣️ Logging personal details
   console.log(`My name is ${name} and I am ${age} years old`);
}

// 📞 Calling the function with required args + a simple callback
info('Harsh', 22, (value: string) => console.log(value));
