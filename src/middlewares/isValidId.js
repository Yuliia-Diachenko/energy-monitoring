import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidIdGreen = (req, res, next) => {
  const { greenPlantId } = req.params;
  if (!isValidObjectId(greenPlantId)) {
    throw createHttpError(400, 'Bad Request');
  }

  next();
};

export const isValidIdThermal = (req, res, next) => {
    const { thermalPlantId } = req.params;
    if (!isValidObjectId(thermalPlantId)) {
      throw createHttpError(400, 'Bad Request');
    }

    next();
  };
