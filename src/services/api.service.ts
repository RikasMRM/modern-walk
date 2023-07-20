import axios from "axios";

const API_CLIENT_URL = "http://localhost:3000"

export const productApi = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const clientApi = axios.create({
  baseURL: API_CLIENT_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
