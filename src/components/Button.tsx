import React from 'react';
interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode; // Define children as ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children} {/* Render children */}
    </button>
  );
};

export default Button;