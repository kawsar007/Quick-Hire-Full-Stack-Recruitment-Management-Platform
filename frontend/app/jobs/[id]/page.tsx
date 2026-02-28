import ApplyForm from '@/components/ApplyForm';
import { fetchJobById } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: string };
}

export default async function JobDetailPage({ params }: Props) {
  let job;
  try {
    job = await fetchJobById(params.id);
  } catch {
    notFound();
  }

  const date = new Date(job.createdAt).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="text-sm text-indigo-600 hover:underline mb-6 inline-block">
        ← Back to Jobs
      </Link>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Job Details */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{job.title}</h1>
                <p className="text-indigo-600 font-medium mt-1">{job.company}</p>
              </div>
              <span className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full shrink-0">
                {job.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">📍 {job.location}</span>
              <span className="flex items-center gap-1">⏱ {job.type}</span>
              {job.salary && <span className="flex items-center gap-1">💰 {job.salary}</span>}
              <span className="flex items-center gap-1">🗓 Posted {date}</span>
            </div>

            <div className="prose prose-sm max-w-none text-gray-700">
              <h3 className="font-semibold text-gray-900 mb-2">Job Description</h3>
              <div className="whitespace-pre-line">{job.description}</div>
            </div>
          </div>
        </div>

        {/* Apply Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
            <h2 className="font-bold text-gray-900 text-lg mb-4">Apply Now</h2>
            <ApplyForm jobId={job._id} />
          </div>
        </div>
      </div>
    </div>
  );
}