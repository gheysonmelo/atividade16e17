import { CustomerInput, CustomerOutput } from '../database/models/CustomerModel';
import * as repository from '../database/repositories/CustomerRepository';
import { Query } from '../shared/types/query';

export const getAll = async (customerName: string, creditLimit: number, query: Query): Promise<{rows: CustomerOutput[], count: number}> => {
    return repository.getAll(customerName, creditLimit, query);
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    return await repository.getById(id);
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await repository.create(payload)
};

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    return await repository.updateById(id, payload);
};

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
};