import CompanyPage from '@/components/companyinfo/CompanyData';
import CompanyDataCard from '@/components/companyinfo/CompanyDataCard';
import { getNewComapnyJobs } from '@/lib/api/jobs';

const CompanyRegisterPage = async () => {
  const result = await getNewComapnyJobs();

  const companies = result?.data || [];

  return (
    <div className="space-y-8 py-4">
      <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Company profile
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Registered Companies
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Manage company profiles connected to recruiter job posts.
          </p>
        </div>
        <CompanyPage />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map(card => (
          <CompanyDataCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CompanyRegisterPage;
