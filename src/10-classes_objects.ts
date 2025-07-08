// 🚂 A blueprint for trains — defines how every train object should look and behave
class Train {
   constructor(
      public type: string, // e.g., express, passenger, goods
      public name: string, // train name like 'Shatabdi'
      public year: number, // year of launch/manufacture
      public coaches: number, // how many coaches the train has
      public isRunning: boolean // whether the train is currently running
   ) {}
}

// 🛤️ Creating a train instance using the class
const t1 = new Train('express', 'shatabdi', 1990, 16, true);

// 📦 Logging the train details
console.log(t1);
