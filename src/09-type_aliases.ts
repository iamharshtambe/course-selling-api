// 🆔 Giving a new name to a primitive — now 'UserId' means a number
type UserId = number;
const id: UserId = 1234;

// 🚦 A union of string literals — only one of these exact values is allowed
type Status = 'pending' | 'success' | 'error';
let orderStatus: Status = 'pending';

// 🧱 Defining a custom object type — 'User' has a name and age
type User2 = {
   name: string;
   age: number;
};

// 👤 Creating a user with the defined structure
const harsh: User2 = {
   name: 'Harsh',
   age: 21,
};

// ➕ Function type alias — describes the shape of an "add" function
type Add = (a: number, b: number) => number;
const add: Add = (x, y) => x + y;

// 🧑‍🤝‍🧑 Tuple type alias — a fixed-length array with specific types in order
type NameAge = [string, number];
const person: NameAge = ['Harsh', 21];

// 🔗 Combining two types using intersection (&) — merging A and B
type A = { a: string };
type B = A & { b: number };
const example: B = { a: 'foo', b: 123 }; // ✅ Must have both 'a' and 'b'
