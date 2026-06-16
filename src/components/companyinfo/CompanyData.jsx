'use client';

import { useState } from 'react';
import CompanyFormModal from '@/components/companyinfo/CompanyFormModal';

export default function CompanyPage({ recuiter }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/25 transition hover:bg-blue-500"
      >
        Register New Company
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-white/10 bg-[#070a12] shadow-2xl shadow-black/40">
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 grid size-10 cursor-pointer place-items-center rounded-full border border-white/10 bg-white/10 text-xl text-white transition hover:bg-white/15"
            >
              x
            </button>

            <CompanyFormModal recuiter={recuiter} />
          </div>
        </div>
      )}
    </>
  );
}
