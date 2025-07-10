// 🚂 Train class — a blueprint for all kinds of trains in the railway universe
class Train {
   // 🌍 A static property — shared across all trains, belongs to the class itself
   static country = 'India';

   constructor(
      readonly trainId: string, // 🆔 Unique and unchangeable train identifier
      public type: string, // 🚆 Type of train: express, passenger, goods
      public _name: string, // 🏷️ Internal name property (used with getter/setter)
      public year: number, // 📅 Year the train was launched
      public coaches: number, // 🚪 Number of coaches attached
      public isRunning?: boolean // 🟢 Optional: Is it currently running?
   ) {}

   // 📣 Method that announces how many coaches this train has
   trainDepart() {
      console.log(`${this.name} has ${this.coaches} coaches`);
   }

   // 🪪 Method to print the unique train ID
   printTrainId() {
      console.log(this.trainId);
   }

   // 🔓 Getter for train name — reads the internal _name
   get name() {
      return this._name;
   }

   // ✍️ Setter for train name — assigns a new name
   set name(value: string) {
      this._name = value;
   }
}

// 🛤️ Creating a new train instance using the class
const t1 = new Train('#12112', 'express', 'shatabdi', 1990, 16);

// 📦 Logging all details of the train
console.log(t1);

// 🕹️ Announcing departure with coach count
t1.trainDepart();

// 🔍 Accessing the train's name using the getter
console.log(t1.name);

// 🌐 Accessing the static property (country)
console.log(Train.country);
