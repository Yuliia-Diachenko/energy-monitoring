import { Router } from 'express';
import greenRouter from './green.js';
import thermalRouter from './thermal.js';
import authRouter from './auth.js';

const router = Router();

router.use('/powerPlants/green', greenRouter);

router.use('/powerPlants/thermal', thermalRouter);

router.use('/auth', authRouter);

export default router;
