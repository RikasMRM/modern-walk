import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const getProducts = async (category: string) => {
  const response = await api.get(`products/category/${category}`);
  return response.data;
};
