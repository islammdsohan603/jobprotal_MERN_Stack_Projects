'use client';

import { useState } from 'react';
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
      className="mx-auto max-w-5xl"
    >
      <div className="space-y-6 p-8">
        {/* Company Name */}
        <input
          type="text"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={e => handleChange('companyName', e.target.value)}
          className="h-12 w-full rounded-xl border px-4"
        />

        {/* Industry */}
        <select
          value={formData.industry}
          onChange={e => handleChange('industry', e.target.value)}
          className="h-12 w-full rounded-xl border px-4"
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
            className="h-12 rounded-xl border px-4"
          />

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={e => handleChange('location', e.target.value)}
            className="h-12 rounded-xl border px-4"
          />
        </div>

        {/* Employee */}
        <select
          value={formData.employeeCount}
          onChange={e => handleChange('employeeCount', e.target.value)}
          className="h-12 w-full rounded-xl border px-4"
        >
          {employeeRanges.map(i => (
            <option key={i}>{i}</option>
          ))}
        </select>

        {/* LOGO UPLOAD + PREVIEW FIXED */}
        <label className="flex h-24 cursor-pointer items-center gap-4 rounded-xl border px-4 overflow-hidden">
          {logoPreview ? (
            <Image
              src={logoPreview}
              width={50}
              height={50}
              alt="preview"
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
          className="w-full rounded-xl border p-4"
        />
      </div>

      {/* Submit */}
      <div className="flex justify-end border-t px-8 py-5">
        <button
          type="submit"
          className="rounded-xl bg-primary px-6 py-3 text-white"
        >
          Register Company
        </button>
      </div>
    </motion.form>
  );
}
