import model, { CustomerInput, CustomerOutput } from '../models/CustomerModel';
import AppError from '../../utils/AppError'
import { Query } from '../../shared/types/query';
import { getPagination } from '../../utils/getPagination';
import { Op } from 'sequelize';

export const getAll = async (customerName: string, creditLimit: number, query: Query): Promise<{rows: CustomerOutput[], count: number}> => { 
    let { size, page, sort, order, ...filters } = query;

    const id = "customerNumber"
    const { ...pagination } = getPagination(id, query);

    return await model.findAndCountAll({
        where: {
            // customerName: { [Op.like]: `%${customerName}%` },
            creditLimit: { [Op.gt]: `${creditLimit}` },

            ...filters,
        },
        ...pagination,
        include: { all: true },
    });
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    const customer = await model.findOne({
        where: {
            customerNumber: id,
        },
         include: { all: true, nested: true }
    });

    if (!customer) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return customer;
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await customer.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await customer.destroy();
};