'use client';

import { useState } from 'react';
import {
  Form,
  Fieldset,
  TextField,
  Label,
  TextArea,
  Select,
  Button,
  ListBox,
  Header,
  Separator,
} from '@heroui/react';

export default function NewJobPage() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    type: '',
    minSalary: '',
    maxSalary: '',
    currency: 'USD',
    location: '',
    isRemote: false,
    deadline: '',
    responsibilities: '',
    requirements: '',
    benefits: '',
  });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      ...form,
      status: 'active',
      companyId: 'AUTO_FROM_RECRUITER_SESSION',
    };

    console.log('Submitting Job:', payload);

    try {
      const res = await fetch('/api/recruiter/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create job');

      alert('Job posted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error posting job');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-semibold">Post a New Job</h1>

      <Form onSubmit={handleSubmit} className="space-y-8">
        {/* ================= JOB INFO ================= */}
        <Fieldset legend="Job Information" className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Title */}
            <TextField
              value={form.title}
              onChange={e => handleChange('title', e.target.value)}
              isRequired
            >
              <Label>Job Title</Label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                placeholder="e.g. Frontend Developer"
              />
            </TextField>

            {/* Category */}
            <TextField
              value={form.category}
              onChange={e => handleChange('category', e.target.value)}
            >
              <Label>Job Category</Label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                placeholder="e.g. Engineering"
              />
            </TextField>

            {/* Job Type */}
            <Select
              className="w-full"
              selectedKeys={form.type ? [form.type] : []}
              onSelectionChange={keys =>
                handleChange('type', Array.from(keys)[0])
              }
            >
              <Label>Job Type</Label>

              <Select.Trigger>
                <Select.Value placeholder="Select job type" />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <Header>Employment Type</Header>

                  <ListBox.Item id="full-time" textValue="Full-time">
                    Full-time
                  </ListBox.Item>

                  <ListBox.Item id="part-time" textValue="Part-time">
                    Part-time
                  </ListBox.Item>

                  <ListBox.Item id="contract" textValue="Contract">
                    Contract
                  </ListBox.Item>

                  <ListBox.Item id="internship" textValue="Internship">
                    Internship
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Currency */}
            <Select
              className="w-full"
              selectedKeys={[form.currency]}
              onSelectionChange={keys =>
                handleChange('currency', Array.from(keys)[0])
              }
            >
              <Label>Currency</Label>

              <Select.Trigger>
                <Select.Value placeholder="Select currency" />
                <Select.Indicator />
              </Select.Trigger>

              <Select.Popover>
                <ListBox>
                  <Header>Currencies</Header>

                  <ListBox.Item id="USD" textValue="USD">
                    USD
                  </ListBox.Item>

                  <ListBox.Item id="EUR" textValue="EUR">
                    EUR
                  </ListBox.Item>

                  <ListBox.Item id="BDT" textValue="BDT">
                    BDT
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>

            {/* Salary */}
            <TextField>
              <Label>Min Salary</Label>
              <input
                type="number"
                className="w-full rounded-lg border px-3 py-2"
                value={form.minSalary}
                onChange={e => handleChange('minSalary', e.target.value)}
              />
            </TextField>

            <TextField>
              <Label>Max Salary</Label>
              <input
                type="number"
                className="w-full rounded-lg border px-3 py-2"
                value={form.maxSalary}
                onChange={e => handleChange('maxSalary', e.target.value)}
              />
            </TextField>

            {/* Location */}
            <TextField>
              <Label>Location</Label>
              <input
                className="w-full rounded-lg border px-3 py-2"
                placeholder="City, Country"
                value={form.location}
                onChange={e => handleChange('location', e.target.value)}
              />
            </TextField>

            {/* Deadline */}
            <TextField>
              <Label>Application Deadline</Label>
              <input
                type="date"
                className="w-full rounded-lg border px-3 py-2"
                value={form.deadline}
                onChange={e => handleChange('deadline', e.target.value)}
              />
            </TextField>
          </div>
        </Fieldset>

        {/* ================= DESCRIPTION ================= */}
        <Fieldset legend="Job Description" className="space-y-5">
          <div className="space-y-4">
            {/* Responsibilities */}
            <div>
              <Label>Responsibilities</Label>
              <TextArea
                className="w-full border rounded-lg p-3"
                minRows={5}
                value={form.responsibilities}
                onChange={e => handleChange('responsibilities', e.target.value)}
                placeholder="Describe responsibilities..."
              />
            </div>

            {/* Requirements */}
            <div>
              <Label>Requirements</Label>
              <TextArea
                className="w-full border rounded-lg p-3"
                minRows={5}
                value={form.requirements}
                onChange={e => handleChange('requirements', e.target.value)}
                placeholder="Describe requirements..."
              />
            </div>

            {/* Benefits */}
            <div>
              <Label>Benefits (Optional)</Label>
              <TextArea
                className="w-full border rounded-lg p-3"
                minRows={4}
                value={form.benefits}
                onChange={e => handleChange('benefits', e.target.value)}
                placeholder="Job benefits..."
              />
            </div>
          </div>
        </Fieldset>

        {/* ================= SUBMIT ================= */}
        <div className="flex justify-end">
          <Button type="submit" color="primary">
            Publish Job
          </Button>
        </div>
      </Form>
    </div>
  );
}
