
export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  coordinates: [number, number];
  type: string;
  experience: string;
  salary: string;
  remote: boolean;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
}

export interface JobFilters {
  search: string;
  location: string;
  department: string;
  experience: string;
  type: string;
}

export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeFile?: File;
  resumeUrl?: string;
  coverLetter: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  customAnswers: Record<string, string>;
}
