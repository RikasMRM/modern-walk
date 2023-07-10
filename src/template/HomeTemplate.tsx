import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";
import { ProductRow } from "../components/organisms";
import { MainLayout } from "../layouts";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const HomeTemplate: React.FC = () => {
  const [flashSaleProducts, setFlashSaleProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFlashSaleProducts = async () => {
      const mensProducts = await getProducts("men's clothing");
      const womensProducts = await getProducts("women's clothing");
      setFlashSaleProducts([
        ...mensProducts.slice(1, 3),
        ...womensProducts.slice(0, 2),
      ]);
    };

    fetchFlashSaleProducts();
  }, []);

  return (
    <MainLayout>
      <p className="font-bold text-left text-3xl mb-10">Flash Sale</p>
      <ProductRow products={flashSaleProducts} />
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
