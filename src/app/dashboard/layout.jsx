import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';

import React from 'react';

const DashboardLayot = ({ children }) => {
  return (
    <div className="bg-[#05070d] text-white">
      <div className="mx-auto flex min-h-screen w-11/12 max-w-7xl gap-6 py-8">
        <DashboardSidebar />
        <main className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-2xl shadow-black/20 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayot;
