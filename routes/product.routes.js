module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Retrieve all Products
  app.get("/api/v1/products", products.findAll);

  // Retrieve a single Customer with customerId
  app.get("/api/v1/products/:productId", products.findOne);
};
