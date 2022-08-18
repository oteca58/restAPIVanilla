const products = require("../data/products");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(Id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === Id);
    resolve(product);
  });
}

module.exports = {
  findAll,
  findById,
};
