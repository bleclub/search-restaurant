import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const authorizationHeader: string =
        req.get('Authorization') || req.get('authorization');

    if (!authorizationHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authorizationHeader.split(' ')[1];

    if (token !== process.env.ACCESS_TOKEN_CLIENT_SECRET) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();
};
