import { body } from "express-validator";

const userValidation = [
  body("firstName")
    .trim()
    .notEmpty()
    .withMessage("First name should not be empty"),
  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name should not be empty"),
  body("address").trim().notEmpty().withMessage("Address should not be empty"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email should not be empty")
    .isEmail()
    .withMessage("Enter valid email")
    .normalizeEmail(),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username should not be empty")
    .isLength({ min: 6 })
    .withMessage("Username should contain atleast 6 characters"),
];

export default userValidation;
