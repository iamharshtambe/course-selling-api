function info(
   name: string = 'Unknown',
   age: number,
   printInfo: (value: string) => void,
   gender?: string
) {
   printInfo('This is my info:');
   console.log(`My name is ${name} and I am ${age} years old`);
}

info('Harsh', 22, (value: string) => console.log(value));
