'use client';

import { Card, Chip } from '@heroui/react';
import {
  Search,
  MapPin,
  BriefcaseBusiness,
  Building2,
  Users,
  Star,
} from 'lucide-react';

export default function Banner() {
  return (
    <section className="pt-10 md:pt-20 relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Globe */}
      <div
        className="
          absolute z-0 inset-0 w-full h-full
          bg-center bg-cover bg-no-repeat
        "
        style={{ backgroundImage: "url('/globe.png')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Glow Effect */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-10/12 mx-auto h-[600px] bg-blue-600/10 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-20 flex flex-col items-center">
        {/* Badge */}
        <div className="mb-6">
          <Chip
            variant="flat"
            className="bg-white/5 text-white border border-white/10 px-4 py-1.5 backdrop-blur-md"
            radius="full"
          >
            💼 50,000+ NEW JOBS THIS MONTH
          </Chip>
        </div>

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6 text-white">
            Find Your Dream Job Today
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            HireLoop connects top talent with world-class companies. Browse
            thousands of curated opportunities and land your next role — faster.
          </p>
        </div>

        {/* Search Box */}
        <div className="w-full max-w-5xl mb-8 px-4 md:px-0">
          <div className="bg-white/5 border border-white/10 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center backdrop-blur-xl overflow-hidden">
            {/* Job Input */}
            <div className="flex items-center w-full h-16 px-5">
              <Search size={20} className="text-gray-400 mr-3" />
              <input
                type="search"
                placeholder="Job title, keyword, or company"
                className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none text-sm md:text-base"
              />
            </div>

            <div className="hidden md:block w-px h-10 bg-white/10" />

            {/* Location Input */}
            <div className="flex items-center w-full h-16 px-5">
              <MapPin size={20} className="text-gray-400 mr-3" />
              <input
                type="search"
                placeholder="Location or Remote"
                className="w-full bg-transparent text-white placeholder:text-gray-400 outline-none text-sm md:text-base"
              />
            </div>

            {/* Search Button */}
            <button className="m-2 w-8 h-8 rounded-full bg-linear-to-r p-2 from-blue-600 to-blue-500 hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Search size={20} className="text-white" />
            </button>
          </div>
        </div>

        {/* Trending */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-24">
          <span className="text-white text-sm font-medium">
            Trending Position
          </span>

          {['Product Designer', 'AI Engineering', 'Dev-ops Engineer'].map(
            item => (
              <Chip
                key={item}
                className="bg-white/5 text-gray-300 border border-white/10 rounded-full px-3 py-1 text-xs"
              >
                {item}
              </Chip>
            ),
          )}
        </div>

        {/* Globe Section */}
        <div className="relative w-full max-w-6xl mt-10 md:mt-20">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-t-full overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:30px_30px]" />

            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <h2 className="text-2xl md:text-4xl font-medium leading-tight text-white/90">
                Assisting over{' '}
                <span className="text-white font-bold">15,000 job seekers</span>
                <br />
                find their dream positions.
              </h2>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 -mt-20 relative z-20">
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

/* Stat Card */
function StatCard({ icon, value, label }) {
  return (
    <Card className="bg-white/5 backdrop-blur-md border border-white/10 p-6 h-full group hover:border-blue-500/50 transition-all duration-300">
      <div className="text-gray-400 mb-8 group-hover:text-blue-400 transition-colors">
        {icon}
      </div>

      <h3 className="text-4xl font-bold text-white mb-1">{value}</h3>

      <p className="text-gray-400 text-sm">{label}</p>
    </Card>
  );
}
