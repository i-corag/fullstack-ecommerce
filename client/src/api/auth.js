//import axios from 'axios';
//import Axios from 'axios';

import { URI } from './api';

//Axios.defaults.withCredentials = true; //to be able to read session

//const URI = axios.create({
// baseURL: 'http://localhost:5955/api/auth',
//});

const logIn = async (user) => {
  return await URI.post('auth/login', user);
};
/*
const isLoggedIn = async () => {
  const res = await Axios.get('http://localhost:5955/api/auth/login');
  console.log(res);
  return res.data;
};
*/
const isLoggedIn = async () => {
  const res = await URI.get('auth/login');
  return res.data;
};

const logOut = async () => {
  return URI.get('auth/logout');
};
export { logIn, logOut, isLoggedIn };
