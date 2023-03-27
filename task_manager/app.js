const express = require("express");
const app = express();
const routes = require("./routes/tasks");
const mongoose = require("mongoose");
const connectDB = require("./db/connect");
require("dotenv").config();

/**constants env variables */
const PORT = process.env.PORT;
const DB = process.env.DB;

// middleware

app.use(express.json());

// routes
app.use("/api/v1/tasks", routes);

/**start script */

const start = async () => {
  try {
    await connectDB(DB);
    app.listen(PORT, () => {
      console.log(`DB connected and serving on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
