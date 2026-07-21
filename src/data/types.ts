export interface ProjectMedia {
  type: "image" | "terminal" | "bench";
  src?: string;
  srcSet?: string[];
  alt?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  howItWorks?: string;
  impact: string[];
  stack: string[];
  links: { live?: string; github: string };
  media: ProjectMedia;
  award?: string;
  era: "featured" | "earlier";
}

export interface WorkExperience {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  startYear: number;
  isCurrent: boolean;
  summary: string;
  bullets: string[];
  stack: string[];
  award?: string;
}

export interface Hackathon {
  name: string;
  detail: string;
  projectSlug?: string;
  href?: string;
}

export interface TechCategory {
  label: string;
  items: string[];
}
