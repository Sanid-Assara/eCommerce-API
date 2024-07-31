import express from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", createUser);
usersRouter.get("/:id", getUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
