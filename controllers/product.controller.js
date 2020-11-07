const Product = require("../models/product.model.js");

// Retrieve all Products from the database
exports.findAll = (req, res) => {
  Product.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers.",
      });
    else {
      JSON.parse(JSON.stringify(data));
      res.send(data);
    }
  });
};
