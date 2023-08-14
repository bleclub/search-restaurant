import express from 'express';
import { mapRouter } from './map';

const router = express.Router();
router.use(mapRouter);

export default router;
