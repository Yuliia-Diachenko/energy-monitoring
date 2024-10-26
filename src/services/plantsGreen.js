import { PlantsGreenCollection } from "../db/models/plantsGreen.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";

export const getAllGreenPlants = async ({ page, perPage }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const greenQuery = PlantsGreenCollection.find();
  const greenCount = await PlantsGreenCollection.find()
      .merge(greenQuery)
      .countDocuments();

  const green = await greenQuery.skip(skip).limit(limit).exec();
  const paginationData = calculatePaginationData(greenCount, perPage, page);

  return {
    data: green,
    ...paginationData,
  };;
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

