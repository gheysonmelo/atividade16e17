import { DataTypes, Model, Optional } from 'sequelize';
import  sequelize  from '../sequelize';
import Order from './OrderModel';
import Product from './ProductModel';

interface OrderDetailAttributes {
    orderNumber: number,
    productCode: string,
    quantityOrdered: number,
    priceEach: number,
    orderLineNumber: number,
};

export interface OrderDetailInput extends Optional<OrderDetailAttributes,'orderNumber'>{};
export interface OrderDetailOutput extends Required<OrderDetailAttributes>{};

class OrderDetail extends Model<OrderDetailAttributes, OrderDetailInput> {
    declare orderNumber: number;
    declare productCode: string;
    declare quantityOrdered: number;
    declare priceEach: number;
    declare orderLineNumber: number;
};

OrderDetail.init({
    orderNumber: { type: DataTypes.INTEGER, primaryKey: true },
    productCode: { type: DataTypes.STRING(15), primaryKey: true },
    quantityOrdered: { type: DataTypes.INTEGER, allowNull: false },
    priceEach: { type: DataTypes.DECIMAL(10,2), allowNull: false },
    orderLineNumber: { type: DataTypes.SMALLINT, allowNull: false }
}, {
    sequelize,
    modelName: 'orderdetails'
});

OrderDetail.removeAttribute('id');

Order.belongsToMany(Product, { foreignKey: "orderNumber", through: OrderDetail });
Product.belongsToMany(Order, { foreignKey: "productCode", through: OrderDetail });

export default OrderDetail;