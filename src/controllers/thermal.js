import { getAllThermalPlants, getThermalPlantById, createThermalPlant,  deleteThermalPlant, updateThermalPlant } from '../services/plantsThermal.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseThermalSortParams } from '../utils/parseThermalSortParams.js';
import { parseThermalFilterParams } from '../utils/parseThermalFilterParams.js';

export const getAllThermalPlantsController = async (req, res, next) => {
  try {
    const { page, perPage } = parsePaginationParams(req.query);
    const { sortBy, sortOrder } = parseThermalSortParams(req.query);
    const filter = parseThermalFilterParams(req.query);
    const thermal = await getAllThermalPlants({page, perPage, sortBy, sortOrder, filter});

    res.status(200).json({
      status: 200,
      message: "Successfully found Thermal Plants!",
      data: thermal,
    });
  } catch(err) {
    next(err);
}
  };

  export const getThermalPlantByIdController = async (req, res, next) => {
    const { thermalPlantId } = req.params;
    const thermalOne = await  getThermalPlantById(thermalPlantId);

	if (!thermalOne) {
    throw createHttpError(`Thermal Plant not found with id ${thermalPlantId}!`);

	}

    res.status(200).json({
      status: 200,
      message: `Successfully found Thermal Plant with id ${thermalPlantId}!`,
      data: thermalOne,
    });
  };

  export const createThermalPlantController = async (req, res, next) => {
    const greenPlant = await createThermalPlant(req.body);

    res.status(201).json({
      status: 201,
      message: `Successfully created a Thermal Plant!`,
      data: greenPlant,
  });
 };


 export const deleteThermalPlantController = async (req, res, next) => {
  const { thermalPlantId } = req.params;
  const greenOne = await  deleteThermalPlant(thermalPlantId);
  if (!greenOne) {
    next(createHttpError(404, 'Green Plant not found'));
    return;
  }
  res.json({
    status: 200,
    message: `Successfully deleted a Thermal Plant with Id ${thermalPlantId}!`
  });
 };

 export const upsertThermalPlantController = async (req, res, next) => {
  const { thermalPlantId } = req.params;
  const result = await updateThermalPlant(thermalPlantId, req.body, {
    upsert: true,
  });

  if (!result) {
    next(createHttpError(404, 'Thermal Plant not found'));
    return;
  };
  const status = result.isNew ? 201 : 200;
  res.status(status).json({
        status,
        message: `Successfully upserted a Thermal Plant!`,
        data: result.thermalPlant,
      });
};

export const patchThermalPlantController = async (req, res, next) => {
  const { thermalPlantId } = req.params;
  const result = await updateThermalPlant( thermalPlantId, req.body);
  if (!result) {
        next(createHttpError(404, 'Thermal Plant not found'));
        return;
      }
      res.json({
            status: 200,
            message: `Successfully patched a Thermal Plant!`,
            data: result.thermalPlant,
          });
};
