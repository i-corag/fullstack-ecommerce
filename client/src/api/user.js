// import axios from 'axios';

import { URI } from './api';

//FETCHING API

// const URI = axios.create({
// baseURL: 'http://localhost:5955/api/users',
// });

const getUsers = async () => {
  const res = await URI.get('users');
  return res.data;
};

const getUser = async ({ queryKey }) => {
  const id = queryKey[1];
  const res = await URI.get(`users/${id}`);
  return res.data;
};

const createUser = async (user) => {
  return URI.post('users/create', user);
};

const deleteUser = async (id) => {
  return URI.delete(`users/delete/${id}`);
};

const updateUser = async ({ id, ...user }) => {
  const res = URI.put(`users/update/${id}`, user);
  return res.data;
};

export { getUsers, getUser, createUser, deleteUser, updateUser };
