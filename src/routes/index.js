import { Router } from 'express';
import { routerCalculator } from '../controllers/calculator.js';
import { routerAbout } from '../controllers/about.js';
import { routerHealth } from '../controllers/health.js';

const router = Router();

router.use('/calculator', routerCalculator);
router.use('/about', routerAbout);
router.use('/health', routerHealth);

export default router;
