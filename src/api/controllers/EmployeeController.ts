import { NextFunction, Request, Response } from 'express';
import * as service from '../../services/EmployeeService';

export const getAll = async (req: Request, res: Response) => {
    res.send(await service.getAll());
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    res.send(await service.getById(parseInt(req.params.id)));
};

export const create = async (req: Request, res: Response) => {
    res.status(201).send(await service.create(req.body));
};

export const updateById = async (req: Request, res: Response) => {   
    res.status(200).send(await service.updateById(parseInt(req.params.id), req.body));
};

export const deleteById = async (req: Request, res: Response) => {   
    res.status(204).send(await service.deleteById(parseInt(req.params.id)));
};