import { Job } from '@/types';
import Link from 'next/link';

const categoryColors: Record<string, string> = {
  Engineering: 'bg-blue-100 text-blue-700',
  Design: 'bg-purple-100 text-purple-700',
  Marketing: 'bg-yellow-100 text-yellow-700',
  Sales: 'bg-green-100 text-green-700',
  Finance: 'bg-emerald-100 text-emerald-700',
  HR: 'bg-pink-100 text-pink-700',
  Operations: 'bg-orange-100 text-orange-700',
  Other: 'bg-gray-100 text-gray-700',
};

interface Props {
  job: Job;
  onDelete?: (id: string) => void;
}

export default function JobCard({ job, onDelete }: Props) {
  const colorClass = categoryColors[job.category] || categoryColors.Other;
  const date = new Date(job.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="font-semibold text-gray-900 text-base leading-snug">{job.title}</h2>
          <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${colorClass}`}>
          {job.category}
        </span>
      </div>

      <div className="flex flex-wrap gap-2 text-xs text-gray-500">
        <span>📍 {job.location}</span>
        <span>⏱ {job.type}</span>
        {job.salary && <span>💰 {job.salary}</span>}
        <span>🗓 {date}</span>
      </div>

      <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>

      <div className="flex items-center justify-between mt-1">
        <Link
          href={`/jobs/${job._id}`}
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          View Details →
        </Link>
        {onDelete && (
          <button
            onClick={() => onDelete(job._id)}
            className="text-xs text-red-500 hover:text-red-700 font-medium transition-colors"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}