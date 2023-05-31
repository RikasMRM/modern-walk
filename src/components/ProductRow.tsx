import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductRowProps {
  products: Product[];
}

const ProductRow: React.FC<ProductRowProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductRow;
