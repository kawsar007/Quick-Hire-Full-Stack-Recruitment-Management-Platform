'use client';
import HeroSection from '@/components/HeroSection';
import JobCard from '@/components/JobCard';
import { fetchJobs } from '@/lib/api';
import { Job } from '@/types';
import { useCallback, useEffect, useState } from 'react';

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const loadJobs = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchJobs({ search, category, location });
      setJobs(data);
    } catch {
      setError('Failed to load jobs. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, [search, category, location]);

  useEffect(() => {
    const timer = setTimeout(loadJobs, 300);
    return () => clearTimeout(timer);
  }, [loadJobs]);

  const reset = () => { setSearch(''); setCategory(''); setLocation(''); };

  return (
    <div className="space-y-6">

      <HeroSection search={search} category={category} location={location}
        onSearchChange={setSearch} onCategoryChange={setCategory}
        onLocationChange={setLocation} onReset={reset} />
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Find Your Next Job</h1>
        <p className="text-gray-500 mt-1">Browse {jobs.length} open positions</p>
      </div>



      {loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 h-44 animate-pulse">
              <div className="bg-gray-200 rounded h-4 w-3/4 mb-3" />
              <div className="bg-gray-100 rounded h-3 w-1/2 mb-4" />
              <div className="bg-gray-100 rounded h-3 w-full mb-2" />
              <div className="bg-gray-100 rounded h-3 w-5/6" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && jobs.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-5xl mb-3">🔍</div>
          <p className="font-medium">No jobs found</p>
          <p className="text-sm mt-1">Try adjusting your search filters</p>
        </div>
      )}

      {!loading && jobs.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => <JobCard key={job._id} job={job} />)}
        </div>
      )}
    </div>
  );
}