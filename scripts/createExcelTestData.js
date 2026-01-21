const XLSX = require('xlsx');
const path = require('path');

// Create a new workbook
const workbook = XLSX.utils.book_new();

// Sample test data for login
const loginData = [
  { username: 'standard_user', password: 'secret_sauce', expectedResult: 'success' },
  { username: 'locked_out_user', password: 'secret_sauce', expectedResult: 'locked' },
  { username: 'problem_user', password: 'secret_sauce', expectedResult: 'success' }
];

// Sample test data for users
const userData = [
  { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '1234567890' },
  { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '0987654321' },
  { firstName: 'Bob', lastName: 'Johnson', email: 'bob@example.com', phone: '5555555555' }
];

// Create worksheets
const loginSheet = XLSX.utils.json_to_sheet(loginData);
const userSheet = XLSX.utils.json_to_sheet(userData);

// Add worksheets to workbook
XLSX.utils.book_append_sheet(workbook, loginSheet, 'LoginCredentials');
XLSX.utils.book_append_sheet(workbook, userSheet, 'Users');

// Write to file
const filePath = path.join(__dirname, '../test-data/testdata.xlsx');
XLSX.writeFile(workbook, filePath);

console.log(`Excel file created successfully at: ${filePath}`);
