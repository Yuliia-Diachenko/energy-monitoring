import { PlantsThermalCollection } from "../db/models/plantsThermal.js";

export const getAllThermalPlants = async () => {
  const thermal = await PlantsThermalCollection.find();

  return thermal;
};

export const getThermalPlantById = async (thermalPlantId) => {
  const thermalOne = await PlantsThermalCollection.findById(thermalPlantId);

  return thermalOne;
};

export const createThermalPlant = async (payload) => {
  const thermalPlant = await PlantsThermalCollection.create(payload);

  return thermalPlant;
};

export const deleteThermalPlant = async (thermalPlantId) => {
  const thermalOne = await PlantsThermalCollection.findOneAndDelete({_id: thermalPlantId});

  return thermalOne;
  };

  export const updateThermalPlant = async  ( thermalPlantId, payload, options= {}) => {
    const rawResult = await PlantsThermalCollection.findOneAndUpdate({_id: thermalPlantId}, payload,  {
          new: true,
          includeResultMetadata: true,
          ...options,
        },);
        if (!rawResult || !rawResult.value) return null;
    return {
        greenPlant: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    } ;
  };
