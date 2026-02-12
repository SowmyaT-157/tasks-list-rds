import { Sequelize } from "sequelize";

const sequelize = new Sequelize('tasks_list', 'demo_rds', '1234', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;




 