import React from 'react';

interface ButtonProps {
  variant?: 'outline' | 'contained';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'contained', size = 'md', asChild = false, className = '', children }) => {
  const buttonClass = `btn ${variant === 'outline' ? 'btn-outline' : 'btn-contained'} ${size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : 'btn-md'} ${className}`;

  return (
    <button className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;