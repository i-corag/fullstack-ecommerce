import productService from '../services/products.services.js';

// CREATE PRODUCT
const createProduct = async (req, res) => {
  const body = req.body;
  try {
    const createdProduct = await productService.createProduct(body);
    return res.status(201).send(createdProduct);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//READ ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    return res.status(201).send(products);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//READ ONE PRODUCT
const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.getProduct(id);
    if (!product) {
      return res.status(409).send(`The product ID: "${id}" does not exist`);
    }
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//UPDATE PRODUCT
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedProduct = await productService.updateProduct(id, body);
    if (!updatedProduct) {
      return res.status(409).send(`The product ID: "${id}" does not exist`);
    }
    return res.status(201).send(updatedProduct);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

//DELETE PRODUCT
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await productService.deleteProduct(id);
    if (!deletedProduct) {
      return res.status(409).send(`The product ID: "${id}" does not exist`);
    }
    return res
      .status(201)
      .send(`The product: "${deletedProduct.name}" was successfully deleted`);
  } catch (err) {
    return res.status(500).send(`Server error: ${err.message}`);
  }
};

export { createProduct, getProducts, getProduct, updateProduct, deleteProduct };
