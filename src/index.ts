import express, { Express, Request, Response } from 'express';
import config from 'config';
import dotenv from 'dotenv';
import connect from './utils/connect';
import logger from './utils/logger'
import routes from './routes';

dotenv.config()

const app: Express = express()

const PORT = config.get<number>('port');

routes(app);

app.listen(PORT, async() => {
    logger.info(`Server running at port ${PORT}`);
    await connect();
})