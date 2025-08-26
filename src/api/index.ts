import { STORAGE_KEY } from "@/constants";
import { getAccessToken, getRefreshToken } from "@/utils/auth";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASE}/api/${process.env.NEXT_PUBLIC_API_VERSION}`;
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getRefreshToken();
        const response = await axiosPublic.post("/auth/refresh", {
          refreshToken,
        });

        const { token } = response.data;

        localStorage.setItem(STORAGE_KEY.APP_ID, token);

        const accessToken = getAccessToken();

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return axiosPrivate(originalRequest);
      } catch (error) {
        localStorage.clear();
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
