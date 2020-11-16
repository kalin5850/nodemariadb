const Product = require("../models/product.model.js");
const Joi = require("joi");

// Remove a product from the database
exports.remove = (req, res) => {
  (async () => {
    // validation parameter
    const schema = Joi.object({
      productId: Joi.number().integer().positive().required(),
    });
    await schema.validateAsync({
      productId: req.params.productId,
    });

    // delete
    const data = await Product.deleteOne(req.params.productId);
    JSON.parse(JSON.stringify(data));
    res.send(data);
  })().catch((e) => {
    console.error(e);
    res.status(500).send({
      message: e.message,
    });
  });
};

// Retrieve a product from the datatbase
exports.findOne = (req, res) => {
  (async () => {
    // validation parameter
    const schema = Joi.object({
      productId: Joi.number().integer().positive().required(),
    });
    await schema.validateAsync({
      productId: req.params.productId,
    });

    // query
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
