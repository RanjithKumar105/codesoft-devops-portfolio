export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
  featured?: boolean;
  status?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  location?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details: string;
  icon?: string;
}

export interface SkillItem {
  name: string;
  description: string;
  proficiency: "Core" | "Advanced" | "Proficient";
  icon: string;
}

export interface SkillCategory {
  name: string;
  color: string;
  icon: string;
  skills: SkillItem[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  organizer: string;
  date: string;
  description: string;
  category: "Hackathon" | "Ideathon" | "Leadership" | "Community";
  badge?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    detailedBio: string[];
    email: string;
    phone: string;
    location: string;
    availability: string;
    resumeUrl: string;
    images: {
      heroImage: string;
      aboutImage1: string;
      aboutImage2: string;
    };
  };
  social: {
    github: string;
    linkedin: string;
    email: string;
    phone: string;
  };
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }[];
  skillCategories: SkillCategory[];
  allSkillNames: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Arjun Mehta",
    title: "Full Stack Developer & DevOps Enthusiast",
    tagline: "Building scalable web applications and exploring modern DevOps practices.",
    bio: "Computer Science undergraduate at TechNova Institute of Engineering with a strong foundation in full-stack development, cloud-native technologies, and DevOps automation.",
    detailedBio: [
      "I am a Full Stack Developer passionate about building scalable web applications and automating infrastructure with modern DevOps practices.",
      "From containerizing applications with Docker and deploying them on Kubernetes clusters to building collaborative task management platforms with REST APIs, I thrive at the intersection of software engineering and cloud operations.",
      "I continuously sharpen my skills through internships, hands-on DevOps projects, and exploring the entire deployment lifecycle from code commit to monitored production deployment.",
    ],
    email: "arjun.mehta.dev@example.com",
    phone: "+91 9876543210",
    location: "Bengaluru, India",
    availability: "Open to Full Stack & DevOps Roles (Internships)",
    resumeUrl: "/resume.pdf",
    images: {
      heroImage: "/images/avatar.jpeg",
      aboutImage1: "/images/avatar.jpeg",
      aboutImage2: "/images/avatar.jpeg",
    },
  },

  social: {
    github: "https://github.com/arjunmehta-demo",
    linkedin: "https://www.linkedin.com/in/arjunmehta-demo",
    email: "mailto:arjun.mehta.dev@example.com",
    phone: "tel:+919876543210",
  },

  stats: [
    {
      label: "Projects Built",
      value: "4",
      suffix: "+",
      description: "Full Stack & DevOps",
    },
    {
      label: "DevOps Tools",
      value: "8",
      suffix: "+",
      description: "Docker, K8s, Jenkins & more",
    },
    {
      label: "Certifications",
      value: "4",
      suffix: "",
      description: "AWS, Docker, Git, K8s",
    },
    {
      label: "Internship",
      value: "1",
      suffix: "",
      description: "CloudNova Technologies",
    },
  ],

  skillCategories: [
    {
      name: "Programming Languages",
      color: "from-blue-500 to-cyan-400",
      icon: "Code2",
      skills: [
        {
          name: "Python",
          description: "Scripting, automation, data processing & backend services",
          proficiency: "Core",
          icon: "Terminal",
        },
        {
          name: "JavaScript",
          description: "Modern ES6+ frontend architectures & asynchronous workflows",
          proficiency: "Advanced",
          icon: "FileCode2",
        },
        {
          name: "TypeScript",
          description: "Type-safe application development with React & Node.js",
          proficiency: "Proficient",
          icon: "Code2",
        },
        {
          name: "HTML5",
          description: "Semantic web architecture & accessible UI structuring",
          proficiency: "Core",
          icon: "Layout",
        },
        {
          name: "CSS3",
          description: "Responsive layouts, Tailwind CSS & CSS animations",
          proficiency: "Core",
          icon: "Palette",
        },
      ],
    },
    {
      name: "Frontend",
      color: "from-purple-500 to-indigo-400",
      icon: "Globe",
      skills: [
        {
          name: "React",
          description: "Component lifecycle, state hooks & reactive web interfaces",
          proficiency: "Advanced",
          icon: "Atom",
        },
        {
          name: "Next.js",
          description: "App Router, SSR, static generation & server components",
          proficiency: "Advanced",
          icon: "Globe",
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first styling for fast and consistent UI development",
          proficiency: "Core",
          icon: "Palette",
        },
      ],
    },
    {
      name: "Backend & Database",
      color: "from-emerald-500 to-teal-400",
      icon: "Server",
      skills: [
        {
          name: "Node.js",
          description: "High-throughput RESTful APIs & asynchronous microservices",
          proficiency: "Core",
          icon: "Server",
        },
        {
          name: "Express.js",
          description: "Lightweight web framework for building REST APIs",
          proficiency: "Advanced",
          icon: "Zap",
        },
        {
          name: "MongoDB",
          description: "Document storage, aggregation pipelines & NoSQL databases",
          proficiency: "Proficient",
          icon: "Database",
        },
        {
          name: "PostgreSQL",
          description: "Relational database schema modeling, indexing & querying",
          proficiency: "Proficient",
          icon: "Database",
        },
      ],
    },
    {
      name: "DevOps & Cloud",
      color: "from-amber-500 to-orange-400",
      icon: "Cloud",
      skills: [
        {
          name: "Git & GitHub",
          description: "Version control, branching strategies & collaborative workflows",
          proficiency: "Core",
          icon: "GitBranch",
        },
        {
          name: "Docker",
          description: "Containerization, multi-stage builds & environment isolation",
          proficiency: "Proficient",
          icon: "Boxes",
        },
        {
          name: "Jenkins",
          description: "Continuous integration pipelines & automated build triggers",
          proficiency: "Proficient",
          icon: "Cog",
        },
        {
          name: "Kubernetes",
          description: "Container orchestration, deployments & service management",
          proficiency: "Proficient",
          icon: "Cloud",
        },
        {
          name: "GitHub Actions",
          description: "Automated CI/CD workflows directly in GitHub repositories",
          proficiency: "Proficient",
          icon: "Activity",
        },
        {
          name: "AWS",
          description: "EC2, S3, IAM & Cloud Foundations for cloud infrastructure",
          proficiency: "Proficient",
          icon: "Cloud",
        },
        {
          name: "Linux",
          description: "Shell scripting, system administration & server configuration",
          proficiency: "Proficient",
          icon: "Terminal",
        },
        {
          name: "Prometheus & Grafana",
          description: "Metrics collection, monitoring dashboards & alerting",
          proficiency: "Proficient",
          icon: "BarChart3",
        },
      ],
    },
  ],

  allSkillNames: [
    "Python",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Docker",
    "Jenkins",
    "Kubernetes",
    "GitHub Actions",
    "AWS",
    "Linux",
    "Prometheus",
    "Grafana",
  ],

  projects: [
    {
      id: "cloud-deploy",
      title: "CloudDeploy",
      description:
        "A containerized web application deployment platform demonstrating CI/CD automation using Docker, Jenkins and Kubernetes.",
      tags: ["Next.js", "Node.js", "Docker", "Jenkins", "Kubernetes"],
      githubUrl: "https://github.com/arjunmehta-demo",
      liveUrl: "https://github.com/arjunmehta-demo",
      featured: true,
      status: "Completed",
    },
    {
      id: "taskflow",
      title: "TaskFlow",
      description:
        "A collaborative task management application with authentication, REST APIs and database integration.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/arjunmehta-demo",
      liveUrl: "https://github.com/arjunmehta-demo",
      featured: true,
      status: "Completed",
    },
    {
      id: "datavision",
      title: "DataVision",
      description:
        "An interactive analytics dashboard for visualizing business data and generating useful insights.",
      tags: ["Python", "Pandas", "Power BI", "JavaScript"],
      githubUrl: "https://github.com/arjunmehta-demo",
      liveUrl: "https://github.com/arjunmehta-demo",
      featured: false,
      status: "Completed",
    },
    {
      id: "devmonitor",
      title: "DevMonitor",
      description:
        "A lightweight monitoring dashboard for tracking application health and deployment status.",
      tags: ["Next.js", "Node.js", "Docker", "Prometheus", "Grafana"],
      githubUrl: "https://github.com/arjunmehta-demo",
      liveUrl: "https://github.com/arjunmehta-demo",
      featured: false,
      status: "Completed",
    },
  ],

  experience: [
    {
      id: "cloudnova-internship",
      role: "DevOps Intern",
      company: "CloudNova Technologies",
      period: "June 2026 - August 2026",
      description:
        "Worked on containerized application deployment, CI/CD workflows, Docker images and basic Kubernetes deployments.",
      technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Linux"],
      location: "Bengaluru, India",
    },
  ],

  education: [
    {
      id: "btech-cse",
      degree: "B.Tech in Computer Science and Engineering",
      institution: "TechNova Institute of Engineering",
      period: "2023 - 2027",
      grade: "CGPA: 8.2",
      details:
        "Core coursework in Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Cloud Computing, and Software Engineering.",
      icon: "GraduationCap",
    },
  ],

  certifications: [
    {
      id: "aws-cloud-practitioner",
      name: "AWS Cloud Practitioner - Demo Certification",
      issuer: "Amazon Web Services",
      date: "2026",
      url: "https://aws.amazon.com/certification/",
      icon: "Cloud",
    },
    {
      id: "docker-fundamentals",
      name: "Docker Fundamentals - Demo Certification",
      issuer: "Docker Inc.",
      date: "2026",
      url: "https://www.docker.com/",
      icon: "Code",
    },
    {
      id: "git-github-essentials",
      name: "Git & GitHub Essentials - Demo Certification",
      issuer: "GitHub",
      date: "2026",
      url: "https://github.com/",
      icon: "Code",
    },
    {
      id: "intro-to-kubernetes",
      name: "Introduction to Kubernetes - Demo Certification",
      issuer: "Linux Foundation",
      date: "2026",
      url: "https://training.linuxfoundation.org/",
      icon: "Cloud",
    },
  ],

  achievements: [
    {
      id: "devops-hackathon",
      title: "Finalist | College DevOps Hackathon 2026",
      organizer: "TechNova Institute of Engineering",
      date: "2026",
      description:
        "Reached the finals in a college-level DevOps competition by building a fully automated CI/CD pipeline that deployed a containerized web application using Jenkins, Docker and Kubernetes.",
      category: "Hackathon",
      badge: "Finalist",
    },
    {
      id: "open-source-contrib",
      title: "Open Source Contributor",
      organizer: "GitHub Community",
      date: "2025 - Present",
      description:
        "Actively contributed to open-source repositories focused on developer tooling, documentation improvements and bug fixes in Node.js and Python projects.",
      category: "Community",
      badge: "Community Service",
    },
    {
      id: "tech-club-lead",
      title: "Technical Lead | College Tech Club",
      organizer: "TechNova Institute of Engineering",
      date: "2024 - Present",
      description:
        "Led the technical team of the college tech club, organizing workshops on web development, Docker, and cloud computing for fellow students.",
      category: "Leadership",
      badge: "Leadership",
    },
  ],
};

export default portfolioData;
