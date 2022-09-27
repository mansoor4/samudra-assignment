import { Router } from "express";
import loginValidation from "../middleware/loginValidation.js";
import { login } from "../controller/auth.js";
import validationError from "../middleware/validationError.js";

const route = Router();

route.post("/login", loginValidation, validationError, login);

export default route;
