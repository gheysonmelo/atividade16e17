import { EmployeeInput, EmployeeOutput } from '../database/models/EmployeeModel';
import * as repository from '../database/repositories/EmployeeRepository';

export const getAll = async (): Promise<EmployeeOutput[]> => {
    return repository.getAll();
};

export const getById = async (id: number): Promise<EmployeeOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: EmployeeInput): Promise<EmployeeOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: number, payload: EmployeeInput): Promise<EmployeeOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
};