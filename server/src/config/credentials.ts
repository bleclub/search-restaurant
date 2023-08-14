import { allowedOrigins } from './corsOptions';
import { NextFunction, Request, Response } from 'express';

export const credentials = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const { origin } = req.headers;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', 'true');
    }
    next();
};
