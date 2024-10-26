import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { format } from 'date-fns';

// Функція для перетворення числового формату дати в формат `день.місяць.рік`
const convertExcelDateToDateString = (excelDate) => {
    const excelEpoch = new Date(1899, 11, 30); // 30th Dec 1899
    const date = new Date(excelEpoch.getTime() + excelDate * 86400000); // 86400000 ms = 1 day
    return format(date, 'dd.MM.yyyy');
};

// Визначення поточного шляху для ES модулів
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const updateDateFormatInFile = (filePath) => {
    const rawData = fs.readFileSync(filePath);
    const jsonData = JSON.parse(rawData);

    const updatedData = jsonData.map(item => ({
        ...item,
        DateStart: convertExcelDateToDateString(item.DateStart),
        DateEnd: convertExcelDateToDateString(item.DateEnd),
    }));

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    console.log(`Формат дат у файлі ${filePath} успішно оновлено!`);
};

const filePath = join(__dirname, '..', 'green', 'data.json'); // Вказано шлях до файлу
updateDateFormatInFile(filePath);
