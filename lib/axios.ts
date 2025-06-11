import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  params: {
    key: API_KEY,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
