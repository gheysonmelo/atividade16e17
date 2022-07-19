import model, { OfficeInput, OfficeOutput } from '../models/OfficeModel';
import AppError from '../../utils/AppError'
import Employee from '../models/EmployeeModel';

export const getAll = async (): Promise<OfficeOutput[]> => {
    const aux = await model.findAll({ include: { model: Employee }});
    return await aux;
};

export const getById = async (id: string): Promise<OfficeOutput> => {
    const office = await model.findOne({
        where: {
            officeCode: id,
        },
        include: { model: Employee }
    });
    
    if (!office) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return office;
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: string, payload: OfficeInput): Promise<OfficeOutput> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await office.update(payload);
};

export const deleteById = async (id: string): Promise<void> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await office.destroy();
};