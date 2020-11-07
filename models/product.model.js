const conn = require("../database/db.js");

// constructor
const Product = function (product) {
  this.name = product.name;
  this.description = product.description;
  this.price = product.price;
  this.category_i = product.category_id;
  this.create = product.created;
};

Product.getAll = (callback) => {
  return new Promise((resolve, reject) => {
    conn
      .then(async (sql) => {
        try {
          const result = await sql.query("select * from products");
          resolve(result);
          // callback(null, result);
        } catch (error) {
          //   callback(null, error);
          reject(error);
        } finally {
          sql.release();
        }
      })
      .catch(() => {
        console.log();
      });
  });
  //   conn
  //     .then(async (sql) => {
  //       try {
  //         const result = await sql.query("select * from products");
  //         return Promise.resolve(result);
  //         // callback(null, result);
  //       } catch (error) {
  //         callback(null, error);
  //       } finally {
  //         sql.release();
  //       }
  //     })
  //     .catch(() => {
  //       console.log();
  //     });
};

module.exports = Product;
