import { getAllGreenPlants, getGreenPlantById, createGreenPlant, deleteGreenPlant, updateGreenPlant } from '../services/plantsGreen.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseGreenSortParams } from '../utils/parseGreenSortParams.js';
import { parseGreenFilterParams } from '../utils/parseGreenFilterParams.js';

export const getGreenPlantsController = async (req, res, next) => {
    try {
      const { page, perPage } = parsePaginationParams(req.query);
      const { sortBy, sortOrder } = parseGreenSortParams(req.query);
      const filter = parseGreenFilterParams(req.query);
      const green = await getAllGreenPlants({
        page,
        perPage,
        sortBy,
        sortOrder,
        filter,
      });

    res.status(200).json({
      status: 200,
      message: "Successfully found Green Plants!",
      data: green,
    });
    } catch(err) {
        next(err);
    }
    };

  export const getGreenPlantByIdController = async (req, res, next) => {
    const { greenPlantId } = req.params;
    const greenOne = await  getGreenPlantById(greenPlantId);

	if (!greenOne) {
    throw createHttpError(`Green Plant not found with id ${greenPlantId}!`);

	}

    res.status(200).json({
      status: 200,
      message: `Successfully found Green Plant with id ${greenPlantId}!`,
      data: greenOne,
    });
  };

 export const createGreenPlantController = async (req, res, next) => {
    const greenPlant = await createGreenPlant(req.body);

    res.status(201).json({
      status: 201,
      message: `Successfully created a Green Plant!`,
      data: greenPlant,
  });
 };

 export const deleteGreenPlantController = async (req, res, next) => {
  const { greenPlantId } = req.params;
  const greenOne = await deleteGreenPlant(greenPlantId);
  if (!greenOne) {
    next(createHttpError(404, 'Green Plant not found'));
    return;
  }

  res.json({
    status: 200,
    message: `Successfully deleted a Green Plant with Id ${greenPlantId}!`
  });

 };

 export const upsertGreenPlantController = async (req, res, next) => {
  const { greenPlantId } = req.params;
  const result = await updateGreenPlant(greenPlantId, req.body, {
    upsert: true,
  });

  if (!result) {
    next(createHttpError(404, 'Green Plant not found'));
    return;
  };
  const status = result.isNew ? 201 : 200;
  res.status(status).json({
        status,
        message: `Successfully upserted a Green Plant!`,
        data: result.greenPlant,
      });
};

export const patchGreenPlantController = async (req, res, next) => {
  const { greenPlantId } = req.params;
  const result = await updateGreenPlant( greenPlantId, req.body);
  if (!result) {
        next(createHttpError(404, 'Green Plant not found'));
        return;
      }
      res.json({
            status: 200,
            message: `Successfully patched a Green Plant!`,
            data: result.greenPlant,
          });
};

