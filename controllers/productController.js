const product = require("../models/productModel");

exports.getProducts = async (req, res) => {
  try {
    // console.log(DATA);
    const result = await product.getAllProducts();
    res.render("products", { title: "Product List", DATA: result });
  } catch (err) {
    console.error(err);
    res.status(500).send("SERVER ERROR");
  }
};

exports.addProduct = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newProduct = await product.addProduct(title, description);
    res.redirect("/products");
  } catch (err) {
    console.error(err);
    res.status(500).send("SERVER ERROR");
  }
};
