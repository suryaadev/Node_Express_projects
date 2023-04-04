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
    const { featured, company, name, sort } = req.query;
    const queryObject = {};

    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
      queryObject.company = company;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    if (numericFilters) {
      const operatorMap = {
        ">": "$gt",
        ">=": "$gte",
        "=": "$eq",
        "<": "$lt",
        "<=": "$lte",
      };
      const regEx = /\b(<|>|>=|=|<|<=)\b/g;
      let filters = numericFilters.replace(
        regEx,
        (match) => `-${operatorMap[match]}-`
      );
      const options = ["price", "rating"];
      filters = filters.split(",").forEach((item) => {
        const [field, operator, value] = item.split("-");
        if (options.includes(field)) {
          queryObject[field] = { [operator]: Number(value) };
        }
      });
    }
    let result = Product.find(queryObject);
    // sort
    if (sort) {
      const sortList = sort.split(",").join(" ");
      result = result.sort(sortList);
    } else {
      result = result.sort("createdAt");
    }

    if (fields) {
      const fieldsList = fields.split(",").join(" ");
      result = result.select(fieldsList);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await product.find(queryObject);
    console.log(req.query);
    res.status(200).json({ products, nbHits: products.length });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
