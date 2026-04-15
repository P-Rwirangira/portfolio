import React, { ReactNode } from "react";

const TabsTrigger = ({
  value,
  selected,
  onClick,
  children,
}: {
  value: string;
  selected: boolean;
  onClick: (value: string) => void;
  children: ReactNode;
}) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all
      ${selected ? "bg-background shadow-sm text-foreground" : "text-muted-foreground hover:text-foreground"}`}
    onClick={() => onClick(value)}
  >
    {children}
  </button>
);

export default TabsTrigger;
