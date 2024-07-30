import Category from "../models/Category.js";

export const getCategories = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const categories = await Category.findAll();
    if (!isNaN(limit) && limit > 0) {
      res.json(categories.slice(0, limit));
    } else {
      res.json(categories);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const {
      body: { name },
    } = req;
    if (!name)
      return res.status(400).json({ error: "The category is required" });
    const result = await Category.create(req.body);
    res.status(200).json({ message: "Category created", result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Category.findByPk(id);
    if (!result) return res.status(404).json({ error: "Category not found" });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const {
      body: { name },
      params: { id },
    } = req;
    if (!name)
      return res.status(400).json({
        error: "The category is required",
      });
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    await category.update(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await Category.findByPk(id);
    if (!user) return res.status(404).json({ error: "Category not found" });
    await user.destroy();
    res.json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
