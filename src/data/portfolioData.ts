import { Project, Tech, SocialLinks, Contact, Experience, Education, Milestone } from "@/types/portfolio";

export const portfolioData = {
  personal: {
    name: "muh ishaq afif ismail",
    role: "Informatics Student / Software Developer",
    tagline: "Building innovative solutions at the intersection of software, networks, and interactive experiences",
    bio: "Mahasiswa S1 Informatika di Telkom University dengan latar belakang kuat di computer dan network engineering. Berpengalaman dalam pengembangan aplikasi web, game dev, dan sistem backend.",
    location: "Bandung, Indonesia",
    available: true,
  },

  contact: {
    email: "",
    phone: "+62-821-9628-7654", 
    location: "Bandung, Indonesia",
  } as Contact,

  socialLinks: {
    github: "https://github.com/Muh1shaq",
    linkedin: "TODO: add LinkedIn URL",
    twitter: "TODO: add Twitter URL",
  } as SocialLinks,

  techStack: [
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend Web",
      level: 3,
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend Web",
      level: 3,
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Frontend Web",
      level: 3,
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend Web",
      level: 4,
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      category: "Frontend Web",
      level: 3,
    },
    {
      name: "Java Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      category: "Backend",
      level: 3,
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      level: 3,
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Backend & Scripting",
      level: 4,
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database",
      level: 3,
    },
    {
      name: "Supabase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      category: "Database",
      level: 3,
    },
    {
      name: "Godot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
      category: "Game Dev",
      level: 2,
    },
    {
      name: "GDScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg",
      category: "Game Dev",
      level: 2,
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      category: "UI/UX Design",
      level: 2,
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Tools & Systems",
      level: 3,
    },
    {
      name: "Vercel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      category: "Tools & Systems",
      level: 3,
    },
  ] as Tech[],

  projects: [
    {
      id: "project-1",
      title: "ResFood",
      description: "Platform web redistribusi surplus makanan untuk mengurangi food waste dan kerawanan pangan",
      longDescription: "ResFood adalah platform ekosistem digital berbasis web yang dirancang untuk mengatasi isu rantai pasok makanan, food waste, dan kerawanan pangan global. Platform ini menjembatani dua sisi ekosistem: produsen makanan dapat menyalurkan surplus makanan mereka kepada masyarakat luas, UMKM, dan lembaga sosial secara transparan, aman, dan berkelanjutan.",
      image: "/voxel/project-resfood.jpg",
      category: "web",
      technologies: ["Next.js", "Supabase", "RLS", "TypeScript"],
      features: [
        "Modul Manajemen Mitra",
        "Surplus Food Marketplace",
        "Smart Redistribution Network",
        "Core Infrastructure",
      ],
      githubUrl: "https://github.com/Muh1shaq/ResFood",
      status: "completed",
    },
    {
      id: "project-2",
      title: "SimpanAja",
      description: "Aplikasi manajemen gudang berbasis web untuk mengelola inventaris secara efisien dan real-time",
      longDescription: "SimpanAja adalah aplikasi manajemen gudang berbasis web yang dirancang untuk membantu bisnis mengelola inventaris secara efisien, akurat, dan real-time. Nama Simpanaja berasal dari kata simpan yang berarti menyimpan barang. Aplikasi ini mencakup fitur inbound dan outbound, pengelolaan inventori, RBAC, dan laporan.",
      image: "/voxel/project-warehouse.svg",
      category: "web",
      technologies: ["TypeScript", "Web"],
      features: [
        "Real-time inventory management",
        "Inbound/outbound tracking",
        "RBAC system",
        "Analytics reports",
      ],
      githubUrl: "https://github.com/Muh1shaq/SimpanAja",
      status: "completed",
    },
    {
      id: "project-3",
      title: "Rewind and Regret",
      description: "Game 2D puzzle platformer dengan konsep asymmetric world-state consequences",
      longDescription: "Rewind and Regret adalah sebuah game 2D puzzle platformer yang mengusung konsep asymmetric world-state consequences, di mana tindakan pemain di masa lalu secara permanen mengubah rintangan di masa depan.",
      image: "/voxel/project-time.svg",
      category: "game",
      technologies: ["Godot", "GDScript"],
      features: [
        "Asymmetric world-state mechanics",
        "Time-based puzzle solving",
        "2D platformer gameplay",
      ],
      githubUrl: "https://github.com/Muh1shaq/RewindAndRegret",
      status: "completed",
    },
    {
      id: "project-4",
      title: "Worst Enemy",
      description: "Game dungeon 2D dengan mekanik time-loop dan dual character control",
      longDescription: "Worst Enemy adalah game dungeon 2D dengan mekanik time-loop di mana dua karakter dikontrol bergantian per run, karakter lain menjalankan rekaman run sebelumnya.",
      image: "/voxel/project-dungeon.svg",
      category: "game",
      technologies: ["Godot", "GDScript"],
      features: [
        "Time-loop mechanics",
        "Dual character control",
        "Recording/playback system",
      ],
      githubUrl: "https://github.com/Muh1shaq/WorstEnemy",
      status: "completed",
    },
    {
      id: "project-5",
      title: "TilikAman",
      description: "PWA civic-tech untuk koordinasi bantuan mikro hiper-lokal berbasis RT/RW bagi lansia dan warga rentan",
      longDescription: "TilikAman adalah PWA civic-tech untuk koordinasi bantuan mikro hiper-lokal berbasis RT/RW bagi lansia dan warga rentan. Fitur meliputi check-in harian, eskalasi bertingkat, tiket bantuan, dan dashboard admin RT.",
      image: "/voxel/project-village.svg",
      category: "web",
      technologies: ["PWA", "Supabase Realtime", "Vercel"],
      features: [
        "Daily check-in system",
        "Multi-level escalation",
        "Help ticket management",
        "RT admin dashboard",
      ],
      status: "completed",
    },
  ] as Project[],

  experience: [
    {
      company: "Telkom University",
      position: "S1 Informatika",
      period: "2021 - Present",
      description: [
        "Fokus pada Computer and Network Engineering",
        "Pengembangan aplikasi web dan game development",
        "Partisipasi dalam kompetisi dan project jam",
      ],
    },
    {
      company: "COMPFEST 18",
      position: "Game Jam Participant",
      period: "2024",
      description: [
        "Persiapan game development dengan Godot",
        "Collaborative game development experience",
      ],
    },
  ] as Experience[],

  education: [
    {
      institution: "Telkom University",
      degree: "S1 Informatika",
      period: "2021 - Present",
      description: "Computer and Network Engineering",
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
