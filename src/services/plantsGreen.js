import { PlantsGreenCollection } from "../db/models/plantsGreen.js";

export const getAllGreenPlants = async () => {
  const green = await PlantsGreenCollection.find();
  console.log('Запит на green:', green);
  return green;
};

export const getGreenPlantById = async (greenPlantId) => {
  const greenOne = await PlantsGreenCollection.findById(greenPlantId);
  console.log(`Запит на green з ID ${greenPlantId}:`, greenOne);
  return greenOne;
};

export const createGreenPlant = async (payload) => {
const greenPlant = await PlantsGreenCollection.create(payload);
return greenPlant;
};

export const deleteGreenPlant = async (greenPlantId) => {
  const greenOne = await PlantsGreenCollection.findOneAndDelete({_id: greenPlantId});
  return greenOne;
};

export const updateGreenPlant = async  (greenPlantId, payload, options= {}) => {
  const rawResult = await PlantsGreenCollection.findOneAndUpdate({_id: greenPlantId}, payload,  {
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

