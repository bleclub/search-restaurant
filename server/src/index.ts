import { credentials } from './config/credentials';
import { corsOptions } from './config/allowedOrigins';
import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router';
dotenv.config();

const app: Express = express();
const PORT: number = Number(process.env.APP_PORT) || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(credentials);
app.use(cors(corsOptions));

app.set('env', process.env.APP_ENV);

app.get('/', (req: Request, res: Response) => {
    return res.status(200).json({ status: 'succes connected!' });
});
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
