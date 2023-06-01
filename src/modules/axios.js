import axios from "axios";
import store from "@/store";

const MoviesClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1500,
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
    language: "pt-BR",
  },
});

MoviesClient.interceptors.request.use((config) => {
  store.commit("setLoading", true);
  return config;
});

MoviesClient.interceptors.response.use(
  (response) => {
    store.commit("setLoading");
    return response;
  },
  (error) => {
    store.dispatch("setLoading");
    throw error;
  }
);

export default MoviesClient;
