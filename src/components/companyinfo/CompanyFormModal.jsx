'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpFromSquare } from '@gravity-ui/icons';
import { getCompanyData } from '@/lib/actions/jobs';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const industries = [
  'Technology',
  'Software',
  'FinTech',
  'EdTech',
  'Healthcare',
  'E-commerce',
  'Marketing',
  'Telecommunications',
];

const employeeRanges = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '500+ employees',
];

export default function CompanyForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: '',
    industry: 'Technology',
    website: '',
    location: '',
    employeeCount: '1-10 employees',
    description: '',
    logo: null,
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // =========================
  // IMGBB UPLOAD
  // =========================
  const uploadImage = async file => {
    const apiKey = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;

    const formData = new FormData();
    formData.append('image', file);

    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error('Image upload failed');
    }

    return data.data.url;
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      let logoUrl = '';

      if (formData.logo) {
        logoUrl = await uploadImage(formData.logo);
      }

      const payload = {
        companyName: formData.companyName,
        industry: formData.industry,
        website: formData.website,
        location: formData.location,
        employeeCount: formData.employeeCount,
        description: formData.description,
        logo: logoUrl,
        status: 'pending',
      };

      const res = await getCompanyData(payload);

      if (res?.insertedId) {
        alert('Company registered successfully');
        router.push('/dashboard/recruiter');
      }
    } catch (error) {
      console.log(error);
      alert('Something went wrong');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-5xl text-white"
    >
      <div className="space-y-6 p-8">
        <div className="border-b border-white/10 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Company details
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Register New Company
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Add the profile information recruiters will use across job posts.
          </p>
        </div>

        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={e => handleChange('companyName', e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
        />

        {/* Industry */}
        <select
          value={formData.industry}
          onChange={e => handleChange('industry', e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
        >
          {industries.map(i => (
            <option key={i}>{i}</option>
          ))}
        </select>

        {/* Website + Location */}
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="url"
            placeholder="Website"
            value={formData.website}
            onChange={e => handleChange('website', e.target.value)}
            className="h-12 rounded-xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
          />

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={e => handleChange('location', e.target.value)}
            className="h-12 rounded-xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Employee */}
        <select
          value={formData.employeeCount}
          onChange={e => handleChange('employeeCount', e.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.055] px-4 text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
        >
          {employeeRanges.map(i => (
            <option key={i}>{i}</option>
          ))}
        </select>

        {/* LOGO UPLOAD + PREVIEW FIXED */}
        <label className="flex h-24 cursor-pointer items-center gap-4 overflow-hidden rounded-xl border border-dashed border-white/10 bg-white/[0.035] px-4 transition hover:border-blue-500/40 hover:bg-white/[0.055]">
          {logoPreview ? (
            <Image
              src={logoPreview}
              width={50}
              height={50}
              alt="preview"
              className="h-16 w-16 rounded-lg border border-white/10 object-cover"
            />
          ) : (
            <div className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-blue-500/10 text-blue-300">
              <ArrowUpFromSquare className="h-5 w-5" />
            </div>
          )}

          <div>
            {logoPreview ? (
              <p className="font-medium">Change Logo</p>
            ) : (
              <>
                <p className="font-medium">Upload Logo</p>
                <p className="text-xs text-gray-500">PNG / JPG up to 5MB</p>
              </>
            )}
          </div>

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={e => {
              const file = e.target.files?.[0];

              if (!file) return;

              handleChange('logo', file);
              setLogoPreview(URL.createObjectURL(file));
            }}
          />
        </label>

        {/* Description */}
        <textarea
          rows={5}
          placeholder="Description"
          value={formData.description}
          onChange={e => handleChange('description', e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-white/[0.055] p-4 text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end border-t border-white/10 px-8 py-5">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-950/25 transition hover:bg-blue-500"
        >
          Register Company
        </button>
      </div>
    </motion.form>
  );
}
