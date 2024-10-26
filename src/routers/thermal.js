import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from "../middlewares/validateBody.js";
import { createThermalPlantValidationSchema, updateThermalPlantValidationSchema } from "../validation/thermalPlant.js";
import { patchThermalPlantController, upsertThermalPlantController, createThermalPlantController, getAllThermalPlantsController, getThermalPlantByIdController, deleteThermalPlantController } from "../controllers/thermal.js";

const router = Router();

  router.get('/powerPlants/thermal', ctrlWrapper(getAllThermalPlantsController));

  router.get('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(getThermalPlantByIdController));

  router.post('/powerPlants/thermal', validateBody(createThermalPlantValidationSchema),ctrlWrapper(createThermalPlantController));

  router.delete('/powerPlants/thermal/:thermalPlantId', ctrlWrapper(deleteThermalPlantController));

  router.put('/powerPlants/thermal/:thermalPlantId', validateBody(updateThermalPlantValidationSchema), ctrlWrapper(upsertThermalPlantController));

  router.patch('/powerPlants/thermal/:thermalPlantId', validateBody(updateThermalPlantValidationSchema), ctrlWrapper(patchThermalPlantController));

export default router;
