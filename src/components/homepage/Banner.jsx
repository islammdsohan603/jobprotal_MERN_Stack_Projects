'use client';

import { Card, Chip } from '@heroui/react';
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Building2,
  Users,
  Star,
  Sparkles,
} from 'lucide-react';

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070d] pt-10 text-white md:pt-20">
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: "url('/globe.png')" }}
      />

      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.78),rgba(5,7,13,0.96)_62%,#05070d)]" />
      <div className="absolute left-1/2 top-[-10%] z-0 mx-auto h-[600px] w-10/12 -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 pb-20 pt-20">
        <div className="mb-6">
          <Chip
            variant="flat"
            className="border border-white/10 bg-white/10 px-4 py-1.5 text-white shadow-lg shadow-blue-950/20 backdrop-blur-md"
            radius="full"
          >
            <span className="inline-flex items-center gap-2">
              <Sparkles size={14} />
              50,000+ NEW JOBS THIS MONTH
            </span>
          </Chip>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Find Your Dream Job Today
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role - faster.
          </p>
        </div>

        <div className="mb-8 w-full max-w-5xl px-4 md:px-0">
          <div className="flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] shadow-2xl shadow-blue-950/20 backdrop-blur-xl md:flex-row md:rounded-full">
            <div className="flex h-16 w-full items-center px-5">
              <Search size={20} className="mr-3 text-gray-400" />
              <input
                type="search"
                placeholder="Job title, keyword, or company"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400 md:text-base"
              />
            </div>

            <div className="hidden h-10 w-px bg-white/10 md:block" />

            <div className="flex h-16 w-full items-center px-5">
              <MapPin size={20} className="mr-3 text-gray-400" />
              <input
                type="search"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-400 md:text-base"
              />
            </div>

            <button className="m-2 flex size-12 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-cyan-500 p-2 shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105">
              <Search size={20} className="text-white" />
            </button>
          </div>
        </div>

        <div className="mb-24 flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-white">
            Trending Position
          </span>

          {['Product Designer', 'AI Engineering', 'Dev-ops Engineer'].map(
            item => (
              <Chip
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {item}
              </Chip>
            ),
          )}
        </div>

        <div className="relative mt-10 w-full max-w-6xl md:mt-20">
          <div className="relative h-[300px] w-full overflow-hidden rounded-t-full border-x border-t border-white/10 bg-white/[0.03] md:h-[450px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] opacity-20 [background-size:30px_30px]" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
              <h2 className="text-2xl font-medium leading-tight text-white/90 md:text-4xl">
                Assisting over{' '}
                <span className="font-bold text-white">15,000 job seekers</span>
                <br />
                find their dream positions.
              </h2>
            </div>
          </div>

          <div className="relative z-20 -mt-20 grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={<BriefcaseBusiness size={20} />}
              value="50K"
              label="Active Jobs"
            />
            <StatCard
              icon={<Building2 size={20} />}
              value="12K"
              label="Companies"
            />
            <StatCard
              icon={<Users size={20} />}
              value="2M"
              label="Job Seekers"
            />
            <StatCard
              icon={<Star size={20} />}
              value="97%"
              label="Satisfaction Rate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <Card className="group h-full border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50">
      <div className="mb-8 text-gray-400 transition-colors group-hover:text-blue-400">
        {icon}
      </div>

      <h3 className="mb-1 text-4xl font-bold text-white">{value}</h3>

      <p className="text-sm text-gray-400">{label}</p>
    </Card>
  );
}
