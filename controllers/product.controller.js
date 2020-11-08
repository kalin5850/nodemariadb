const Product = require("../models/product.model.js");

// Retrieve a product from the datatbase
exports.findOne = (req, res) => {
  (async () => {
    const data = await Product.getOne(req.params.productId);
    JSON.parse(JSON.stringify(data));
    res.send(data);
  })().catch((e) => {
    console.error(e);
    res.status(500).send({
      message: e.message,
    });
  });
};

// Retrieve all Products from the database
exports.findAll = (req, res) => {
  (async () => {
    const data = await Product.getAll();
    console.log("data=========================");
    JSON.parse(JSON.stringify(data));
    res.send(data);
  })().catch((e) => {
    console.error(e);
    res.status(500).send({
      message: e.message,
    });
  });

  //   Product.getAll((err, data) => {
  //     if (err)
  //       res.status(500).send({
  //         message:
  //           err.message || "Some error occurred while retrieving customers.",
  //       });
  //     else {
  //       JSON.parse(JSON.stringify(data));
  //       res.send(data);
  //     }
  //   });
};
