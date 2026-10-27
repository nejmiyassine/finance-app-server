import { Router } from 'express';

const healthRoute = Router();

healthRoute.get('/health', (_, res) => {
    res.status(200).json({
        status: 'Server is healthy ✓',
    });
});

export default healthRoute;
