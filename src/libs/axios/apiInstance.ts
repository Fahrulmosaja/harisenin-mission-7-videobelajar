import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL_MOCKAPI;

export const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});