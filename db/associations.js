import Category from './Category.js';
import Product from './Product.js';
import User from './User.js';
import Order from './Order.js';
import OrderProduct from './OrderProduct.js';


export const setupAssociations = () => {
  Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
  });

  Category.hasMany(Product, {
    foreignKey: 'categoryId',
    as: 'products',
  });

  Order.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

  User.hasMany(Order, {
    foreignKey: 'userId',
    as: 'orders',
  });

  Order.belongsToMany(Product, {
    through: OrderProduct,
    foreignKey: 'orderId',
    otherKey: 'productId',
    as: 'products',
  });

  Product.belongsToMany(Order, {
    through: OrderProduct,
    foreignKey: 'productId',
    otherKey: 'orderId',
    as: 'orders',
  });

  Category.belongsTo(User, {
    foreignKey: 'userId',
    as: 'author',
  });

  User.hasMany(Category, {
    foreignKey: 'userId',
    as: 'categories',
  });
};

const syncModels = async () => {
  await User.sync();
  await Category.sync();
  await Product.sync();
  await Order.sync();
  await OrderProduct.sync();
};

export { syncModels };
