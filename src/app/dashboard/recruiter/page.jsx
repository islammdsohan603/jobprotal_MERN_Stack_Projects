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
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/[0.08] to-white/[0.025] p-6 shadow-xl shadow-black/20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          Overview
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
          Welcome Back, {user?.name}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-400">
          Track job posts, applicants, and hiring activity from one clean
          workspace.
        </p>
        <DashboardStats statsData={recruiterStats} />
      </div>
    </div>
  );
};

export default RecruiterDashboard;
