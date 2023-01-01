import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  withCredentials: true,
};

const api: AxiosInstance = axios.create(axiosConfig);

export default api;
