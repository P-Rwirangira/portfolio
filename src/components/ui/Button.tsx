import React from 'react';

interface ButtonProps {
  variant?: 'outline' | 'contained';
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'contained', asChild = false, className = '', children }) => {
  const buttonClass = `btn ${variant === 'outline' ? 'btn-outline' : 'btn-contained'} ${className}`;

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;