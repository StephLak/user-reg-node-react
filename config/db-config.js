const mongoose = require("mongoose");

module.exports = {
  connectToDB: async () => {
    try {
      const uri = process.env.MONGO_URI;
      mongoose.connect(uri, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Database connected !!!");
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
};
