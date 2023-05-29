import axios from "axios";

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

export default MoviesClient;
