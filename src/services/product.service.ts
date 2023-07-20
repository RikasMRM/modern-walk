import { productApi } from "./api.service";

export const getProducts = async () => {
  const products = await productApi.get("/products");
  return products.data;
};
export const getFlashSaleProducts = async () => {
  const mensProducts = await productApi.get(
    "/products/category/men's clothing?limit=2"
  );
  const womenProducts = await productApi.get(
    "/products/category/women's clothing?limit=2"
  );
  return [...mensProducts.data, ...womenProducts.data];
};

export const getMensProducts = async () => {
  const products = await productApi.get("/products/category/men's clothing");
  return products.data;
};
export const getWomenProducts = async () => {
  const products = await productApi.get("/products/category/women's clothing");
  return products.data;
};
