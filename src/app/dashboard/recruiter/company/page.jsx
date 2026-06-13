'use client';

import { useState } from 'react';
import CompanyFormModal from '@/components/companyinfo/CompanyFormModal';

export default function CompanyPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl bg-primary px-5 py-3 text-white cursor-pointer"
      >
        Register New Company
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-transparent">
            <button
              onClick={() => setOpen(false)}
              className="absolute cursor-pointer right-4 top-4 text-xl"
            >
              ✕
            </button>

            <CompanyFormModal />
          </div>
        </div>
      )}
    </>
  );
}
