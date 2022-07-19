import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';
import Customer from './CustomerModel';

interface OrderAttributes {
    orderNumber: number,
    orderDate?: string,
    requiredDate?: string,
    shippedDate?: string,
    status?: string,
    comments?: string,
    customerNumber: number,
};

export interface OrderInput extends Optional<OrderAttributes, 'orderNumber'>{};
export interface OrderOutput extends Required<OrderAttributes>{};

class Order extends Model<OrderAttributes, OrderInput> {
    declare orderNumber: number;
    declare orderDate: string;
    declare requiredDate: string;
    declare shippedDate: string;
    declare status: string;
    declare comments: string;
    declare customerNumber: number;
};

Order.init({
    orderNumber: { type: DataTypes.INTEGER, primaryKey: true, },
    orderDate: { type: DataTypes.STRING(255) },
    requiredDate: { type: DataTypes.STRING(255) },
    shippedDate: { type: DataTypes.STRING(255) },
    status: { type: DataTypes.STRING(255) },
    comments: { type: DataTypes.TEXT },
    customerNumber: { type: DataTypes.INTEGER, allowNull: false },
}, {
    sequelize,
    modelName: 'orders',
    paranoid: true,
})

Customer.hasMany(Order, {foreignKey: 'customerNumber'});
Order.belongsTo(Customer, {foreignKey: 'customerNumber'});

export default Order;