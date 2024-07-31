import Category from './Category.js';
import Product from './Product.js';

export const setupAssociations = () => {
  Product.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
  });

  Category.hasMany(Product, {
    foreignKey: 'categoryId',
    as: 'products',
  });
};

const syncModels = async () => {
  await Category.sync();
  await Product.sync();
};

export { syncModels };
