import { OfficeInput, OfficeOutput } from '../database/models/OfficeModel';
import * as repository from '../database/repositories/OfficeRepository';

export const getAll = async (): Promise<OfficeOutput[]> => {
    return repository.getAll();
};

export const getById = async (id: string): Promise<OfficeOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: string, payload: OfficeInput): Promise<OfficeOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: string): Promise<void> => {
    return await repository.deleteById(id);
};