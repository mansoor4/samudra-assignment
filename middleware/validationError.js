import { validationResult } from "express-validator";
import errorHandler from "../utils/errorHandler.js";

const validationError = async (req, res, next) => {
  try {
    const error = validationResult(req).array();
    if (error.length > 0) throw errorHandler(error[0].msg, 400);
    return next();
  } catch (err) {
    return next(err);
  }
};

export default validationError;
