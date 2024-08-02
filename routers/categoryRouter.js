import express from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categories.js";
import { validateCategory } from "../middleware/validationMiddleware.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.post("/", validateCategory, createCategory);
categoryRouter.get("/:id", getCategory);
categoryRouter.put("/:id", validateCategory, updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;
