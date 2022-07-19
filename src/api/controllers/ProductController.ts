import { NextFunction, Request, Response } from 'express';
import * as service from '../../services/ProductService';

export const getAll = async (req: Request, res: Response) => {
    const { size, page, sort, order, productCode, quantityInStock, ...filters } = req.query;

    const query = { 
        size: parseInt(size as string),
        page: parseInt(page as string),
        sort: sort as string,
        order: order as string,
        ...filters 
    }

    res.send(await service.getAll(productCode as string, parseInt(quantityInStock as string), query));
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