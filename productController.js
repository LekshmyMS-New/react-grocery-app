const Product = require("../models/Product");
const { formatPrice } = require("../utils/helpers");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    const formattedProducts = products.map((product) => ({
      ...product.dataValues,
      price: formatPrice(product.price), // Format price
    }));

    res.json(formattedProducts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};
