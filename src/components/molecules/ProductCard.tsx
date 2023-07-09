import React from "react";
import Image from "../atoms/Image";
import Title from "../atoms/Title";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
}) => {
  const truncateString = (str: string | undefined, num: number) =>
    str && str.length > num ? str.substring(0, num) + "..." : str;

  const category = title.toLowerCase().includes("women")
    ? "womens-clothing"
    : "mens-clothing";
  const categoryColor =
    category === "womens-clothing" ? "bg-pink-500" : "bg-teal-400";

  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl pb-0">
      <Title>{truncateString(title, 15)}</Title>
      <Image src={image} alt={title} />
      <div className={`p-5 rounded-lg text-center ${categoryColor}`}>
        <p className="font-bold text-xl text-blue-800">Rs {price}</p>
        <p className="text-sm">{truncateString(description, 100)}</p>
      </div>
    </div>
  );
};
export default ProductCard;
