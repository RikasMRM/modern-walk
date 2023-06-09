import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../services/api";
import ProductRow from "../components/organisms/ProductRow";
import CategoryLayout from "../layouts/CategoryLayout";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const CategoryTemplate: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { category } = useParams<{ category: string }>();

  useEffect(() => {
    const fetchProducts = async () => {
      let fetchedProducts: Product[] = [];

      if (category === "mens-clothing") {
        fetchedProducts = await getProducts("men's clothing");
      } else if (category === "womens-clothing") {
        fetchedProducts = await getProducts("women's clothing");
      }

      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, [category]);

  return (
    <CategoryLayout>
      <ProductRow products={products} />
    </CategoryLayout>
  );
};

export default CategoryTemplate;
