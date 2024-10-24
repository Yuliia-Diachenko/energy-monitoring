import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getAllThermalPlantsController, getThermalPlantByIdController } from "../controllers/thermal.js";

const router = Router();

  router.get('/powerPlants/thermal', ctrlWrapper(getAllThermalPlantsController));

  router.get('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(getThermalPlantByIdController));

export default router;
