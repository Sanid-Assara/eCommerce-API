import express from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";

const productsRouter = express.Router();
import { validateProduct } from "../middleware/validationMiddleware.js";

productsRouter.get("/", getProducts);
productsRouter.post("/", validateProduct, createProduct);
productsRouter.get("/:id", getProduct);
productsRouter.put("/:id", validateProduct, updateProduct);
productsRouter.delete("/:id", deleteProduct);

export default productsRouter;
