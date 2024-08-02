import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

export const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});