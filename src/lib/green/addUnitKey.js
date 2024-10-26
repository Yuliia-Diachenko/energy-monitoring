import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Визначення поточного шляху для ES модулів
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const addUnitKeyInFile = (filePath) => {
    const rawData = fs.readFileSync(filePath);
    const jsonData = JSON.parse(rawData);

    const updatedData = jsonData.map(item => ({
        ...item,
        Unit: "MillionKWh",
    }));

    fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
    console.log(`Ключ "Unit" у файлі ${filePath} успішно додано!`);
};

const filePath = join(__dirname, '..', 'green', 'data.json'); // Вказано шлях до файлу
addUnitKeyInFile(filePath);
