import xlsx from 'xlsx';
import fs from 'fs';

// Зчитування даних з Excel
const workbook = xlsx.readFile('src/lib/thermal/2020_12_31_en_vidpusk_teplo_heneratsiia.xlsx');
const sheet_name_list = workbook.SheetNames;
const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// Конвертація в JSON
fs.writeFileSync('src/lib/thermal/data.json', JSON.stringify(jsonData, null, 2));

console.log('Конвертація завершена!');
