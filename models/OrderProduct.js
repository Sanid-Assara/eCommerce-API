import { DataTypes } from 'sequelize';
import sequelize from "../db/index.js";

const OrderProduct = sequelize.define('OrderProduct', {
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Orders', 
      key: 'id',
    },
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Products', 
      key: 'id',
    },
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

export default OrderProduct;