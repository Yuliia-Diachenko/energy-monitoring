import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from "../middlewares/validateBody.js";
import { isValidIdThermal } from "../middlewares/isValidId.js";
import { createThermalPlantValidationSchema, updateThermalPlantValidationSchema } from "../validation/thermalPlant.js";
import { patchThermalPlantController, upsertThermalPlantController, createThermalPlantController, getAllThermalPlantsController, getThermalPlantByIdController, deleteThermalPlantController } from "../controllers/thermal.js";

const router = Router();

  router.get('/powerPlants/thermal', ctrlWrapper(getAllThermalPlantsController));

  router.get('/powerPlants/thermal/:thermalPlantId', isValidIdThermal, ctrlWrapper(getThermalPlantByIdController));

  router.post('/powerPlants/thermal', validateBody(createThermalPlantValidationSchema),ctrlWrapper(createThermalPlantController));

  router.delete('/powerPlants/thermal/:thermalPlantId', isValidIdThermal, ctrlWrapper(deleteThermalPlantController));

  router.put('/powerPlants/thermal/:thermalPlantId', isValidIdThermal, validateBody(updateThermalPlantValidationSchema), ctrlWrapper(upsertThermalPlantController));

  router.patch('/powerPlants/thermal/:thermalPlantId', isValidIdThermal, validateBody(updateThermalPlantValidationSchema), ctrlWrapper(patchThermalPlantController));

export default router;
