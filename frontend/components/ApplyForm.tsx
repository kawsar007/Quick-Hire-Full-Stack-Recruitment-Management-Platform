'use client';
import { submitApplication } from '@/lib/api';
import { useState } from 'react';

interface Props {
  jobId: string;
}

export default function ApplyForm({ jobId }: Props) {
  const [form, setForm] = useState({ name: '', email: '', resume_link: '', cover_note: '' });
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);
    try {
      await submitApplication({ ...form, job_id: jobId });
      setSuccess(true);
      setForm({ name: '', email: '', resume_link: '', cover_note: '' });
    } catch (err: any) {
      setErrors(err?.errors || [err?.error || 'Submission failed. Please try again.']);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="text-3xl mb-2">🎉</div>
        <p className="font-semibold text-green-800">Application submitted!</p>
        <p className="text-sm text-green-600 mt-1">Good luck with your application.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <ul className="text-sm text-red-600 space-y-1">
            {errors.map((e, i) => <li key={i}>• {e}</li>)}
          </ul>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          name="name" value={form.name} onChange={handleChange} required
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="Jane Smith"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input
          type="email" name="email" value={form.email} onChange={handleChange} required
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Resume URL *</label>
        <input
          type="url" name="resume_link" value={form.resume_link} onChange={handleChange} required
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
          placeholder="https://drive.google.com/..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Cover Note</label>
        <textarea
          name="cover_note" value={form.cover_note} onChange={handleChange} rows={4}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
          placeholder="Tell us why you're a great fit..."
        />
      </div>

      <button
        type="submit" disabled={loading}
        className="w-full bg-indigo-600 text-white font-medium py-2.5 rounded-lg text-sm hover:bg-indigo-700 disabled:opacity-60 transition-colors"
      >
        {loading ? 'Submitting...' : 'Submit Application'}
      </button>
    </form>
  );
}