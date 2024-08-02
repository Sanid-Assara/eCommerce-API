import express from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.js";
import { validateOrder } from "../middleware/validationMiddleware.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);
ordersRouter.post("/", validateOrder, createOrder);
ordersRouter.get("/:id", getOrder);
ordersRouter.put("/:id", validateOrder, updateOrder);
ordersRouter.delete("/:id", deleteOrder);

export default ordersRouter;
