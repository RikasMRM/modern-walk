import React from "react";
import { useParams } from "react-router-dom";
import { ProductsAPI } from "../services/index";
import ProductRow from "../components/organisms/ProductRow";
import CategoryLayout from "../layouts/CategoryLayout";

const CategoryTemplate: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const {
    data: mensProducts,
    isLoading: isLoadingMens,
    error: errorMens,
  } = ProductsAPI.useMensProducts();
  const {
    data: womenProducts,
    isLoading: isLoadingWomen,
    error: errorWomen,
  } = ProductsAPI.useWomenProducts();

  if (
    (category === "mens-clothing" && isLoadingMens) ||
    (category === "womens-clothing" && isLoadingWomen)
  ) {
    return <div>Loading...</div>;
  }

  if (
    (category === "mens-clothing" && errorMens) ||
    (category === "womens-clothing" && errorWomen)
  ) {
    return <div>Error: "failed..."</div>;
  }

  const products = category === "mens-clothing" ? mensProducts : womenProducts;
  // const {
  //   data: products,
  //   isLoading,
  //   error,
  // } = category === "mens-clothing"
  //   ? ProductsAPI.useMensProducts()
  //   : ProductsAPI.useWomenProducts();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: "failed..."</div>;
  // }

  return (
    <CategoryLayout>
      <ProductRow products={products || []} />
    </CategoryLayout>
  );
};

export default CategoryTemplate;
