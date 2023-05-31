import React from "react";

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

  const category = title.toLowerCase().includes("women") ? "womens-clothing" : "mens-clothing";
  const categoryColor = category === "womens-clothing" ? "bg-pink-500" : "bg-teal-400";

  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl pb-0">
      <p className="font-bold text-center text-xl py-2">
        {truncateString(title, 15)}
      </p>
      <a href="#">
        <img src={image} alt={title} className="object-cover w-full h-40" />
      </a>
      <div className={`p-5 rounded-lg text-center ${categoryColor}`}>
        <p className="font-bold text-xl text-blue-800">Rs {price}</p>
        <p className="text-sm">{truncateString(description, 100)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
