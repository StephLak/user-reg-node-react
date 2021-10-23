const bcrypt = require("bcrypt");

module.exports = {
  createHash: async (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
  },

  comparePassword: async (newPassword, oldPassword) => {
    const isPasswordCorrect = bcrypt.compareSync(newPassword, oldPassword);
    return isPasswordCorrect;
  },
};
