'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  ArrowUpFromSquare,
  Globe,
  LocationArrow,
} from '@gravity-ui/icons';
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
  // IMGBB UPLOAD FUNCTION
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
  // SUBMIT HANDLER
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

      if (res.insertedId) {
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
      className="mx-auto max-w-5xl"
    >
      <div className="space-y-6 p-8">
        {/* Company Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Company Name</label>
          <input
            type="text"
            value={formData.companyName}
            onChange={e => handleChange('companyName', e.target.value)}
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-primary"
            placeholder="e.g. Acme Corporation"
          />
        </div>

        {/* Industry */}
        <div className="relative">
          <label className="mb-2 block text-sm font-medium">
            Industry / Category
          </label>

          <select
            value={formData.industry}
            onChange={e => handleChange('industry', e.target.value)}
            className="h-12 w-full appearance-none rounded-xl border px-4 outline-none focus:border-primary"
          >
            {industries.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <ChevronDown className="absolute right-4 top-10 h-4 w-4 text-gray-500" />
        </div>

        {/* Website + Location */}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative">
            <Globe className="absolute left-3 top-4 h-4 w-4 text-gray-500" />
            <input
              type="url"
              placeholder="https://company.com"
              value={formData.website}
              onChange={e => handleChange('website', e.target.value)}
              className="h-12 w-full rounded-xl border px-10 outline-none focus:border-primary"
            />
          </div>

          <div className="relative">
            <LocationArrow className="absolute left-3 top-4 h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Dhaka, Bangladesh"
              value={formData.location}
              onChange={e => handleChange('location', e.target.value)}
              className="h-12 w-full rounded-xl border px-10 outline-none focus:border-primary"
            />
          </div>
        </div>

        {/* Employee + Logo */}
        <div className="grid gap-5 md:grid-cols-2">
          <select
            value={formData.employeeCount}
            onChange={e => handleChange('employeeCount', e.target.value)}
            className="h-12 w-full rounded-xl border px-4 outline-none focus:border-primary"
          >
            {employeeRanges.map(item => (
              <option key={item}>{item}</option>
            ))}
          </select>

          {/* ================= LOGO UPLOAD WITH PREVIEW ================= */}
          <label className="flex h-24 cursor-pointer items-center gap-4 rounded-xl border border-dashed px-4 hover:border-primary overflow-hidden">
            {logoPreview ? (
              <Image
                src={logoPreview}
                width={50}
                height={25}
                alt="Logo Preview"
                className="h-16 w-16 rounded-lg object-cover border"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border">
                <ArrowUpFromSquare className="h-5 w-5" />
              </div>
            )}

            <div>
              {logoPreview ? (
                <p className="font-medium">Change Logo</p>
              ) : (
                <>
                  <p className="font-medium">Upload Logo</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                </>
              )}
            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={e => {
                const file = e.target.files?.[0];

                handleChange('logo', file);

                if (file) {
                  setLogoPreview(URL.createObjectURL(file));
                }
              }}
            />
          </label>
        </div>

        {/* Description */}
        <textarea
          rows={5}
          placeholder="Company description..."
          value={formData.description}
          onChange={e => handleChange('description', e.target.value)}
          className="w-full rounded-xl border p-4 outline-none focus:border-primary"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end border-t px-8 py-5">
        <button
          type="submit"
          className="rounded-xl bg-primary px-6 py-3 font-medium text-white hover:opacity-90"
        >
          Register Company
        </button>
      </div>
    </motion.form>
  );
}
