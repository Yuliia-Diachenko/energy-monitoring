import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from "../middlewares/validateBody.js";
import { createGreenPlantValidationSchema, updateGreenPlantValidationSchema } from "../validation/greenPlant.js";
import { getGreenPlantsController,
    getGreenPlantByIdController,
    createGreenPlantController,
    deleteGreenPlantController,
    upsertGreenPlantController,
    patchGreenPlantController} from "../controllers/green.js";

const router = Router();

router.get('/powerPlants/green', ctrlWrapper(getGreenPlantsController));

router.get('/powerPlants/green/:greenPlantId', ctrlWrapper(getGreenPlantByIdController));

router.post('/powerPlants/green', validateBody(createGreenPlantValidationSchema), ctrlWrapper(createGreenPlantController));

router.delete('/powerPlants/green/:greenPlantId', ctrlWrapper(deleteGreenPlantController));

router.put('/powerPlants/green/:greenPlantId', validateBody(updateGreenPlantValidationSchema), ctrlWrapper(upsertGreenPlantController));

router.patch('/powerPlants/green/:greenPlantId', validateBody(updateGreenPlantValidationSchema), ctrlWrapper(patchGreenPlantController));

export default router;
