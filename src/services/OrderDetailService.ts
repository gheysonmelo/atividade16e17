import { OrderDetailInput, OrderDetailOutput } from '../database/models/OrderDetailModel';
import * as repository from '../database/repositories/OrderDetailRepository';

export const getAll = async (): Promise<OrderDetailOutput[]> => {
    return repository.getAll();
};

export const getById = async (id: number): Promise<OrderDetailOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: OrderDetailInput): Promise<OrderDetailOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: number, payload: OrderDetailInput): Promise<OrderDetailOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
};