import Customer from "./models/CustomerModel";
import Employee from "./models/EmployeeModel";
import Office from "./models/OfficeModel";
import OrderDetail from "./models/OrderDetailModel";
import Order from "./models/OrderModel";
import Payment from "./models/PaymentModel";
import ProductLine from "./models/ProductLineModel";
import Product from "./models/ProductModel";
import User from "./models/UserModel";
import { connectDatabase } from "./sequelize";

export const initdb = async () => {
    Promise.all([
        await connectDatabase(),
        console.log('Sincronizando as tabelas...'),
        await User.sync({alter: true}),
        await Order.sync({alter: true}),
        await OrderDetail.sync({alter: true}),
        await Payment.sync({alter: true}),
        await Customer.sync({alter: true}),
        await Product.sync({alter: true}),
        await ProductLine.sync({alter: true}),
        await Office.sync({alter: true}),
        await Employee.sync({alter: true}),
    ]).then(()=> {
        console.log("Tabelas sincronizadas com sucesso")
    })
};