import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

import { store } from '../store/index';
import { selectToken } from '../store/selectors';

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
