import model, { ProductLineInput, ProductLineOutput } from '../models/ProductLineModel';
import AppError from '../../utils/AppError'
import Product from '../models/ProductModel';

export const getAll = async (): Promise<ProductLineOutput[]> => {
    const aux = await model.findAll({ include: { model: Product }});
    return await aux;
};

export const getById = async (id: string): Promise<ProductLineOutput> => {
    const productline = await model.findOne({
        where: {
            productLine: id,
        },
        include: { model: Product }
    });
    
    if (!productline) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return productline;
};

export const create = async (payload: ProductLineInput): Promise<ProductLineOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: ProductLineInput): Promise<ProductLineOutput> => {
    const productline = await model.findByPk(id);

    if (!productline) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await productline.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const productline = await model.findByPk(id);

    if (!productline) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await productline.destroy();
};