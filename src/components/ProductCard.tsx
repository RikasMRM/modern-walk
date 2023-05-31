import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="border p-4">
      <img src={image} alt={title} />
      <h2 className="font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
