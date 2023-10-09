import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "https://api-fitijee-grep-dev.fastor.ai/admin",
  // baseURL: 'https://registration-api.fiitjee.com/admin',
});

let token = localStorage.getItem("token");

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const message = error.response.data?.message || "Something went wrong";
    toast.error(message);
    return Promise.reject(error);
  }
);

export default instance;
