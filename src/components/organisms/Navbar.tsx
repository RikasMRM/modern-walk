import React from "react";
import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

const Navbar: React.FC = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="bg-white p-2 mt-0 w-full mb-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/home" className="text-gray-800 text-center text-3xl font-bold">
          <Title children={"Modern Walk"} />
        </Link>
        <div>
          <Button
            type="submit"
            className="bg-red-500 text-white rounded-md px-4 py-2 mb-2"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
