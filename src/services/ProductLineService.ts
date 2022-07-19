import { ProductLineInput, ProductLineOutput } from '../database/models/ProductLineModel';
import * as repository from '../database/repositories/ProductLineRepository';

export const getAll = async (): Promise<ProductLineOutput[]> => {
    return repository.getAll();
};

export const getById = async (id: string): Promise<ProductLineOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: ProductLineInput): Promise<ProductLineOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: string, payload: ProductLineInput): Promise<ProductLineOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: string): Promise<void> => {
    return await repository.deleteById(id);
};