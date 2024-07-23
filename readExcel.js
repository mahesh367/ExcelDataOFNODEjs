const xlsx = require('xlsx');
const path = require('path');

// Provide the correct absolute path to your Excel file
const filePath = 'C:\\Users\\mahes\\OneDrive\\Desktop\\myworkbook.xlsx';

// Load the Excel file
const workbook = xlsx.readFile(filePath);

// Select the first sheet in the workbook
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// Convert sheet to JSON
const data = xlsx.utils.sheet_to_json(worksheet);

// Log the data
console.log(data);




