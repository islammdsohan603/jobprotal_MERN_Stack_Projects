'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const LookSection = () => {
  return (
    <section className="relative overflow-hidden bg-black py-32 text-white">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Center Glow */}
        <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

        {/* Left Glow */}
        <div className="absolute left-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-500/15 blur-[140px]" />

        {/* Right Glow */}
        <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-fuchsia-500/15 blur-[140px]" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
          🚀 Trusted by thousands of job seekers & recruiters
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Your next role is
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            already looking for you
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          Build your profile in minutes, connect with top companies, and
          discover opportunities tailored to your skills.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/signup">
            <button className="group rounded-xl bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.25)]">
              Create Free Account
            </button>
          </Link>

          <button className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-violet-500/50 hover:bg-white/10">
            View Pricing
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-white">10K+</h3>
            <p className="mt-2 text-gray-400">Active Job Seekers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">2K+</h3>
            <p className="mt-2 text-gray-400">Hiring Companies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">15K+</h3>
            <p className="mt-2 text-gray-400">Successful Matches</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LookSection;
