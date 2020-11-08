const conn = require("../database/db.js");

// constructor
const Product = function (product) {
  this.name = product.name;
  this.description = product.description;
  this.price = product.price;
  this.category_i = product.category_id;
  this.create = product.created;
};

Product.getOne = (productId) => {
  return new Promise((resolve, reject) => {
    conn.then(async (sql) => {
      try {
        const result = await sql.query("select * from products where id = ?", [
          productId,
        ]);
        resolve(result);
      } catch (error) {
        reject(new Error(error));
      } finally {
        sql.release();
      }
    });
  });
};

Product.getAll = (callback) => {
  return new Promise((resolve, reject) => {
    conn.then(async (sql) => {
      try {
        const result = await sql.query("select * from productsa");
        resolve(result);
        // callback(null, result);
      } catch (error) {
        //   callback(null, error);
        reject(new Error(error));
      } finally {
        sql.release();
      }
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
