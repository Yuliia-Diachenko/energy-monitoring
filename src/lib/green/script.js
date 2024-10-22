import xlsx from 'xlsx';
import fs from 'fs';

// Зчитування даних з Excel
const workbook = xlsx.readFile('src/lib/green/2021_12_31_en_vyrobnytstvo_vde_zahalno.xlsx');
const sheet_name_list = workbook.SheetNames;
const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// Конвертація в JSON
fs.writeFileSync('src/lib/green/data.json', JSON.stringify(jsonData, null, 2));

console.log('Конвертація завершена!');
