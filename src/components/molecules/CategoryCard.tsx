import React from "react";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

interface CategoryCardProps {
  image: string;
  title: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ image, title, onClick }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl">
      <Image src={image} alt={title} />
      <div className="p-4">
        <Title>{title}</Title>
        <Button onClick={onClick}>View Category</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
