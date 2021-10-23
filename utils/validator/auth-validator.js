const { body } = require("express-validator");

module.exports = {
  registerValidator: () => {
    return [
      body("name").isString().notEmpty().withMessage("Name is required"),
      body("email")
        .isEmail()
        .withMessage("Invalid Email")
        .notEmpty()
        .withMessage("Email is required"),
      body("age")
        .isInt()
        .withMessage("Invalid age")
        .notEmpty()
        .withMessage("Age is required"),
      body("phone")
        .isString()
        .isLength({
          min: 9,
          max: 15,
        })
        .withMessage("Phone number must be between 9 to 15 digits")
        .notEmpty()
        .withMessage("Phone Number is required"),
      body("password")
        .isString()
        .matches("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")
        .withMessage("Password must contain uppercase, number and symbol"),
    ];
  },
  loginValidator: () => {
    return [
      body("email")
        .isEmail()
        .withMessage("Invalid Email")
        .notEmpty()
        .withMessage("Email is required"),
      body("password")
        .isString()
        .matches("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$")
        .withMessage("Password must contain uppercase, number and symbol"),
    ];
  },
};
