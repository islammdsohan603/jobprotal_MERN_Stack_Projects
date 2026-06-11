'use client';

import {
  Briefcase,
  Persons,
  Thunderbolt,
  CircleCheck,
} from '@gravity-ui/icons';

import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboard = () => {
  const { data: session, isPending } = useSession();
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {' '}
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  const recruiterStats = [
    { title: 'Total Job Posts', value: '48', icon: Briefcase },
    { title: 'Total Applicants', value: '1,284', icon: Persons },
    { title: 'Active Jobs', value: '18', icon: Thunderbolt },
    { title: 'Jobs Closed', value: '32', icon: CircleCheck },
  ];

  const user = session?.user;

  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {' '}
          Welcome , Back {user?.name}{' '}
        </h1>
        <DashboardStats statsData={recruiterStats} />
      </div>
    </div>
  );
};

export default RecruiterDashboard;
