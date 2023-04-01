const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
require("dotenv").config();
const productRoutes = require("./routes/products");
require("express-async-errors");

// middleware
app.use(express.json());
app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.send('<h1>HOME</h1><a href="/api/v1/products">products</a>');
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(`DB connected...and server started on ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
