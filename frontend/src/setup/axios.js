import axios from 'axios';
import store from './../store';

const API_URL = process.env.API_URL || 'http://localhost:8001';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.token}`,
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = config;
    const token = store.getters['auth/token'];

    newConfig.headers.Accept = 'application/json';

    if (token) {
      newConfig.headers.Authorization = `Bearer ${token}`;
    }

    return newConfig;
  },
  err => Promise.reject(err),
);

axiosInstance.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response.status === 401) {
      store.commit('auth/logout');
      window.location.reload();

      return null;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
