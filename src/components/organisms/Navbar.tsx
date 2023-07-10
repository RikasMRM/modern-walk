import React from "react";
import { Link } from "react-router-dom";
import { Title } from "../atoms";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white p-2 mt-0 w-full mb-3 shadow-md">
      <div className="container mx-auto flex items-center justify-center">
        <Link to="/" className="text-gray-800 text-center text-3xl font-bold">
          <Title children={"Modern Walk"} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
