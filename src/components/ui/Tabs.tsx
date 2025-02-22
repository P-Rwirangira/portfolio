import React, { ReactNode, Dispatch, SetStateAction } from 'react';

interface TabsProps {
  children: ReactNode;
  onValueChange: Dispatch<SetStateAction<string>>;
}

interface TabsListProps {
  children: ReactNode;
  className: string;
}

interface TabsTriggerProps {
  children: string;
  key: string;
  className: string;
  onClick: () => void;
}

interface TabsContentProps {
  children: ReactNode;
}

export function Tabs({ children, onValueChange }: TabsProps) {
  return (
    <div className="tabs">
      {children}
    </div>
  );
}

export function TabsList({ children, className }: TabsListProps) {
  return (
    <div className={`tabs-list ${className}`}>
      {children}
    </div>
  );
}

export function TabsTrigger({ children, key, className, onClick }: TabsTriggerProps) {
  return (
    <div className={`tabs-trigger ${className}`} key={key} onClick={onClick}>
      {children}
    </div>
  );
}

export function TabsContent({ children }: TabsContentProps) {
  return (
    <div className="tabs-content">
      {children}
    </div>
  );
}