import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getGreenPlantsController, getGreenPlantByIdController } from "../controllers/green.js";

const router = Router();

router.get('/powerPlants/green', ctrlWrapper(getGreenPlantsController));

router.get('/powerPlants/green/:greenPlantId', ctrlWrapper(getGreenPlantByIdController));


export default router;
