import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export const tokenInstance = axios.create({
  baseURL: process.env.REQ_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instance = axios.create({
  baseURL: process.env.REQ_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

tokenInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = selectToken(store.getState());
  console.log(token);
  if (config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});