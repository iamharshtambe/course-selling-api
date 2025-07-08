// 🧩 Defining the shape of a user object — like a blueprint for user data
interface User {
   name: string; // Full name of the user
   email: string; // User's email address
   password: string; // Secure stuff 🔐
   age: number; // Age in numbers, obviously
   gender?: string; // Optional — not every form asks for this
}

// 📥 A function that accepts only a properly structured User object
function getUserData(userObj: User) {
   console.log('User data successfully'); // Imagine sending it to a DB or API
}

// 🎯 Passing a valid object — follows the blueprint exactly!
getUserData({
   name: 'Harsh',
   email: 'harsh@gmail.com',
   password: 'harsh@1234',
   age: 22,
   // gender is optional, so it's okay to omit it
});
