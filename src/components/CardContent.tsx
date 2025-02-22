import React, { ReactNode } from 'react';

const CardContent = ({ className = "", children }: { className?: string, children: ReactNode }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

export default CardContent;