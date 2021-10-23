const jwt = require("jsonwebtoken");

module.exports = {
  signJWT: async (payload) => {
    const jwtSecret = process.env.JWT_SECRET;
    return jwt.sign(payload, jwtSecret, {
      expiresIn: "1d",
    });
  },

  verifyJWT: async (token) => {
    const jwtSecret = process.env.JWT_SECRET;
    return jwt.verify(token, jwtSecret, (error, decoded) => {
      if (error) {
        return error;
      }
      return decoded;
    });
  },
};
