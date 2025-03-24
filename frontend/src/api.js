import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

//const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL //? import.meta.env.VITE_API_URL : apiUrl,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
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
//his file configures Axios for making API requests with JWT authentication.
//Retrieves JWT access token from localStorage.
//If a token exists, it adds Authorization: Bearer <token> to every request.
//This ensures that protected API routes receive a valid token.
//If the token is invalid or expired, the request will be denied by the backend.