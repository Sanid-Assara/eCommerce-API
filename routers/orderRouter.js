import express from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.js";

const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);
ordersRouter.order("/", createOrder);
ordersRouter.get("/:id", getOrder);
ordersRouter.put("/:id", updateOrder);
ordersRouter.delete("/:id", deleteOrder);

export default ordersRouter;
