import { OrderInput, OrderOutput } from '../database/models/OrderModel';
import * as repository from '../database/repositories/OrderRepository';
import { Query } from '../shared/types/query';


export const getAll = async (orderDate: string, orderNumber: number, query: Query): Promise<{rows: OrderOutput[], count: number}> => {
    return repository.getAll(orderDate, orderNumber, query);
};

export const getById = async (id: number): Promise<OrderOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
};