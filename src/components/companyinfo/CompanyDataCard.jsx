import Link from 'next/link';
import React from 'react';

const CompanyDataCard = ({ card }) => {
  return (
    <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-6 text-white shadow-xl shadow-black/20 transition-all hover:-translate-y-1 hover:border-blue-500/40">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-blue-500/10 text-lg font-bold text-blue-300">
          {card.companyName?.charAt(0) || 'C'}
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {card.status}
        </span>
      </div>

      <h1 className="text-lg font-bold md:text-2xl">
        Company: {card.companyName}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2 text-sm text-gray-300">
        <span className="rounded-full bg-white/5 px-3 py-1">
          {card.industry}
        </span>
        <span className="rounded-full bg-white/5 px-3 py-1">
          {card.location}
        </span>
      </div>

      <Link
        href={`${card.website}`}
        className="mt-5 inline-flex text-sm font-semibold text-blue-300 transition hover:text-blue-200"
      >
        website
      </Link>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-400">
        {card.description}
      </p>
    </div>
  );
};

export default CompanyDataCard;
