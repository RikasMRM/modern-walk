import React from "react";
import { Link } from "react-router-dom";
import { ProductsAPI } from "../services/index";
import ProductRow from "../components/organisms/ProductRow";
import MainLayout from "../layouts/MainLayout";

const HomeTemplate: React.FC = () => {
  const {
    data: flashSaleProducts,
    isLoading,
    error,
  } = ProductsAPI.useFlashSaleProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: "failed..."</div>;
  }

  return (
    <MainLayout>
      <p className="font-bold text-left text-3xl mb-10">Flash Sale</p>
      {flashSaleProducts?.length ? (
        <ProductRow products={flashSaleProducts} />
      ) : (
        <div>No flash sale products available.</div>
      )}
      <p className="font-bold text-left text-3xl mb-10 mt-10">Categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-center">
        <Link
          to="/mens-clothing"
          className="inline-block bg-teal-400 text-white px-40 py-20 rounded-lg text-4xl w-full"
        >
          Men's Clothing
        </Link>
        <Link
          to="/womens-clothing"
          className="inline-block bg-pink-500 text-white px-40 py-20 rounded-lg text-4xl w-full"
        >
          Women's Clothing
        </Link>
      </div>
    </MainLayout>
  );
};
export default HomeTemplate;
