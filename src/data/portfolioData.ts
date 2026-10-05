import { Project, Tech, SocialLinks, Contact, Experience, Education, Milestone } from "@/types/portfolio";

// DUMMY DATA - Replace with real data
export const portfolioData = {
  personal: {
    name: "ISQQ", // DUMMY - Replace with real name
    role: "Full Stack Developer", // DUMMY - Replace with real role
    tagline: "Building innovative solutions at the intersection of software, networks, and interactive experiences",
    bio: "A passionate Full Stack Developer with expertise in building modern, scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions. With a strong foundation in both frontend and backend technologies, I create seamless user experiences while ensuring robust performance and maintainability.", // DUMMY - Replace with real bio
    location: "Jakarta, Indonesia", // DUMMY - Replace with real location
    available: true,
  },

  contact: {
    email: "hello@isqq.dev", // DUMMY - Replace with real email
    phone: "+62 821 9628 7654", // DUMMY - Replace with real phone
    location: "Jakarta, Indonesia", // DUMMY - Replace with real location
  } as Contact,

  socialLinks: {
    github: "https://github.com/isqq", // DUMMY - Replace with real GitHub
    linkedin: "https://linkedin.com/in/isqq", // DUMMY - Replace with real LinkedIn
    twitter: "https://twitter.com/isqq", // DUMMY - Replace with real Twitter
  } as SocialLinks,

  // DUMMY - Skills with percentages for telemetry display
  techStack: [
    { name: "JavaScript", icon: "⚡", category: "Frontend", level: 95 },
    { name: "TypeScript", icon: "📘", category: "Frontend", level: 90 },
    { name: "React", icon: "⚛️", category: "Frontend", level: 92 },
    { name: "Next.js", icon: "▲", category: "Frontend", level: 88 },
    { name: "Node.js", icon: "🟢", category: "Backend", level: 85 },
    { name: "Python", icon: "�", category: "Backend", level: 80 },
    { name: "PostgreSQL", icon: "🐘", category: "Database", level: 82 },
    { name: "MongoDB", icon: "🍃", category: "Database", level: 78 },
    { name: "Tailwind CSS", icon: "🎨", category: "Frontend", level: 95 },
    { name: "Git", icon: "�", category: "Tools", level: 90 },
  ] as Tech[],

  // DUMMY - Projects with placeholder data
  projects: [
    {
      id: "project-1",
      title: "E-Commerce Platform", // DUMMY
      description: "Full-stack e-commerce solution with real-time inventory management", // DUMMY
      longDescription: "A comprehensive e-commerce platform featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with scalability and performance in mind.", // DUMMY
      image: "/assets/images/projects/project-1.png", // DUMMY - Replace with real image
      category: "web", // DUMMY
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"], // DUMMY
      features: [
        "Real-time inventory sync",
        "Secure payment integration",
        "Admin dashboard",
        "Analytics and reporting",
        "Multi-currency support",
      ], // DUMMY
      liveUrl: "https://demo-project-1.vercel.app", // DUMMY - Replace with real URL
      githubUrl: "https://github.com/isqq/project-1", // DUMMY - Replace with real URL
      status: "completed",
    },
    {
      id: "project-2",
      title: "Task Management App", // DUMMY
      description: "Collaborative task management with real-time updates", // DUMMY
      longDescription: "A collaborative task management application featuring real-time updates, team collaboration tools, and advanced project tracking capabilities.", // DUMMY
      image: "/assets/images/projects/project-2.png", // DUMMY
      category: "web", // DUMMY
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"], // DUMMY
      features: [
        "Real-time collaboration",
        "Drag-and-drop interface",
        "Team workspaces",
        "Progress tracking",
        "File attachments",
      ], // DUMMY
      liveUrl: "https://demo-project-2.vercel.app", // DUMMY
      githubUrl: "https://github.com/isqq/project-2", // DUMMY
      status: "completed",
    },
    {
      id: "project-3",
      title: "API Gateway Service", // DUMMY
      description: "Scalable API gateway with rate limiting and authentication", // DUMMY
      longDescription: "A high-performance API gateway service with advanced rate limiting, JWT authentication, request logging, and analytics dashboard.", // DUMMY
      image: "/assets/images/projects/project-3.png", // DUMMY
      category: "backend", // DUMMY
      technologies: ["Node.js", "Express", "Redis", "PostgreSQL"], // DUMMY
      features: [
        "Rate limiting",
        "JWT authentication",
        "Request logging",
        "Analytics dashboard",
        "Load balancing",
      ], // DUMMY
      githubUrl: "https://github.com/isqq/project-3", // DUMMY
      status: "completed",
    },
    {
      id: "project-4",
      title: "Weather Dashboard", // DUMMY
      description: "Beautiful weather app with location-based forecasts", // DUMMY
      longDescription: "A weather dashboard application providing location-based forecasts, historical data visualization, and severe weather alerts.", // DUMMY
      image: "/assets/images/projects/project-4.png", // DUMMY
      category: "web", // DUMMY
      technologies: ["React", "TypeScript", "OpenWeather API"], // DUMMY
      features: [
        "Location-based forecasts",
        "Historical data",
        "Severe weather alerts",
        "7-day forecast",
        "Interactive maps",
      ], // DUMMY
      liveUrl: "https://demo-project-4.vercel.app", // DUMMY
      githubUrl: "https://github.com/isqq/project-4", // DUMMY
      status: "in-progress",
    },
  ] as Project[],

  // DUMMY - Experience with placeholder data
  experience: [
    {
      company: "Tech Startup Inc.", // DUMMY
      position: "Senior Full Stack Developer", // DUMMY
      period: "2022 - Present", // DUMMY
      description: [
        "Led development of microservices architecture serving 500K+ users", // DUMMY
        "Implemented CI/CD pipelines reducing deployment time by 60%", // DUMMY
        "Mentored junior developers and conducted code reviews", // DUMMY
      ], // DUMMY
    },
    {
      company: "Digital Agency Ltd", // DUMMY
      position: "Full Stack Developer", // DUMMY
      period: "2020 - 2022", // DUMMY
      description: [
        "Developed RESTful APIs for e-commerce platforms", // DUMMY
        "Optimized database queries improving performance by 40%", // DUMMY
        "Collaborated with UX team to implement responsive designs", // DUMMY
      ], // DUMMY
    },
    {
      company: "Web Solutions Co", // DUMMY
      position: "Junior Developer", // DUMMY
      period: "2018 - 2020", // DUMMY
      description: [
        "Built responsive web applications using React and Node.js", // DUMMY
        "Maintained and improved existing codebase", // DUMMY
        "Participated in agile development processes", // DUMMY
      ], // DUMMY
    },
  ] as Experience[],

  // DUMMY - Education with placeholder data
  education: [
    {
      institution: "University of Technology", // DUMMY
      degree: "Bachelor of Computer Science", // DUMMY
      period: "2014 - 2018", // DUMMY
      description: "Specialized in Software Engineering and Web Development", // DUMMY
    },
  ] as Education[],

  // DUMMY - Milestones with placeholder data
  milestones: [
    {
      year: "2024",
      title: "Senior Developer", // DUMMY
      description: "Promoted to Senior Full Stack Developer", // DUMMY
    },
    {
      year: "2023",
      title: "Open Source", // DUMMY
      description: "Contributed to major open source projects", // DUMMY
    },
    {
      year: "2022",
      title: "First Major Project", // DUMMY
      description: "Launched first production-scale application", // DUMMY
    },
    {
      year: "2018",
      title: "Graduation", // DUMMY
      description: "Graduated with honors from University", // DUMMY
    },
  ] as Milestone[],
};

export default portfolioData;
