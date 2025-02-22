import axios from "axios";
import TokenService from "./token/tokenService";

const api = axios.create({
  baseURL: import.meta.env.VITE_MLM_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle unauthorized requests
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      // Token is invalid or expired
      TokenService.removeToken();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
//post
export const post = async (path: string, data: any) => {
  try {
    const response = await api.post(path, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const get = async (path: string, params?: Record<string, any>) => {
  try {
    const response = await api.get(path, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const put = async (path: string, data: any) => {
  try {
    const response = await api.put(path, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
