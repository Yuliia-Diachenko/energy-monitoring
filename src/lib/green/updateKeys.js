import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Визначення поточного шляху для ES модулів
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const updateKeysInFile = (filePath) => {
    const rawData = fs.readFileSync(filePath);
    const jsonData = JSON.parse(rawData);

    const updatedData = jsonData.map(item => {
        const { "GeneratedElectricityAmount,MillionKWh": value, ...rest } = item;
        return {
            ...rest,
            GeneratedElectricityAmount: value,
        };
    });

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    console.log(`Ключі у файлі ${filePath} успішно оновлено!`);
};

const filePath = join(__dirname, '..', 'green', 'data.json'); // Вказано шлях до файлу
updateKeysInFile(filePath);
