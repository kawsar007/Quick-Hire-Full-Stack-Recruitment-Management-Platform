'use client';

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
    <div className="bg-white rounded-xl shadow-md border border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-0 overflow-hidden">

      {/* Search input */}
      <div className="flex items-center flex-1 px-4 py-3 gap-3 border-b sm:border-b-0 sm:border-r border-gray-200">
        {/* Search icon */}
        <svg
          className="w-5 h-5 text-gray-400 shrink-0"
          fill="none" stroke="currentColor" strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Job title or keyword"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
        />
        {hasFilters && (
          <button
            onClick={onReset}
            className="text-gray-300 hover:text-red-400 text-xs font-medium whitespace-nowrap transition-colors"
            title="Clear filters"
          >
            ✕
          </button>
        )}
      </div>

      {/* Location input with pin icon + chevron */}
      <div className="flex items-center px-4 py-3 gap-2 sm:w-56 border-b sm:border-b-0 sm:border-r border-gray-200 relative">
        {/* Pin icon */}
        <svg
          className="w-5 h-5 text-gray-400 shrink-0"
          fill="none" stroke="currentColor" strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 13 6 13s6-7.75 6-13c0-3.314-2.686-6-6-6z" />
          <circle cx="12" cy="8" r="2.5" />
        </svg>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="flex-1 text-sm text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none min-w-0"
        />
        {/* Chevron down icon */}
        <svg
          className="w-4 h-4 text-gray-400 shrink-0"
          fill="none" stroke="currentColor" strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Category select — hidden visually but kept functional, or shown as needed */}
      {/* If you want a category select visible, uncomment below */}
      {/*
      <div className="flex items-center px-4 py-3 gap-2 sm:w-48 border-b sm:border-b-0 sm:border-r border-gray-200">
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="flex-1 text-sm text-gray-700 bg-transparent focus:outline-none appearance-none cursor-pointer"
        >
          <option value="">All Categories</option>
          {JOB_CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
      */}

      {/* Search button */}
      <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold px-6 py-3 whitespace-nowrap transition-colors sm:rounded-none rounded-b-xl sm:rounded-r-xl">
        Search my job
      </button>
    </div>
  );
}