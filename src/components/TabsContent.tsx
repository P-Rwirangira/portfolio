import React, { ReactNode } from 'react';

const TabsContent = ({ value, selectedTab, children }: { value: string, selectedTab: string, children: ReactNode }) => (
  <div className={`mt-2 ${value === selectedTab ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

export default TabsContent;