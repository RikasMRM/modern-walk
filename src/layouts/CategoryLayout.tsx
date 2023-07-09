import React from "react";
import Navbar from "../components/organisms/Navbar";

interface CategoryLayoutProps {
  children: React.ReactNode;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default CategoryLayout;
