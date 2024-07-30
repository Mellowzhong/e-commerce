import axios from "axios";
import { ACCESS_TOKEN } from "./Utilities/Constants";
import { Cookies } from "react-cookie";
import { BASE_URL } from "./Utilities/Constants";
const cookies = new Cookies();

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = cookies.get(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
