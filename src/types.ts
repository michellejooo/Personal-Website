export interface Skill {
  name: string;
  category: string;
  level: number; // 1-100
  iconName: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: 'Web Development' | 'Full Stack' | 'UI/UX' | 'Data Analytics' | 'Lomba Essay';
  image: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  essayUrl?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  rank: string;
  competition: string;
  year: string;
  organizer: string;
  projectName: string;
  description: string;
  contributions: string[];
  tags: string[];
  essayUrl?: string;
  image?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description?: string;
  responsibilities: string[];
  skillsUsed: string[];
  image?: string;
  images?: string[];
  imageCaption?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  topics: string[];
  credentialId?: string;
  credentialUrl?: string;
  image?: string;
  courses?: string[];
  recipient?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic';
  percentage: number;
  details: string;
  flagCode: string;
}

export interface EducationItem {
  institution: string;
  major: string;
  period: string;
  location?: string;
  status?: string;
}

export interface HobbyItem {
  title: string;
  description: string;
  iconName?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
