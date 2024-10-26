import { PlantsThermalCollection } from "../db/models/plantsThermal.js";
import { calculatePaginationData } from "../utils/calculatePaginationData.js";
import { SORT_ORDER } from "../constants/index.js";

export const getAllThermalPlants = async ({
      page = 1,
      perPage = 10,
      sortOrder = SORT_ORDER.ASC,
      sortBy = '_id',
      filter = {},
 }) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const thermalQuery = PlantsThermalCollection.find();

  if (filter.PowerPlantType) {
    thermalQuery.where('PowerPlantType').equals(filter.PowerPlantType);
  }
  if (filter.minDateStart) {
    thermalQuery.where('DateStart').gte(filter.minDateStart);
  }
  if (filter.maxDateStart) {
    thermalQuery.where('DateStart').lte(filter.maxDateStart);
  }
  if (filter.maxDateEnd) {
    thermalQuery.where('DateEnd').lte(filter.maxDateEnd);
  }
  if (filter.minDateEnd) {
   thermalQuery.where('DateEnd').gte(filter.minDateEnd);
  }

  if (filter.maxHeatOutputAmount) {
    thermalQuery.where('HeatOutputAmountt').lte(filter.maxHeatOutputAmount);
  }
  if (filter.minHeatOutputAmount) {
    thermalQuery.where('HeatOutputAmount').gte(filter.minHeatOutputAmount);
  }
  const [thermalCount, thermal] = await Promise.all([
    PlantsThermalCollection.find().merge(thermalQuery).countDocuments(),
    thermalQuery
      .skip(skip)
      .limit(limit)
      .sort({ [sortBy]: sortOrder })
      .exec(),
  ]);

  const paginationData = calculatePaginationData(thermalCount, perPage, page);

  return {
    data: thermal,
    ...paginationData,
  };
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
