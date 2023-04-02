const express = require("express");
const product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  try {
    const allProducts = await product.find({ featured: true });
    res.status(200).json({ nbHits: allProducts.length, allProducts });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    console.log(`weugn`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
