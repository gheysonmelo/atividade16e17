import { DataTypes, Model } from 'sequelize';
import  sequelize  from '../sequelize';

export interface UserAttributes {
    email: string,
    password: string,
};

export interface UserInput extends Required<UserAttributes>{};
export interface UserOutput extends Required<UserAttributes>{};

class User extends Model<UserAttributes, UserAttributes> {
    declare email: string;
    declare password: string
};

User.init({
    email: { type: DataTypes.STRING, primaryKey: true, },
    password: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName: 'users',
    paranoid: true, 
});

export default User;