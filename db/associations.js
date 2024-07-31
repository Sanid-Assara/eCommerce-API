import Category from './Category.js';
import Product from './Product.js';
import User from './User.js';

export const setupAssociations = () => {
  Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
  });

  Category.hasMany(Product, {
    foreignKey: 'categoryId',
    as: 'products',
  });

  Product.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
  });

  User.hasMany(Product, {
    foreignKey: 'userId',
    as: 'products',
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
  await Category.sync();
  await Product.sync();
  await User.sync();
};

export { syncModels };
