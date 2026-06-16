import React from 'react';
import CompanyRegisterPage from './CompanyProfile';
import { getUserSession } from '@/lib/core/session';

const CompanyPage = async () => {
  const user = await getUserSession();

  return (
    <div>
      <CompanyRegisterPage recuiter={user} />
    </div>
  );
};

export default CompanyPage;
