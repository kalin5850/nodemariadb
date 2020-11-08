module.exports = (app) => {
  const products = require("../controllers/product.controller.js");

  // Retrieve all Products
  app.get("/products", products.findAll);

  // Retrieve a single Customer with customerId
  app.get("/products/:productId", products.findOne);
};
