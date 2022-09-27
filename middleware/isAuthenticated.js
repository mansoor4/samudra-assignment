import errorHandler from "../utils/errorHandler.js";
import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) throw errorHandler("You are not authenticated", 401);
    const type = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if (!token || type !== "Bearer")
      throw errorHandler("You are not authenticated", 401);
    const result = jwt.verify(
      token,
      "Arbitrary secret key used for encode jwt token"
    );
    if (!result) throw errorHandler("You are not authenticated", 401);
    return next();
  } catch (err) {
    return next(err);
  }
};

export default isAuthenticated;
