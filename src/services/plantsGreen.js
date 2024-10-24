import { PlantsGreenCollection } from "../db/models/plantsGreen.js";

export const getAllGreenPlants = async () => {
  const green = await PlantsGreenCollection.find();
  console.log('Запит на green:', green); // Додаємо логування
  return green;
};

export const getGreenPlantById = async (greenPlantId) => {
  const greenOne = await PlantsGreenCollection.findById(greenPlantId);
  console.log(`Запит на green з ID ${greenPlantId}:`, greenOne); // Додаємо логування
  return greenOne;
};

