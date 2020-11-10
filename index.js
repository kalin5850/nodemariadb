const CONFIG = require("config");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const middleware = require("./lib/middleware");
const morgan = require("morgan");
const products = require("./routes/product.routes");

/*
const conn = require("./database/db.js");

app.get("/", (req, res) => {
  conn
    .then(async (sql) => {
      try {
        const result_1 = await sql.query("select * from products");
        // console.log(result_1);
        JSON.parse(JSON.stringify(result_1));
        res.send(result_1);
      } catch (err) {
        console.log(`Query error message: ${err}`);
      } finally {
        if (sql) {
          console.log("Print finally block statement");
          sql.release();
        }
      }
    })
    .catch(async (err) => {
      throw err;
    });
});
*/

/** get env variables **/
console.log(app.get("env"));

/** get env variables using config package **/
console.log(CONFIG.get("name"));
console.log(CONFIG.get("mail.host"));

app.use([
  middleware.requestTime,
  middleware.log,
  middleware.requireAuthenticatio,
  express.static("public"),
  morgan("tiny"),
]);
app.use("/api/v1/products", products);

app.get(
  "/",
  (req, res, next) => {
    // res.send({
    //   message: `this is a testing message at ${req.requestTime}`,
    // });
    console.log("this is the first testing message");
    next();
  },
  (req, res, next) => {
    console.log("this is the second testing message");
    res.send({
      message: `this is a testing message at ${req.requestTime}`,
    });
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
