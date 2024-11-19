const pool = require("../database/db");

const getAllProducts = async () => {
  try {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
  } catch (err) {
    console.error("Error fetching products:", err);
    throw err;
  }
};

const addProduct = async (title, description) => {
  try {
    const result = await pool.query(
      "INSERT INTO products (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    return result.rows[0];
  } catch (err) {
    console.error("Error adding product:", err);
    throw err;
  }
};

module.exports = { getAllProducts, addProduct };
