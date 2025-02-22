import React, { ReactNode } from 'react';

const Card = ({ className = "", children }: { className?: string, children: ReactNode }) => (
  <div className={`rounded-lg border shadow-sm bg-white ${className}`}>
    {children}
  </div>
);

export default Card;