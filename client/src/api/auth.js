//import Axios from 'axios';

import { URI } from './api';

//Axios.defaults.withCredentials = true; //to be able to read session

const logIn = async (user) => {
  return await URI.post('auth/login', user);
};

const isLoggedIn = async () => {
  const res = await URI.get('auth/login');
  return res.data;
};

const logOut = async () => {
  return URI.get('auth/logout');
};
export { logIn, logOut, isLoggedIn };
