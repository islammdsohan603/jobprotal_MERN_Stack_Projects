'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BriefcaseBusiness, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { Description, Label, Radio, RadioGroup } from '@heroui/react';

export default function SignUpPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'job_seeker',
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = role => {
    setForm(prev => ({
      ...prev,
      role,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const { data, error } = await authClient.signUp.email({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        role: form.role,
      });

      if (data) {
        toast.success('SignUp Successfully');
        router.push('/login');
        return;
      }

      setError(error?.message || 'Something went wrong');
    } catch (err) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070d] px-4 py-16">
      <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.055] p-8 shadow-2xl shadow-black/30 backdrop-blur-xl"
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid size-12 place-items-center rounded-2xl border border-white/10 bg-blue-500/10 text-blue-300">
            <BriefcaseBusiness size={22} />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Join as a job seeker or recruiter.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mb-4 rounded-xl border border-green-500/30 bg-green-500/10 p-3 text-sm text-green-300">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
            required
          />

          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 pr-12 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* ROLE SELECTION */}
          <div className="text-white">
            <p className="mb-2 text-sm text-gray-400">Select Role</p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleRoleChange('job_seeker')}
                className={`flex-1 py-2 rounded-lg border transition ${
                  form.role === 'job_seeker'
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-950/25'
                    : 'bg-white/[0.06] border-white/10 text-gray-300 hover:border-white/20'
                }`}
              >
                Job Seeker
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange('recruiter')}
                className={`flex-1 py-2 rounded-lg border transition ${
                  form.role === 'recruiter'
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-950/25'
                    : 'bg-white/[0.06] border-white/10 text-gray-300 hover:border-white/20'
                }`}
              >
                Recruiter
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        {/* Sign in */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
