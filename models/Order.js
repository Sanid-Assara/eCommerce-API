import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

export const Category = sequelize.define("Category", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  products: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Category.sync();

export default Category;
