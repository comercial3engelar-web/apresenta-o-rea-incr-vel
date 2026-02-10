import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <img 
      src="https://engelar.eng.br/wp-content/uploads/2024/09/Logo-branco.png" 
      alt="Engelar Logo" 
      className={`h-12 object-contain ${className}`}
    />
  );
};