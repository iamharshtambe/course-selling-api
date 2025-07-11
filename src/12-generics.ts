// 🔁 A generic function — 'T' can be any type, passed at the time of calling
function callme<T>(value: T) {
   console.log(value);
}

// 🧑‍💻 Calling the function with different types
callme<string>('Harsh'); // 📦 T becomes string
callme<number>(24); // 📦 T becomes number
callme<boolean>(true); // 📦 T becomes boolean

// 🍱 A generic interface — allows 'type' to be flexible (e.g., string, number, object)
interface Food<T> {
   name: string; // 🏷️ Name of the food item
   taste: string; // 😋 How it tastes (Spicy, Sweet, etc.)
   type: T; // 🔁 Type of food — can be anything: string, object, enum, etc.
}

// 🍽️ A function that takes a food object with a specific 'type' (in this case, string)
function thisIsFood(foodObj: Food<string>) {
   console.log(foodObj);
}

// ✅ Passing a valid Food object where 'type' is a string
thisIsFood({ name: 'Samosa', taste: 'Spicy', type: 'Veg' });

// 👨‍🍳 A generic class — 'T' allows the name to be of any type (string, number, etc.)
class FoodMaker<T> {
   constructor(public name: T) {}
}

// 🥪 Creating an instance with type 'string'
const food = new FoodMaker<string>('Sandwich');

console.log(food);
