import { getAllGreenPlants, getGreenPlantById } from '../services/plantsGreen.js';
import createHttpError from 'http-errors';

export const getGreenPlantsController = async (req, res, next) => {
    try {
    const green = await getAllGreenPlants();

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
