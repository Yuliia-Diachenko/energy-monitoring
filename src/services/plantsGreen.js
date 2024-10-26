import { PlantsGreenCollection } from "../db/models/plantsGreen.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";
import { SORT_ORDER } from "../constants/index.js";

export const getAllGreenPlants = async ({
          page = 1,
          perPage = 10,
          sortOrder = SORT_ORDER.ASC,
          sortBy = '_id',
          filter = {},
         }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const greenQuery = PlantsGreenCollection.find();
  if (filter.PowerPlantType) {
    greenQuery.where('PowerPlantType').equals(filter.PowerPlantType);
  }
  if (filter.minDateStart) {
    greenQuery.where('DateStart').gte(filter.minDateStart);
  }
  if (filter.maxDateStart) {
    greenQuery.where('DateStart').lte(filter.maxDateStart);
  }
  if (filter.maxDateEnd) {
    greenQuery.where('DateEnd').lte(filter.maxDateEnd);
  }
  if (filter.minDateEnd) {
   greenQuery.where('DateEnd').gte(filter.minDateEnd);
  }
  if (filter. minGeneratedElectricityAmount) {
    greenQuery.where('GeneratedElectricityAmount').gte(filter.minGeneratedElectricityAmount);
  }
  if (filter. maxGeneratedElectricityAmount) {
    greenQuery.where('GeneratedElectricityAmount').lte(filter.maxGeneratedElectricityAmount);
  }

  const [greenCount, green] = await Promise.all([
    PlantsGreenCollection.find().merge(greenQuery).countDocuments(),
    greenQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(greenCount, perPage, page);

  return {
    data: green,
    ...paginationData,
  };
};

export const getGreenPlantById = async (greenPlantId) => {
  const greenOne = await PlantsGreenCollection.findById(greenPlantId);
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

