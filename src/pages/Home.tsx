import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../services/api";
import ProductRow from "../components/ProductRow";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const Home: React.FC = () => {
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
    <div className="p-10">
      <h1>Flash Sale</h1>
      <ProductRow products={flashSaleProducts} />
      <Link
        to="/mens-clothing"
        className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg"
      >
        Men's Clothing
      </Link>
      <Link
        to="/womens-clothing"
        className="inline-block bg-pink-500 text-white px-4 py-2 rounded-lg"
      >
        Women's Clothing
      </Link>
    </div>
  );
};

export default Home;
