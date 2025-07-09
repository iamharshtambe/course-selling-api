// 🚂 Train class — a blueprint for all kinds of trains
class Train {
   constructor(
      readonly trainId: string, // Train ID
      public type: string, // Type of train: express, passenger, goods
      public _name: string, // Name of the train (e.g., Shatabdi)
      public year: number, // Year the train was launched
      public coaches: number, // Number of coaches it has
      public isRunning?: boolean // Is the train currently running?
   ) {}

   // 📣 Method to announce train departure
   trainDepart() {
      console.log(`${this.name} has ${this.coaches} coaches`);
   }

   printTrainId() {
      console.log(this.trainId);
   }

   get name() {
      return this._name;
   }

   set name(value: string) {
      this.name = value;
   }
}

// 🛤️ Creating an instance of Train
const t1 = new Train('#12112', 'express', 'shatabdi', 1990, 16);

// 📦 Logging train info and triggering the departure method
console.log(t1);

t1.trainDepart();

console.log(t1.name);
