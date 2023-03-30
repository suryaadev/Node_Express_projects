const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();
const productRoutes = require("./routes/products");

// middleware
app.use(express.json());

// routes
app.use("/api/v1/products", productRoutes);

const start = () => {
  connectDB(process.env.MONGO_URL);
  app.listen(process.env.PORT, () => {
    console.log(`DB connected...and server started on ${process.env.PORT}`);
  });
};

start();
