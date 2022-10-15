import axios from "axios";
import { isNull } from "lodash";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  timeout: 600000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Remove headers for external APIs headers

axiosInstance.interceptors.request.use((config) => {
  const AUTH_TOKEN = localStorage.getItem("flaskJWTToken");

  if (!isNull(AUTH_TOKEN)) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
    };
  }

  return config;
});
