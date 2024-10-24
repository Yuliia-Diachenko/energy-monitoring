import { getAllThermalPlants, getThermalPlantById } from '../services/plantsThermal.js';
import createHttpError from 'http-errors';

export const getAllThermalPlantsController = async (req, res, next) => {
  try {
    const thermal = await getAllThermalPlants();

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
