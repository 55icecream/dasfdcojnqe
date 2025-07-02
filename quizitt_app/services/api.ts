import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Always use the new deployed backend URL
const API_BASE_URL = "https://quizitt-test-dep.onrender.com";

console.log("API_BASE_URL:", API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // Increased timeout for mobile networks
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    console.log("Full URL:", `${config.baseURL}${config.url}`);

    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error getting token from storage:", error);
    }
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    return response;
  },
  async (error) => {
    console.error(
      "API Response Error:",
      error.response?.status,
      error.response?.data
    );
    console.error("Network Error Details:", error.message);
    console.error("Error Config:", error.config);

    if (error.code === "NETWORK_ERROR" || error.message === "Network Error") {
      console.error("Network connectivity issue. Please check:");
      console.error("1. Backend server is running and accessible");
      console.error("2. API_BASE_URL is correct for your environment");
      console.error("3. Device/emulator can reach the server");
      console.error("4. Firewall settings allow the connection");
    }
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401) {
      try {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        console.log("Token expired, cleared from storage");
      } catch (storageError) {
        console.error("Error clearing storage:", storageError);
      }
    }
    return Promise.reject(error);
  }
);

export const testConnection = () => api.get("/api/v1/auth/me");

export const login = (email: string, password: string) =>
  api.post("/api/v1/auth/login", { email, password });

export const register = (username: string, email: string, password: string) =>
  api.post("/api/v1/auth/register", { username, email, password });

export const verifyEmail = (email: string, otp: string) =>
  api.post("/api/v1/auth/verify-email", { email, otp });

export const logout = () => api.post("/api/v1/auth/logout");

export const getCurrentUser = () => api.get("/api/v1/auth/me");

export const getGoogleAuthUrl = () => `${API_BASE_URL}/api/v1/auth/google`;

export const handleGoogleAuthCallback = (url: string) => {
  return url;
};

export default api;
