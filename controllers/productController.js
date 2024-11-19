const pool = require("../database/db");

exports.getProducts = async (req, res) => {
  try {
    // console.log(DATA);
    const result = await pool.query("SELECT * FROM products");
    res.render("products", { title: "Product List", DATA: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("SERVER ERROR");
  }
};

exports.addProduct = async (req, res) => {
  const { title, description } = req.body;
  try {
    await pool.query(
      "INSERT INTO products (title, description) VALUES ($1,$2)",
      [title, description]
    );
    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("SERVER ERROR");
  }
};
