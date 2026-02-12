import { DataTypes } from "sequelize";
import sequelize from "../config/dbConnection";

export const Task = sequelize.define('Tasks',{
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      task_name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      description: {
        type: DataTypes.STRING,
      },
      priority: {
        type: DataTypes.STRING,
        defaultValue:"medium"
        
      },
      status: {
        type: DataTypes.STRING,
        defaultValue:"inProgres"
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
