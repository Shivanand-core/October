export interface JournalIdentity {
  name: string;
  fullTitle: string;
  shortSubtitle: string;
  publisher: string;
  institution: string;
  universityAffiliation: string;
  address: {
    line1: string;
    area: string;
    city: string;
    pincode: string;
    country: string;
  };
  email: string;
  collegeWebsite: string;
  startingYear: number;
  format: string;
  discipline: string;
}

export interface JournalParticularItem {
  label: string;
  value: string;
  isConfirmed: boolean;
  notes?: string;
}

export type ArticleType = 
  | 'Research Article'
  | 'Review Article'
  | 'Case Study'
  | 'Scholarly Commentary'
  | 'Book Review';

export interface Author {
  name: string;
  affiliation: string;
  email?: string;
  isCorresponding?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  authors: Author[];
  articleType: ArticleType;
  volume: number;
  issue: number;
  issueName: string;
  year: number;
  month: string;
  pages?: string;
  abstract: string;
  keywords: string[];
  isSampleOrPreview: boolean;
  doi?: string;
  pdfAvailable: boolean;
  publishedDate?: string;
  sections?: {
    heading: string;
    content: string;
  }[];
  references?: string[];
}

export interface Issue {
  volume: number;
  issueNumber: number;
  title: string;
  period: string;
  year: number;
  isInaugural: boolean;
  status: 'Published' | 'In Progress' | 'Upcoming';
  description: string;
  articleCount?: number;
  articles: Article[];
}

export interface EditorialRoleGroup {
  roleTitle: string;
  description?: string;
  members: {
    name: string;
    designation: string;
    department: string;
    institution: string;
    email?: string;
    researchArea?: string;
    profileUrl?: string;
    isConfirmed: boolean;
  }[];
}

export interface PolicyItem {
  id: string;
  slug: string;
  title: string;
  shortSummary: string;
  content: string[];
  standards?: string[];
  status: 'Confirmed' | 'Pending Official Confirmation';
}

export interface Announcement {
  id: string;
  date: string;
  title: string;
  category: 'Call for Papers' | 'Editorial Notice' | 'Publication Update' | 'Policy Announcement';
  summary: string;
  details?: string;
  linkText?: string;
  linkPath?: string;
  isOfficialNotice: boolean;
}
