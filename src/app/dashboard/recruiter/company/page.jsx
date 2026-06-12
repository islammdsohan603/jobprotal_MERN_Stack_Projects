'use client';

import { motion } from 'framer-motion';

import CompanyFormModal from '@/components/companyinfo/CompanyFormModal';

export default function CompanyPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-5xl p-6"
    >
      <div className="overflow-hidden rounded-2xl border border-default-200 bg-content1 shadow-sm">
        <div className="border-b border-default-200 px-8 py-6">
          <h1 className="text-2xl font-bold">Register New Company</h1>

          <p className="mt-1 text-sm text-default-500">
            Enter your business details to start hiring on HireLoop.
          </p>
        </div>

        <CompanyFormModal />
      </div>
    </motion.div>
  );
}
