const express = require("express");
const app = express();
let connection = require("./sqlConnect");
var cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(cors());

app.get("/api/data", (req, res) => {
  let sql = `SELECT * FROM products.products`;
  connection.query(sql, (err, results) => {
    res.send(results);
  });
});
app.post("/api/data/post", (req, res) => {
  const idProducts = req.body.idProducts;
  const ProductsName = req.body.ProductsName;
  const ProductsPrice = req.body.ProductsPrice;
  const ProductsImage = req.body.ProductsImage;
  const ProductsDescription = req.body.ProductsDescription;
  let sql = `INSERT INTO products (idProducts, ProductsName, ProductsPrice, ProductsImage, ProductsDescription) VALUES (?, ?, ?, ?, ?)`;
  connection.query(
    sql,
    [
      idProducts,
      ProductsName,
      ProductsPrice,
      ProductsImage,
      ProductsDescription,
    ],
    (error, result) => {
      if (error) {
        throw error;
      }
      res.send(result);
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running on port 5000 ");
});
