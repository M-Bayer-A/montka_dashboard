import axios from "axios";
import cookieHelper from "./cookieHelper";

const apiClient = axios.create({
  baseURL: "https://waslny-project.vercel.app/api/", // Adjust the baseURL to your API endpoint
  headers: {
    "Content-Type": "application/json",
  },
});
//
apiClient.interceptors.request.use(
  (config) => {
    const token = cookieHelper.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
//
export const endpoints = {
  login: "/api/admin/login",
  otpVerify: "/api/admin/otp/verify",
  home: {
    appInfo: "/api/dashboard/header-stats",
    chartsInfo: "/api/dashboard/chart-stats",
  },
  coupons: {
    index: "/api/coupons",
    search: "/api/coupons/search",
    store: "/api/coupons",
    show: "/api/coupons",
    delete: "/api/coupons",
  },
  trips: {
    index: "/api/trips/admin",
    search: "/api/trips/admin/search",
    show: "/api/trips/admin",
  },
  drivers: {
    index: "/api/drivers",
    search: "/api/drivers/search",
    show: "/api/drivers",
  },
  riders: {
    index: "/api/riders",
    search: "/api/riders/search",
    show: "/api/riders",
  },
  carModels: {
    index: "/api/car-models/admin",
    search: "/api/car-models/admin/search",
    store: "/api/car-models/admin",
    show: "/api/car-models/admin",
  },
};
//
export const apiService = {
  get: (endpoint, params) => {
    return apiClient.get(endpoint, { params });
  },
  post: (endpoint, data, params) => {
    return apiClient.post(endpoint, data, { params });
  },
  put: (endpoint, data) => {
    return apiClient.put(endpoint, data);
  },
  delete: (endpoint) => {
    return apiClient.delete(endpoint);
  },
  patch: (endpoint, data) => {
    return apiClient.patch(endpoint, data);
  },
};
