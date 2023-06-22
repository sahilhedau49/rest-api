const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProducts" });
};

const getAllProductsTest = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProductsTest" });
};

module.exports = { getAllProducts, getAllProductsTest };
