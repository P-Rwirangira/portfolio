import React from 'react';

interface BadgeProps {
  className?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ className, variant = 'primary', children }) => {
  const variantClass = variant === 'primary' ? 'bg-primary text-white' : 'bg-secondary text-gray-800';
  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${variantClass} ${className}`}>
      {children}
    </span>
  );
};