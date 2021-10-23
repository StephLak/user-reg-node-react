const dotenv = require("dotenv");
const express = require("express");
var cors = require("cors");
const morgan = require("morgan");

const { connectToDB } = require("./config/db-config");

//import routers
const authRoute = require("./routes/auth-route");

// Configure Dotenv
dotenv.config();
connectToDB();

// Configure Application
const app = express();

// Enabling Cors
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
