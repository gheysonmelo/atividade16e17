import model, { ProductInput, ProductOutput } from '../models/ProductModel';
import AppError from '../../utils/AppError';
import { Query } from '../../shared/types/query';
import { getPagination } from '../../utils/getPagination';
import { Op } from 'sequelize';

export const getAll = async (productCode: string, quantityInStock: number, query: Query): Promise<{rows: ProductOutput[], count: number}> => { 
    let { size, page, sort, order, ...filters } = query;

    const id = "productCode"
    const { ...pagination } = getPagination(id, query);

    return await model.findAndCountAll({
        where: {
            quantityInStock: { [Op.gt]: `${quantityInStock}` },

            ...filters,
        },
        ...pagination,
        // include: { all: true },
    });
};

export const getById = async (id: string): Promise<ProductOutput> => {
    const product = await model.findOne({
        where: {
            productCode: id
        },
        include: { all: true }
    });
    
    if (!product) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return product;
};

export const create = async (payload: ProductInput): Promise<ProductOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: ProductInput): Promise<ProductOutput> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await product.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const product = await model.findByPk(id);

    if (!product) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await product.destroy();
};