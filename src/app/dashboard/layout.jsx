import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

import React from 'react';

const DashboardLayot = ({ children }) => {
  return (
    <div className=" bg-[#0a0a0a] text-white">
      <div className="flex min-h-screen w-10/12 mx-auto">
        <DashboardSidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayot;
