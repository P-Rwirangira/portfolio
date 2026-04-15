import React, { ReactNode } from "react";

const TabsList = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => (
  <div
    className={`inline-flex h-10 items-center justify-center rounded-md bg-muted text-muted-foreground p-1 ${className}`}
  >
    {children}
  </div>
);

export default TabsList;
