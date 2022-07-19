import { NextFunction, Request, Response } from 'express';
import * as service from '../../services/ProductLineService';

export const getAll = async (req: Request, res: Response) => {
    res.send(await service.getAll());
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getById(req.params.id));
};

export const create = async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body));
};

export const updateById = async (req: Request, res: Response) => {   
    res.status(200).send(await service.updateById(req.params.id, req.body));
};

export const deleteById = async (req: Request, res: Response) => {   
    res.status(204).send(await service.deleteById(req.params.id));
};