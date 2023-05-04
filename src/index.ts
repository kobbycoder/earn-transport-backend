import express, { Express, Request, Response } from 'express';
import config from 'config';
import dotenv from 'dotenv';
import connect from './utils/connect';
import logger from './utils/logger'

dotenv.config()

const app: Express = express()

const PORT = config.get<number>('port');

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
})

app.listen(PORT, async() => {
    logger.info(`Server running at port ${PORT}`);
    await connect();
})