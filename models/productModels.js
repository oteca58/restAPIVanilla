const products = require("../data/products");
const { v4: uuidv4 } = require("uuid");
const { writeDataToFile } = require("../utils");

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

function createProduct(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

module.exports = {
  findAll,
  findById,
  createProduct,
};
