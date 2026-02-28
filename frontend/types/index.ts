export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  category: string;
  description: string;
  salary?: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  createdAt: string;
}

export interface Application {
  _id: string;
  job_id: string;
  name: string;
  email: string;
  resume_link: string;
  cover_note?: string;
  createdAt: string;
}

export interface ApiError {
  error?: string;
  errors?: string[];
}

export const JOB_CATEGORIES = [
  'Engineering',
  'Design',
  'Marketing',
  'Sales',
  'Finance',
  'HR',
  'Operations',
  'Other',
] as const;

export const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Remote'] as const;