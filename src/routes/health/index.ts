import express from 'express';
import healthRoute from './health';

const healthRouter = express.Router();

healthRouter.use(healthRoute);

export { healthRouter };
