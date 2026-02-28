'use client';
import JobCard from '@/components/JobCard';
import { createJob, deleteJob, fetchJobs } from '@/lib/api';
import { Job, JOB_CATEGORIES, JOB_TYPES } from '@/types';
import { useCallback, useEffect, useState } from 'react';

const EMPTY_FORM = {
  title: '', company: '', location: '', category: 'Engineering' as const,
  description: '', salary: '', type: 'Full-time' as const,
};

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const loadJobs = useCallback(async () => {
    try {
      const data = await fetchJobs();
      setJobs(data);
    } catch { }
  }, []);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]); setSuccess('');
    setLoading(true);
    try {
      await createJob(form);
      setSuccess('Job posted successfully!');
      setForm(EMPTY_FORM);
      await loadJobs();
    } catch (err: any) {
      setErrors(err?.errors || [err?.error || 'Failed to create job.']);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job?')) return;
    try {
      await deleteJob(id);
      setJobs((prev) => prev.filter((j) => j._id !== id));
      setSuccess('Job deleted.');
    } catch {
      setErrors(['Failed to delete job.']);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
        <p className="text-gray-500 mt-1">Post and manage job listings</p>
      </div>

      {/* Post Job Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Post a New Job</h2>

        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
            <ul className="text-sm text-red-600 space-y-1">
              {errors.map((e, i) => <li key={i}>• {e}</li>)}
            </ul>
          </div>
        )}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 text-sm text-green-700 font-medium">
            ✓ {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
            <input name="title" value={form.title} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black"
              placeholder="e.g. Senior Frontend Engineer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company *</label>
            <input name="company" value={form.company} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black"
              placeholder="e.g. Acme Corp" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
            <input name="location" value={form.location} onChange={handleChange} required
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black"
              placeholder="e.g. Dhaka, Bangladesh" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
            <select name="category" value={form.category} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black">
              {JOB_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
            <select name="type" value={form.type} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black">
              {JOB_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary (optional)</label>
            <input name="salary" value={form.salary} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 text-black"
              placeholder="e.g. $80k–$100k" />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
            <textarea name="description" value={form.description} onChange={handleChange} required rows={5}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none text-black"
              placeholder="Describe the role, responsibilities, and requirements..." />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" disabled={loading}
              className="bg-indigo-600 text-white font-medium px-6 py-2.5 rounded-lg text-sm hover:bg-indigo-700 disabled:opacity-60 transition-colors">
              {loading ? 'Posting...' : '+ Post Job'}
            </button>
          </div>
        </form>
      </div>

      {/* Job Listings */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-4">Current Listings ({jobs.length})</h2>
        {jobs.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <p>No jobs posted yet. Add one above!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => <JobCard key={job._id} job={job} onDelete={handleDelete} />)}
          </div>
        )}
      </div>
    </div>
  );
}