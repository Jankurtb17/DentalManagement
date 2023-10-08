import axios, { type AxiosInstance  } from "axios";

const apiClient: AxiosInstance = axios.create({
  // baseURL: "https://dental-management-backend.vercel.app",
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;