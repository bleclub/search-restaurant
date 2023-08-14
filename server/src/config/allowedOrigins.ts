import { allowedOrigins } from './corsOptions';

export const corsOptions = {
    origin: (
        origin: string,
        callback: (arg0?: Error, arg1?: boolean) => void,
    ): void => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionSuccessStatus: 200,
    credential: true,
};
