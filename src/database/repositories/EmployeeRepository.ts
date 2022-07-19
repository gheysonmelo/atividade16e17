import model, { EmployeeInput, EmployeeOutput } from '../models/EmployeeModel';
import AppError from '../../utils/AppError'

export const getAll = async (): Promise<EmployeeOutput[]> => {
    const aux = await model.findAll({ include: { all: true }});
    return await aux;
};

export const getById = async (id: number): Promise<EmployeeOutput> => {
    const employee = await model.findOne({
        where: {
            employeeNumber: id,
        },
        include: { all: true }
    });

    if (!employee) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return employee;
};

export const create = async (payload: EmployeeInput): Promise<EmployeeOutput> => {
    return await model.create(payload);
};

export const updateById = async (id: number, payload: EmployeeInput): Promise<EmployeeOutput> => {
    const employee = await model.findByPk(id);

    if (!employee) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    return await employee.update(payload);
};

export const deleteById = async (id: number): Promise<void> => {
    const employee = await model.findByPk(id);

    if (!employee) {
        throw new AppError('NotFoundError', 'Registro não encontrado', 404);
    };

    await employee.destroy();
};