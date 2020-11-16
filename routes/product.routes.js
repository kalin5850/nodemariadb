const express = require("express");
const router = express.Router();
const products = require("../controllers/product.controller.js");

// Retrieve all Products
router.get("/", products.findAll);

// Retrieve a single Product with productId
router.get("/:productId", products.findOne);

// Remove a single Product with productId
router.delete("/:productId", products.remove);

module.exports = router;
