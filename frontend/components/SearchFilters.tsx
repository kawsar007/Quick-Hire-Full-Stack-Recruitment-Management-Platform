'use client';
import { JOB_CATEGORIES } from '@/types';

interface Props {
  search: string;
  category: string;
  location: string;
  onSearchChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
  onLocationChange: (v: string) => void;
  onReset: () => void;
}

export default function SearchFilters({
  search, category, location,
  onSearchChange, onCategoryChange, onLocationChange, onReset,
}: Props) {
  const hasFilters = search || category || location;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        placeholder="Search jobs, companies..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        <option value="">All Categories</option>
        {JOB_CATEGORIES.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Location..."
        value={location}
        onChange={(e) => onLocationChange(e.target.value)}
        className="w-40 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300"
      />
      {hasFilters && (
        <button
          onClick={onReset}
          className="text-sm text-gray-500 hover:text-red-500 font-medium whitespace-nowrap"
        >
          ✕ Clear
        </button>
      )}
    </div>
  );
}