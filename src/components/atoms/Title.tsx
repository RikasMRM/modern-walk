import React from "react";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return <h1 className={`font-bold text-center text-xl py-2 ${className}`}>{children}</h1>;
};

export default Title;
