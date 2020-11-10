const express = require("express");
const router = express.Router();
const products = require("../controllers/product.controller.js");

// Retrieve all Products
router.get("/", products.findAll);

// Retrieve a single Customer with customerId
router.get("/:productId", products.findOne);

module.exports = router;
