import { URI } from './api';

//FETCHING API

const getProducts = async () => {
  const res = await URI.get('products');
  return res.data;
};

const getProduct = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await URI.get(`products/${id}`);
  return res.data;
};

const createProduct = async (product) => {
  return URI.post('products/create', product);
};

const deleteProduct = async (id) => {
  return URI.delete(`products/delete/${id}`);
};

const updateProduct = async ({ id, ...product }) => {
  const res = URI.put(`products/update/${id}`, product);
  return res.data;
};

export { getProducts, getProduct, createProduct, deleteProduct, updateProduct };
