import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    "mysql://root:pedrinho22@localhost:3306/classicmodels",
    {
        define: {
            freezeTableName: true,
            // timestamps: false,
            createdAt: false,
            updatedAt: false,
        },
        timezone: "-03:00",
        logging: false,
    }
);

export default sequelize;

export const connectDatabase = async () => {
    await sequelize.authenticate().then(() => {
    console.log('Conectado ao mysql com sucesso');
}).catch((error: Error) => {
    console.log('Não foi possível conectar ao mysql: ' + error);

    // sequelize.sync({ alter: true });
});
}