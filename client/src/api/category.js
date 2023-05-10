import { URI } from './api';

const getCategories = async () => {
  const res = await URI.get('categories');
  return res.data;
};

const getCategory = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await URI.get(`categories/${id}`);
  return res.data;
};

const createCategory = async (category) => {
  return URI.post('categories/create', category);
};

const deleteCategory = async (id) => {
  return URI.delete(`categories/delete/${id}`);
};

const updateCategory = async ({ id, ...category }) => {
  const res = URI.put(`categories/update/${id}`, category);
  return res.data;
};

export {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
