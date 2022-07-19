import model, { OrderDetailInput, OrderDetailOutput } from '../models/OrderDetailModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<OrderDetailOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<OrderDetailOutput> => {
    const orderdetail = await model.findByPk(id);

    if (!orderdetail) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return orderdetail;
};

export const create = async (payload: OrderDetailInput): Promise<OrderDetailOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: OrderDetailInput): Promise<OrderDetailOutput> => {
    const orderdetail = await model.findByPk(id);

    if (!orderdetail) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await orderdetail.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const orderdetail = await model.findByPk(id);

    if (!orderdetail) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await orderdetail.destroy();
};