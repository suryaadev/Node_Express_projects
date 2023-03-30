const express = require("express");

const getAllProducts = (req, res) => {
  try {
    res.status(200).json({ status: "OK" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = getAllProducts;
