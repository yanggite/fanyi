const XLSX = require('xlsx');  
const fs = require('fs');  
const path = require('path');  
  

const excelFilePath = path.join(__dirname, 'translations.xlsx');
const workbook = XLSX.readFile(excelFilePath);  
  

const firstSheetName = workbook.SheetNames[0];  
const worksheet = workbook.Sheets[firstSheetName];  
const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });  
  

const englishObj = {};  
const chineseObj = {};  
  

jsonData.slice(1).forEach((row) => {  
  const key = row[0];  
  const english = row[1];  
  const chinese = row[2];  
  
  if (key && english) {  
    englishObj[key] = english;  
  }  
  if (key && chinese) {  
    chineseObj[key] = chinese;  
  }  
});  
  

const englishJsonFilePath = path.join(__dirname, 'english.json');  
const chineseJsonFilePath = path.join(__dirname, 'chinese.json');  
  
fs.writeFileSync(englishJsonFilePath, JSON.stringify(englishObj, null, 2), 'utf8');  
fs.writeFileSync(chineseJsonFilePath, JSON.stringify(chineseObj, null, 2), 'utf8');  
  
console.log('successfully!');
