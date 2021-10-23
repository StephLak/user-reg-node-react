const User = require("../models/user-model");

module.exports = {
  findUserByEmail: async (email) => {
    const user = await User.findOne({ email });
    return user;
  },

  createUser: async (newUser) => {
    const user = await User.create(newUser);
    return user;
  },
};
