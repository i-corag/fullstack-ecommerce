import { URI } from './api';

//FETCHING API

const getBrands = async () => {
  const res = await URI.get('brands');
  return res.data;
};

const getBrand = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await URI.get(`brands/${id}`);
  return res.data;
};

const createBrand = async (brand) => {
  return URI.post('brands/create', brand);
};

const deleteBrand = async (id) => {
  return URI.delete(`brands/delete/${id}`);
};

const updateBrand = async ({ id, ...brand }) => {
  const res = URI.put(`brands/update/${id}`, brand);
  return res.data;
};

export { getBrands, getBrand, createBrand, deleteBrand, updateBrand };
