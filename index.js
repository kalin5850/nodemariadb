const express = require("express");
const app = express();
const port = 3000;

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

/**
 * middleware
 */
const requestTime = (req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.requestTime);
  next();
};

app.use(requestTime);

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
