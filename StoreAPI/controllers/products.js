const express = require("express");

const getAllProducts = async (req, res) => {
  // throw new Error("testing error");
  res.status(200).json({ status: "OK" });
};

const getAllProductsStatic = async (req, res) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
