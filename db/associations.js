import sequelize from "./index.js";
import Category from "../models/Category.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

sequelize.sync({ logging: false });
export { Category, User, Order, Product };
