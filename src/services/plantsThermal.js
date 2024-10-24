import { PlantsThermalCollection } from "../db/models/plantsThermal.js";

export const getAllThermalPlants = async () => {
  const thermal = await PlantsThermalCollection.find();

  return thermal;
};

export const getThermalPlantById = async (thermalPlantId) => {
  const thermalOne = await PlantsThermalCollection.findById(thermalPlantId);

  return thermalOne;
};
