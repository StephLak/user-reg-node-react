const { register, login } = require("../controllers/auth-controller");
const {
  registerValidator,
  loginValidator,
} = require("../utils/validator/auth-validator");
const { bodyValidator } = require("../utils/validator/body-validator");

const router = require("express").Router();

router.post("/register", registerValidator(), bodyValidator, register);
router.post("/login", loginValidator(), bodyValidator, login);

module.exports = router;
