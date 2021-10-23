const {
  errorResponse,
  successResponse,
  sessionSuccessResponse,
} = require("../utils/response");
const { findUserByEmail, createUser } = require("../service/user-service");
const { createHash, comparePassword } = require("../utils/hash");
const { signJWT } = require("../utils/auth-token");

module.exports = {
  register: async (req, res) => {
    try {
      const { name, email, age, password, phone } = req.body;

      // Check if user exist
      const userExist = await findUserByEmail(email);
      if (userExist) return errorResponse(res, 403, "User already exist");

      const passwordHash = await createHash(password);

      const userData = {
        name,
        email,
        age,
        phone,
        password: passwordHash,
      };

      const newUser = await createUser(userData);

      const token = await signJWT({
        _id: newUser._id,
        email: newUser.email,
      });
      return sessionSuccessResponse(
        res,
        201,
        "Successfully created user",
        token,
        newUser
      );
    } catch (err) {
      return errorResponse(res, 500, err.message);
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user exist
      const userExist = await findUserByEmail(email);
      if (!userExist)
        return errorResponse(res, 401, "Invalid email and password");

      // Check password
      const passwordCorrect = await comparePassword(
        password,
        userExist.password
      );
      if (!passwordCorrect)
        return errorResponse(res, 401, "Invalid email and password");

      //sign jwt
      const token = await signJWT({
        _id: userExist._id,
        email: userExist.email,
      });

      return sessionSuccessResponse(
        res,
        200,
        "Successfully logged in",
        token,
        userExist
      );
    } catch (err) {
      console.log(err);
      return errorResponse(res, 500, err.message);
    }
  },
};
