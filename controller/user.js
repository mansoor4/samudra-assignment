import User from "../db/schema/user.js";
import errorHandler from "../utils/errorHandler.js";

export const createUser = async (req, res, next) => {
  const userBody = req.body;
  try {
    const createUser = await User.create(userBody);
    console.log(createUser);
    if (!createUser) throw errorHandler("User not created", 500);
    return res.json({
      message: "User created successfully",
    });
  } catch (err) {
    return next(err);
  }
};
