// Write your solution in this file!
let employee = {
    name: 'Sam'
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }; // Create a new object with the new key-value pair
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Modify the original object
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Clone the employee
    delete newEmployee[key]; // Delete the key from the clone
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Modify the original object
    return employee;
  }
  