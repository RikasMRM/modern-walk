import { productApi } from "./api.service";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  return useQuery(["products"], () =>
    productApi.get("/products").then((res) => res.data)
  );
};

export const useFlashSaleProducts = () => {
  return useQuery(["flashSaleProducts"], async () => {
    const mensProducts = await productApi.get(
      "/products/category/men's clothing?limit=2"
    );
    const womenProducts = await productApi.get(
      "/products/category/women's clothing?limit=2"
    );
    return [...mensProducts.data, ...womenProducts.data];
  });
};

export const useMensProducts = () => {
  return useQuery(["mensProducts"], () =>
    productApi.get("/products/category/men's clothing").then((res) => res.data)
  );
};

export const useWomenProducts = () => {
  return useQuery(["womenProducts"], () =>
    productApi
      .get("/products/category/women's clothing")
      .then((res) => res.data)
  );
};

// export const getProducts = async () => {
//   const products = await productApi.get("/products");
//   return products.data;
// };
// export const getFlashSaleProducts = async () => {
//   const mensProducts = await productApi.get(
//     "/products/category/men's clothing?limit=2"
//   );
//   const womenProducts = await productApi.get(
//     "/products/category/women's clothing?limit=2"
//   );
//   return [...mensProducts.data, ...womenProducts.data];
// };

// export const getMensProducts = async () => {
//   const products = await productApi.get("/products/category/men's clothing");
//   return products.data;
// };
// export const getWomenProducts = async () => {
//   const products = await productApi.get("/products/category/women's clothing");
//   return products.data;
// };
