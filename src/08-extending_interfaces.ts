// 👤 Base interface — every person has a name and an email
interface Person {
   name: string;
   email: string;
}

// 💼 Employee is a person… but with an extra twist: an employee ID!
interface Employee extends Person {
   employeeId: number;
}

// 📨 This function expects a complete Employee — inherited + own properties
function getEmployeeData(employeeObj: Employee) {
   console.log('Employee data successfully');
}

// ✅ Passing a proper Employee object — Person + employeeId = all set!
getEmployeeData({
   name: 'Sumit',
   email: 'sumit@gmail.com',
   employeeId: 1234,
});
