import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const categorySchema = Joi.object({
  name: Joi.string().required()
});

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  categoryId: Joi.number().required(),
});

const orderSchema = Joi.object({
  userId: Joi.number().required(),
  products: Joi.array().items(Joi.object({
    productId: Joi.number().required(),
    quantity: Joi.number().required()
  })).required(),
      total: Joi.number().required()
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

const validateOrder = (req, res, next) => {
  const { error } = orderSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

export {
  validateUser,
  validateCategory,
  validateProduct,
  validateOrder
};
