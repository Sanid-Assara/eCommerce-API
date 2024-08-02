import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";
import { validateUser } from "../middleware/validationMiddleware.js";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", validateUser,  createUser);
usersRouter.get("/:id", getUser);
usersRouter.put("/:id", validateUser, updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
