import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from "../middlewares/validateBody.js";
import { isValidIdThermal } from "../middlewares/isValidId.js";
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';
import { createThermalPlantValidationSchema, updateThermalPlantValidationSchema } from "../validation/thermalPlant.js";
import { patchThermalPlantController, upsertThermalPlantController, createThermalPlantController, getAllThermalPlantsController, getThermalPlantByIdController, deleteThermalPlantController } from "../controllers/thermal.js";

const router = Router();

  router.use(authenticate);

  router.get('/', checkRoles(ROLES.ADMIN, ROLES.USER), ctrlWrapper(getAllThermalPlantsController));

  router.get('/:thermalPlantId',  checkRoles(ROLES.ADMIN, ROLES.USER), isValidIdThermal, ctrlWrapper(getThermalPlantByIdController));

  router.post('/', checkRoles(ROLES.ADMIN), validateBody(createThermalPlantValidationSchema),ctrlWrapper(createThermalPlantController));

  router.delete('/:thermalPlantId', checkRoles(ROLES.ADMIN), isValidIdThermal, ctrlWrapper(deleteThermalPlantController));

  router.put('/:thermalPlantId', checkRoles(ROLES.ADMIN), isValidIdThermal, validateBody(updateThermalPlantValidationSchema), ctrlWrapper(upsertThermalPlantController));

  router.patch('/:thermalPlantId', checkRoles(ROLES.ADMIN), isValidIdThermal, validateBody(updateThermalPlantValidationSchema), ctrlWrapper(patchThermalPlantController));

export default router;
