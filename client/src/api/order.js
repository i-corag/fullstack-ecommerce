import { URI } from './api';

//FETCHING API

const getOrders = async () => {
  const res = await URI.get('orders');
  return res.data;
};

const getOrder = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await URI.get(`orders/${id}`);
  return res.data;
};

const createOrder = async (order) => {
  return URI.post('orders/create', order);
};

const deleteOrder = async (id) => {
  return URI.delete(`orders/delete/${id}`);
};

const updateOrder = async ({ id, ...order }) => {
  const res = URI.put(`orders/update/${id}`, order);
  return res.data;
};

export { getOrders, getOrder, createOrder, deleteOrder, updateOrder };
