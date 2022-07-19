import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import 'express-async-errors';

import routes from './api/routes/index'
import sequelize from './database/sequelize';
import AppError from './utils/AppError';
import { initdb } from './database/initdb';

const app: Express = express();
const port: number = 3383;

app.use(bodyParser.json());

app.use('/api/v1', routes);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World Express + TypeScript")
});

app.use(errors());

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    try {
        res.status(err.getHttpCode()).send(err.getError());
    } catch (error){
        const appError = new AppError('InternalServerError', 'Erro interno do servidor', 500);
        res.status(500).send(appError.getError());
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});

initdb();