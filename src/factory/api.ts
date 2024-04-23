import axios from "axios";
import baseUrl from "../config/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API = () => {
  axios.defaults.headers.common["Accept"] = "*/*";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  const api = axios.create({ baseURL: baseUrl.URL });

  api.interceptors.request.use(async (config) => {
    const tokenData = await AsyncStorage.getItem("TokenStorageAsync");
    if (tokenData) {
      config.headers["Authorization"] = `Bearer ${tokenData}`;
    }

    return config;
  });

  return api; 
};

export default API();
