'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
  WalletCards,
} from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '$25-$40/hour',
    applyUrl: '/apply/1',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '$25-$40/hour',
    applyUrl: '/apply/2',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '$25-$40/hour',
    applyUrl: '/apply/3',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '$25-$40/hour',
    applyUrl: '/apply/4',
  },
  {
    id: 5,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '$25-$40/hour',
    applyUrl: '/apply/5',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '$25-$40/hour',
    applyUrl: '/apply/6',
  },
];

export default function JobGrid() {
  return (
    <section className="bg-[#05070d] py-24">
      <div className="mx-auto w-10/12 max-w-7xl">
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-400">
              Featured roles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Curated openings for fast-moving teams
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-gray-400">
            Explore high-quality roles from teams that are actively hiring right
            now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              className="group rounded-2xl border border-white/10 bg-white/[0.055] p-6 text-white shadow-xl shadow-black/20 ring-1 ring-white/[0.03] transition-all hover:border-blue-500/40 hover:bg-white/[0.075]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-300">
                  <BriefcaseBusiness size={22} />
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Hiring
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold">{job.title}</h3>

              <p className="mb-4 text-sm leading-6 text-gray-400">
                {job.description}
              </p>

              <div className="mb-4 flex flex-wrap gap-3 text-xs text-gray-300">
                <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
                  <MapPin size={13} /> {job.location}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
                  <BriefcaseBusiness size={13} /> {job.jobType}
                </span>

                <span className="flex items-center gap-1 rounded-full bg-white/5 px-2 py-1">
                  <WalletCards size={13} /> {job.salary}
                </span>
              </div>

              <Link
                href={job.applyUrl}
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-blue-200"
              >
                Apply Now <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
