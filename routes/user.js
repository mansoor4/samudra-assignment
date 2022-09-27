import { Router } from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { createUser } from "../controller/user.js";
import userValidation from "../middleware/userValidation.js";
import validationError from "../middleware/validationError.js";

const route = Router();

route.post(
  "/create",
  isAuthenticated,
  userValidation,
  validationError,
  createUser
);

export default route;
