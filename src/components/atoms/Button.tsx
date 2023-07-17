import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`rounded-lg px-5 py-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
