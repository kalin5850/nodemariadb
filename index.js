const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const middleware = require("./lib/middleware");
const morgan = require("morgan");

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

app.use([
  middleware.requestTime,
  middleware.log,
  middleware.requireAuthenticatio,
  express.static("public"),
  morgan("tiny"),
]);

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

require("./routes/product.routes.js")(app);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
