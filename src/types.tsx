// src/types.ts (or wherever you want)
export type Skill = { id: number; name: string; level: string };

export type Project = { 
  id: number; 
  name: string; 
  date: string; 
  techStack: string[]; 
  url: string; 
  repo: string; 
  description: string; 
  role: string; 
};

export type Experience = { 
  id: number; 
  company: string; 
  role: string; 
  startDate: string; 
  endDate: string; 
  currentlyWorking: boolean; 
  description: string; 
};

export type ResumeData = {
  name: string;
  email: string;
  phone: string;
  about: string;
  languages: string[];
  certifications: string[];
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
};