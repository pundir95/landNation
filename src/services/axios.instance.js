import axios from "axios";
import { toast } from "react-toastify";

const instance = axios.create({
  baseURL: "http://192.168.1.85:8000/",
  // baseURL: 'https://registration-api.fiitjee.com/admin',
});

let token = localStorage.getItem("token");

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = `Bearer ${token}`;
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
    console.log(error,"ins")
    toast.error(message);
    return Promise.reject(error);
  }
);

export default instance;
