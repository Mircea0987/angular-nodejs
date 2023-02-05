const express = require("express");
const app = express();
let connection = require("./sqlConnect");
var cors = require("cors");
app.use(cors());

app.get("/api/data", (req, res) => {
  let sql = `SELECT * FROM products.products`;
  connection.query(sql, (err, results) => {
    res.send(results);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000 ");
});
