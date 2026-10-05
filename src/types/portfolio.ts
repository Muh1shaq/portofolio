export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: "web" | "game" | "networking" | "ai" | "all";
  technologies: string[];
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  status?: "completed" | "in-progress" | "planned";
}

export interface Tech {
  name: string;
  icon: string;
  category:
    | "Frontend Web"
    | "Game Dev"
    | "Backend"
    | "Backend & Scripting"
    | "Database"
    | "UI/UX Design"
    | "IoT Systems"
    | "Tools & Systems";
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  location?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}
