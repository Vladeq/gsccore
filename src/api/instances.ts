import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

import { selectToken } from '../store/ducks/user/user-selectors';
import { store } from '../store/index';

export const tokenInstance = axios.create({
  baseURL: process.env.REQUEST_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instance = axios.create({
  baseURL: process.env.REQUEST_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

tokenInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = selectToken(store.getState());
  if (config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
