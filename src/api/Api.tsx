import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050",
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

const API = { post };

export default API;
