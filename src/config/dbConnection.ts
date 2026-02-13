import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize(
 process.env.L_DATABASE as string,
 process.env.L_USERNAME as string,
 process.env.L_PASSWORD as string,
    {
    host: process.env.L_HOST as string,
    dialect: process.env.L_DIALECT as Dialect,
});
export default sequelize;




 