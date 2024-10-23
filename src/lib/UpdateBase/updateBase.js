import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';


// Визначення поточної директорії
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const files = [
    // '../green/data.json',
    '../thermal/data.json'
];

const toCamelCase = str => str.replace(/([-_ ][a-z])/gi, (match) => match.toUpperCase().replace('-', '').replace('_', '').replace(' ', ''));

const transformKeys = obj => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(transformKeys);
    }

    return Object.keys(obj).reduce((acc, key) => {
        const camelCaseKey = toCamelCase(key);
        acc[camelCaseKey] = transformKeys(obj[key]);
        return acc;
    }, {});
};

files.forEach(file => {
    const filePath = join(__dirname, file); // Оновлено шлях до файлів
    const rawData = fs.readFileSync(filePath);
    const jsonData = JSON.parse(rawData);

    const transformedData = transformKeys(jsonData);

    fs.writeFileSync(filePath, JSON.stringify(transformedData, null, 2));
    console.log(`Файл ${file} успішно оновлено!`);
});
