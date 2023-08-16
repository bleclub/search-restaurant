import dotenv from 'dotenv';
import express from 'express';
import router from '../router';
dotenv.config();

export const createServer = () => {
    const app = express();
    app.use(express.json());
    app.use('/api', router);

    return app;
};
