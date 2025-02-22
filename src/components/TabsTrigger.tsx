import React, { ReactNode } from 'react';

const TabsTrigger = ({ value, selected, onClick, children }: { value: string, selected: boolean, onClick: (value: string) => void, children: ReactNode }) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all
      ${selected ? 'bg-white shadow-sm text-black' : 'text-gray-600 hover:text-black'}`}
    onClick={() => onClick(value)}
  >
    {children}
  </button>
);

export default TabsTrigger;