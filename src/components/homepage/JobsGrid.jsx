'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '€25–€40/hour',
    applyUrl: '/apply/1',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '€25–€40/hour',
    applyUrl: '/apply/2',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '€25–€40/hour',
    applyUrl: '/apply/3',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '€25–€40/hour',
    applyUrl: '/apply/4',
  },
  {
    id: 5,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '€25–€40/hour',
    applyUrl: '/apply/5',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    description:
      'Showcase your commitment to diversity and inclusion by highlighting initiatives',
    location: 'New York, USA',
    jobType: 'Hybrid',
    salary: '€25–€40/hour',
    applyUrl: '/apply/6',
  },
];

export default function JobGrid() {
  return (
    <div className="bg-[#020617]">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
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
              className="bg-[#111827] p-6 rounded-2xl border border-white/10 text-white shadow-lg hover:border-blue-500/40 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>

              <p className="text-gray-400 text-sm mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-3 mb-4 text-xs">
                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                  📍 {job.location}
                </span>

                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                  💼 {job.jobType}
                </span>

                <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-full">
                  💰 {job.salary}
                </span>
              </div>

              <Link
                href={job.applyUrl}
                className="text-sm font-medium text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
              >
                Apply Now →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
