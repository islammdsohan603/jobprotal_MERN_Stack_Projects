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
  // ফিচার ডাটা এরি
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

  // অ্যানিমেশন ভেরিয়েন্ট
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
    <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
      {/* ব্যাকগ্রাউন্ডে হালকা গ্লো ইফেক্ট */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* হেডার সেকশন */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-[0.2em] text-blue-500 mb-4"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span>FEATURES JOB</span>
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl mx-auto"
          >
            Everything you need <br className="hidden md:block" /> to succeed
          </motion.h2>
        </div>

        {/* ফিচারস গ্রিড */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex items-start gap-4 group"
            >
              {/* আইকন বক্স */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-2xl bg-[#1a1a1a] border border-white/10 text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                  {feature.icon}
                </div>
                {/* হোভার গ্লো ইফেক্ট */}
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* টেক্সট কন্টেন্ট */}
              <div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
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
