// 🚂 Train class — a blueprint for all kinds of trains
class Train {
   constructor(
      public type: string, // Type of train: express, passenger, goods
      public name: string, // Name of the train (e.g., Shatabdi)
      public year: number, // Year the train was launched
      public coaches: number, // Number of coaches it has
      public isRunning: boolean // Is the train currently running?
   ) {}

   // 📣 Method to announce train departure
   trainDepart() {
      console.log(`${this.name} has ${this.coaches} coaches`);
   }
}

// 🛤️ Creating an instance of Train
const t1 = new Train('express', 'shatabdi', 1990, 16, true);

// 📦 Logging train info and triggering the departure method
console.log(t1);
t1.trainDepart();
