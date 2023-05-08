import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Axios from 'axios';

Axios.defaults.withCredentials = true; //to be able to read session

const URI = axios.create({
  baseURL: 'http://localhost:5955/api/',
});

const queryClient = new QueryClient();

export { URI, queryClient };
