import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";
import Category from "./Category.js"; 

export const Product = sequelize.define("Product", {
  
    name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    
    price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  
});

sequelize.sync();

export default Product;
