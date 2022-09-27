import jwt from "jsonwebtoken";

export const login = (req, res, next) => {
  const { username } = req.body;
  try {
    const token = jwt.sign(
      username,
      "Arbitrary secret key used for encode jwt token"
    );
    return res.json({
      message: "Login successfully",
      token,
    });
  } catch (err) {
    return next(err);
  }
};
