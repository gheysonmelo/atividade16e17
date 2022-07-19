import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';
import Employee from './EmployeeModel';

interface CustomerAttributes {
    customerNumber: number,
    customerName: string,
    contactLastName: string,
    contactFirstName: string,
    phone: string,
    addressLine1: string,
    addressLine2?: string,
    city: string,
    state?: string,
    postalCode?: string,
    country: string,
    salesRepEmployeeNumber?: number,
    creditLimit?: number,
};

export interface CustomerInput extends Optional<CustomerAttributes, 'customerNumber'>{};
export interface CustomerOutput extends Required<CustomerAttributes>{};

class Customer extends Model<CustomerAttributes, CustomerInput> {
    declare customerNumber: number;
    declare customerName: string;
    declare contactLastName: string;
    declare contactFirstName: string;
    declare phone: string;
    declare addressLine1: string;
    declare addressLine2: string;
    declare city: string;
    declare state: string;
    declare postalCode: string;
    declare country: string;
    declare salesRepEmployeeNumber: number;
    declare creditLimit: number;
};

Customer.init({
    customerNumber: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    customerName: { type: DataTypes.STRING(50), allowNull: false },
    contactLastName: { type: DataTypes.STRING(50), allowNull: false },
    contactFirstName: { type: DataTypes.STRING(50), allowNull: false },
    phone: { type: DataTypes.STRING(50), allowNull: false },
    addressLine1: { type: DataTypes.STRING(50), allowNull: false },
    addressLine2: { type: DataTypes.STRING(50) },
    city: { type: DataTypes.STRING(50), allowNull: false },
    state: { type: DataTypes.STRING(50) },
    postalCode: { type: DataTypes.STRING(15) },
    country: { type: DataTypes.STRING(50), allowNull: false },
    salesRepEmployeeNumber: { type: DataTypes.INTEGER },
    creditLimit: { type: DataTypes.DECIMAL(10,2) },
}, {
    sequelize,
    modelName: 'customers',
    // paranoid: true //DEIXANDO COMENTADO PARA QUE ELE FAÇA A DELEÇÃO FÍSICA, SEM CRIAR DELETEDAT 
});

Employee.hasMany(Customer, { foreignKey: "salesRepEmployeeNumber", onDelete: "SET NULL" }, );
Customer.belongsTo(Employee, { foreignKey: "salesRepEmployeeNumber"} );

export default Customer;