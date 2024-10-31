import { Router } from "express";
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidIdGreen } from "../middlewares/isValidId.js";
import { validateBody } from "../middlewares/validateBody.js";
import { authenticate } from '../middlewares/authenticate.js';
import { checkRoles } from '../middlewares/checkRoles.js';
import { ROLES } from '../constants/index.js';
import { createGreenPlantValidationSchema, updateGreenPlantValidationSchema } from "../validation/greenPlant.js";
import { getGreenPlantsController,
    getGreenPlantByIdController,
    createGreenPlantController,
    deleteGreenPlantController,
    upsertGreenPlantController,
    patchGreenPlantController} from "../controllers/green.js";

const router = Router();

router.use(authenticate);

router.get('/', checkRoles(ROLES.ADMIN, ROLES.USER), ctrlWrapper(getGreenPlantsController));

router.get('/:greenPlantId', checkRoles(ROLES.ADMIN, ROLES.USER), isValidIdGreen, ctrlWrapper(getGreenPlantByIdController));

router.post('/', checkRoles(ROLES.ADMIN), validateBody(createGreenPlantValidationSchema), ctrlWrapper(createGreenPlantController));

router.delete('/:greenPlantId', checkRoles(ROLES.ADMIN), isValidIdGreen, ctrlWrapper(deleteGreenPlantController));

router.put('/:greenPlantId', checkRoles(ROLES.ADMIN), isValidIdGreen, validateBody(updateGreenPlantValidationSchema), ctrlWrapper(upsertGreenPlantController));

router.patch('/:greenPlantId', checkRoles(ROLES.ADMIN), isValidIdGreen, validateBody(updateGreenPlantValidationSchema), ctrlWrapper(patchGreenPlantController));

export default router;
