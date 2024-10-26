import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { patchThermalPlantController, upsertThermalPlantController, createThermalPlantController, getAllThermalPlantsController, getThermalPlantByIdController, deleteThermalPlantController } from "../controllers/thermal.js";

const router = Router();

  router.get('/powerPlants/thermal', ctrlWrapper(getAllThermalPlantsController));

  router.get('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(getThermalPlantByIdController));

  router.post('/powerPlants/thermal', ctrlWrapper(createThermalPlantController));

  router.delete('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(deleteThermalPlantController));

  router.put('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(upsertThermalPlantController));

  router.patch('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(patchThermalPlantController));

export default router;
