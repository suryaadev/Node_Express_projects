const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
  name: {
    type: "string",
    required: [true, "product name should be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price should be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
