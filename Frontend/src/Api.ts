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
    // console.log(ACCESS_TOKEN)
    const token: string = cookies.get(ACCESS_TOKEN);
    // console.log("Token from cookie:", token);
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // console.log("Authorization header set:", config.headers.Authorization);
    } else {
      // console.log("No token found in cookie");
    }
    
    // console.log("Full config:", config);
    return config;
  },
  (error) => {
    console.error("Error in interceptor:", error);
    return Promise.reject(error);
  }
);

export default api;
