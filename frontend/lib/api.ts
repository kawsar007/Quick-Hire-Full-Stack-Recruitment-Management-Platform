import { Application, Job } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function fetchJobs(params?: {
  search?: string;
  category?: string;
  location?: string;
}): Promise<Job[]> {
  const query = new URLSearchParams();
  if (params?.search) query.set('search', params.search);
  if (params?.category) query.set('category', params.category);
  if (params?.location) query.set('location', params.location);

  const res = await fetch(`${BASE_URL}/jobs?${query.toString()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch jobs');
  return res.json();
}

export async function fetchJobById(id: string): Promise<Job> {
  const res = await fetch(`${BASE_URL}/jobs/${id}`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Job not found');
  return res.json();
}

export async function createJob(data: Omit<Job, '_id' | 'createdAt'>): Promise<Job> {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}

export async function deleteJob(id: string): Promise<void> {
  const res = await fetch(`${BASE_URL}/jobs/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete job');
}

export async function submitApplication(
  data: Omit<Application, '_id' | 'createdAt'>
): Promise<{ message: string }> {
  const res = await fetch(`${BASE_URL}/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}