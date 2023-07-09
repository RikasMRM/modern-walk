import React from "react";
import CategoryCard from "../molecules/CategoryCard";

interface Category {
  id: number;
  title: string;
  image: string;
}

interface CategoryRowProps {
  categories: Category[];
}

const CategoryRow: React.FC<CategoryRowProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          image={category.image}
          title={category.title}
          onClick={() => console.log(`${category.title} clicked!`)} // replace with appropriate click handler
        />
      ))}
    </div>
  );
};

export default CategoryRow;
