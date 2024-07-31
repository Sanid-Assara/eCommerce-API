import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const products = await Product.findAll();
    if (!isNaN(limit) && limit > 0) {
      res.json(products.slice(0, limit));
    } else {
      res.json(products);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || price === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const result = await Product.create(req.body);
    res.status(201).json({ message: "Product created", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const { id } = req.params;
    if (!name || price === undefined) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.update(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    await product.destroy();
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
