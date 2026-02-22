import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config()

const sequelize = new Sequelize(
 process.env.DB_DATABASE as string,
 process.env.DB_USERNAME as string,
 process.env.DB_PASSWORD as string,
    {
    host: process.env.DB_HOST as string,
    dialect: process.env.DB_DIALECT as Dialect,
});
export default sequelize;



