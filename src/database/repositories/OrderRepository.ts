import model, { OrderInput, OrderOutput } from '../models/OrderModel';
import AppError from '../../utils/AppError'
import { Query } from '../../shared/types/query';
import { getPagination } from '../../utils/getPagination';
import { Op } from 'sequelize';

export const getAll = async (orderDate: string, orderNumber: number, query: Query): Promise<{rows: OrderOutput[], count: number}> => { 
    let { size, page, sort, order, ...filters } = query;

    const id = "orderNumber"
    
    const { ...pagination } = getPagination(id, query);

    return await model.findAndCountAll({
        where: {
            orderDate: { [Op.between]: ["2005-05-17", "2005-05-30"] }, 
            ...filters,
        },
        ...pagination,
        // include: { all: true },
    });
};

export const getById = async (id: number): Promise<OrderOutput> => {
    const order = await await model.findOne({
        where: {
            customerNumber: id,
        },
         include: { all: true }
    });
    
    if (!order) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return order;
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await order.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await order.destroy();
};