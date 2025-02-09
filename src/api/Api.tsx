import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_MLM_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//post
export const post = async (path: string, data: any) => {
  try {
    const response = await api.post(path, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const get = async (path: string) => {
  try {
    const response = await api.get(path);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const put = async (path: string , data : any) => {
  try {
    const response = await api.put(path , data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

