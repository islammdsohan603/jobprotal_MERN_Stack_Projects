'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BriefcaseBusiness, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [form, setForm] = useState({
    email: '',
    password: '',
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
      const { data, error } = await authClient.signIn.email({
        email: form.email.trim(),
        password: form.password,
      });

      if (data) {
        toast.success('SignUp Successfully');
        router.push('/');
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
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            Sign in to continue your job journey.
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

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-xl bg-blue-600 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:bg-blue-500 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Sign in */}
        <p className="mt-6 text-center text-sm text-gray-400">
          New here?{' '}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
