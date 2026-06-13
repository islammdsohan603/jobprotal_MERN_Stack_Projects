'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  Building2,
  Bookmark,
  Zap,
  FileText,
  Target,
  LineChart,
} from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Smart Search',
      description: 'Find your ideal job with advanced filters.',
      icon: <Search size={24} />,
    },
    {
      title: 'Salary Insights',
      description: 'Get real salary data to negotiate confidently.',
      icon: <TrendingUp size={24} />,
    },
    {
      title: 'Top Companies',
      description: 'Apply to vetted companies that are hiring.',
      icon: <Building2 size={24} />,
    },
    {
      title: 'Saved Jobs',
      description: 'Manage apps & favorites on your dashboard.',
      icon: <Bookmark size={24} />,
    },
    {
      title: 'One-Click Apply',
      description: 'Simplify your job applications for an easier process!',
      icon: <Zap size={24} />,
    },
    {
      title: 'Resume Builder',
      description: 'Create professional resumes with modern templates.',
      icon: <FileText size={24} />,
    },
    {
      title: 'Skill-Based Matching',
      description: 'Discover jobs that match your skills and experience.',
      icon: <Target size={24} />,
    },
    {
      title: 'Career Growth Resources',
      description: 'Boost your career with quick interview tips.',
      icon: <LineChart size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden bg-[#070a12] py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center justify-center gap-3 text-xs font-bold tracking-[0.2em] text-blue-400 md:text-sm"
          >
            <div className="size-1.5 rounded-full bg-blue-400" />
            <span>FEATURED TOOLKIT</span>
            <div className="size-1.5 rounded-full bg-blue-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl"
          >
            Everything you need <br className="hidden md:block" /> to succeed
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex min-h-40 items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-lg shadow-black/10 transition-colors hover:bg-white/[0.055]"
            >
              <div className="relative shrink-0">
                <div className="flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-[#111827] text-gray-400 shadow-lg transition-all duration-300 group-hover:border-blue-500/50 group-hover:text-blue-400 md:size-14">
                  {feature.icon}
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div>
                <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-blue-300">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
