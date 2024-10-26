import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getGreenPlantsController,
    getGreenPlantByIdController,
    createGreenPlantController,
    deleteGreenPlantController,
    upsertGreenPlantController,
    patchGreenPlantController} from "../controllers/green.js";

const router = Router();

router.get('/powerPlants/green', ctrlWrapper(getGreenPlantsController));

router.get('/powerPlants/green/:greenPlantId', ctrlWrapper(getGreenPlantByIdController));

router.post('/powerPlants/green', ctrlWrapper(createGreenPlantController));

router.delete('/powerPlants/green/:greenPlantId', ctrlWrapper(deleteGreenPlantController));

router.put('/powerPlants/green/:greenPlantId', ctrlWrapper(upsertGreenPlantController));

router.patch('/powerPlants/green/:greenPlantId', ctrlWrapper(patchGreenPlantController));

export default router;
