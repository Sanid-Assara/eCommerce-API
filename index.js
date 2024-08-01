import express from "express";
import categoriesRouter from "./routers/categoryRouter.js";
import ordersRouter from "./routers/orderRouter.js";
import productsRouter from "./routers/productRouter.js";
import usersRouter from "./routers/userRouter.js";

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(express.json());

app.use("/api/categories", categoriesRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/products", productsRouter);
app.use("/api/users", usersRouter);

app.listen(PORT, () => {
  console.log(
    `The server is running at: \nhttp://localhost:${PORT}/api/categories \nhttp://localhost:${PORT}/api/orders \nhttp://localhost:${PORT}/api/products \nhttp://localhost:${PORT}/api/users`
  );
});
