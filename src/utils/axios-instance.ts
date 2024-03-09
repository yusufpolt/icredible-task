import axios from 'axios';
import {storage} from './storage';

const axiosInstance = axios.create({
  timeout: 15000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'content-type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(async function (config) {
  const token = await storage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  error => {
    if (error.response.data) {
      throw new Error(error.response.data.messageCode);
    }
  },
);
