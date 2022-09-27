import { body } from "express-validator";

const signupValidation = [
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username should not be empty")
    .isLength({ min: 6 })
    .withMessage("Username should contain atleast 6 characters"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password should not be empty")
    .isLength({ min: 6 })
    .withMessage("Password should contain atleast 6 characters"),
];

export default signupValidation;
