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
    name: "Ranjith Kumar",
    title: "AI/ML Engineer & Full Stack Developer",
    tagline: "Building intelligent AI/ML systems and modern full-stack web applications.",
    bio: "AI & ML undergraduate at Srinivas Institute of Technology with a strong foundation in Python, machine learning, artificial intelligence, deep learning, and scalable web engineering.",
    detailedBio: [
      "I am an Artificial Intelligence & Machine Learning engineer passionate about turning complex algorithmic research into real-world applications that solve tangible problems.",
      "From engineering offline disaster relief systems using blockchain to training real-time drone computer vision models (YOLOv8) for wildlife safety, I thrive at the intersection of machine learning and production software engineering.",
      "I continuously hone my engineering acumen through hackathons (Srinathon 2.0 Runner-up), internships at AWS Academy and Cognifyz, and building high-performance modern web platforms."
    ],
    email: "ranjithkumar100506@gmail.com",
    phone: "+91 7483413905",
    location: "Mangaluru, Karnataka, India",
    availability: "Open to AI/ML & SWE Roles (Internships / Full-Time)",
    resumeUrl: "/resume.pdf",
    images: {
      heroImage: "/images/about-1.jpeg",
      aboutImage1: "/images/about-1.jpeg",
      aboutImage2: "/images/about-1.jpeg",
    },
  },

  social: {
    github: "https://github.com/RanjithKumar105",
    linkedin: "https://linkedin.com/in/ranjith-kumar-b61816328",
    email: "mailto:ranjithkumar100506@gmail.com",
    phone: "tel:+917483413905",
  },

  stats: [
    {
      label: "Academic CGPA",
      value: "8.53",
      suffix: "/10",
      description: "SIT Mangaluru (AI & ML)",
    },
    {
      label: "Engineered Projects",
      value: "4",
      suffix: "+",
      description: "AI, ML, Blockchain & Web",
    },
    {
      label: "Industry Certifications",
      value: "5",
      suffix: "",
      description: "AWS, IBM, Oracle, Certiport",
    },
    {
      label: "Hackathon Awards",
      value: "1",
      suffix: "st Runner-Up",
      description: "Srinathon 2.0 National Hackathon",
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
          description: "Core language for AI/ML, data pipelines & backend automation",
          proficiency: "Core",
          icon: "Terminal",
        },
        {
          name: "Java",
          description: "Object-oriented software design & algorithmic data structures",
          proficiency: "Proficient",
          icon: "Coffee",
        },
        {
          name: "JavaScript",
          description: "Modern ES6+ frontend architectures & asynchronous workflows",
          proficiency: "Advanced",
          icon: "FileCode2",
        },
        {
          name: "HTML",
          description: "Semantic web architecture & accessible UI structuring",
          proficiency: "Core",
          icon: "Layout",
        },
        {
          name: "CSS",
          description: "Responsive layouts, Tailwind CSS & CSS animations",
          proficiency: "Core",
          icon: "Palette",
        },
        {
          name: "SQL",
          description: "Relational database schema modeling, indexing & querying",
          proficiency: "Proficient",
          icon: "Database",
        },
      ],
    },
    {
      name: "Artificial Intelligence",
      color: "from-emerald-500 to-teal-400",
      icon: "Brain",
      skills: [
        {
          name: "Machine Learning",
          description: "Supervised/unsupervised algorithms, evaluation & inference",
          proficiency: "Core",
          icon: "Brain",
        },
        {
          name: "YOLOv8",
          description: "High-speed object detection, instance segmentation & tracking",
          proficiency: "Advanced",
          icon: "Scan",
        },
        {
          name: "OpenCV",
          description: "Image processing, feature extraction & video stream pipelines",
          proficiency: "Core",
          icon: "Eye",
        },
        {
          name: "NumPy",
          description: "Vectorized numerical array computing & matrix operations",
          proficiency: "Core",
          icon: "Binary",
        },
        {
          name: "Pandas",
          description: "High-performance data manipulation & tabular aggregation",
          proficiency: "Core",
          icon: "Table",
        },
        {
          name: "Scikit-Learn",
          description: "Predictive model training, regression, classification & PCA",
          proficiency: "Advanced",
          icon: "Cpu",
        },
        {
          name: "Data Visualization",
          description: "Insightful statistical charting via Tableau, Power BI & Matplotlib",
          proficiency: "Proficient",
          icon: "BarChart3",
        },
      ],
    },
    {
      name: "Web Development",
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
          name: "Node.js",
          description: "High-throughput RESTful APIs & asynchronous microservices",
          proficiency: "Core",
          icon: "Server",
        },
        {
          name: "MongoDB",
          description: "Document storage, aggregation pipelines & NoSQL databases",
          proficiency: "Proficient",
          icon: "Database",
        },
        {
          name: "Redis",
          description: "In-memory caching, pub/sub queues & sub-millisecond retrieval",
          proficiency: "Proficient",
          icon: "Zap",
        },
      ],
    },
    {
      name: "DevOps & Cloud",
      color: "from-amber-500 to-orange-400",
      icon: "Cloud",
      skills: [
        {
          name: "Git",
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
          name: "AWS",
          description: "EC2, S3, IAM, Cloud Foundations & ML Specialty certification",
          proficiency: "Advanced",
          icon: "Cloud",
        },
        {
          name: "Prometheus",
          description: "Metrics collection, time-series database storage & alerting configurations",
          proficiency: "Proficient",
          icon: "Activity",
        },
        {
          name: "Grafana (Basic)",
          description: "Interactive monitoring dashboards & data visualization panels",
          proficiency: "Proficient",
          icon: "BarChart3",
        },
      ],
    },
    {
      name: "Tools",
      color: "from-pink-500 to-rose-400",
      icon: "Wrench",
      skills: [
        {
          name: "VS Code",
          description: "Configured IDE environment, linting & rapid debugging tools",
          proficiency: "Core",
          icon: "Code2",
        },
        {
          name: "Google Colab",
          description: "Cloud GPU/TPU notebook environments for deep learning models",
          proficiency: "Core",
          icon: "PlayCircle",
        },
        {
          name: "Jupyter Notebook",
          description: "Exploratory computational data science & rapid prototyping",
          proficiency: "Core",
          icon: "BookOpen",
        },
      ],
    },
  ],

  allSkillNames: [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "SQL",
    "Machine Learning",
    "YOLOv8",
    "OpenCV",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Redis",
    "Git",
    "Docker",
    "Jenkins",
    "AWS",
    "Prometheus",
    "Grafana (Basic)",
    "VS Code",
    "Google Colab",
    "Jupyter Notebook",
  ],

  projects: [
    {
      id: "disaster-relief",
      title: "Natural-Disaster Relief Management System",
      description:
        "Engineered an offline-first disaster relief platform incorporating biometric authentication and blockchain verification to guarantee transparent, tamper-proof aid distribution in disconnected disaster zones.",
      tags: ["Node.js", "MongoDB", "Redis", "Blockchain", "Git", "GitHub"],
      githubUrl: "https://github.com/RanjithKumar105",
      liveUrl: "https://github.com/RanjithKumar105",
      featured: true,
      status: "Completed",
    },
    {
      id: "drone-wildlife",
      title: "AI-Enabled Drone Wildlife Tranquilization System",
      description:
        "Developing an autonomous drone computer vision pipeline using YOLOv8, BoT-SORT multi-object tracking, and instance segmentation for precision animal detection, velocity tracking, and safe dart-target localization.",
      tags: ["Python", "YOLOv8", "BoT-SORT", "OpenCV", "Instance Segmentation"],
      githubUrl: "https://github.com/RanjithKumar105",
      liveUrl: "https://github.com/RanjithKumar105",
      featured: true,
      status: "Ongoing",
    },
    {
      id: "pixelhawk",
      title: "PixelHawk – Real-Time Object Detection",
      description:
        "High-performance computer vision system combining OpenCV, MobileNetSSD neural networks, and Haar Cascade classifiers for low-latency multi-class object detection and recognition from live video streams.",
      tags: ["Python", "OpenCV", "MobileNetSSD", "Haar Cascade", "Computer Vision"],
      githubUrl: "https://github.com/RanjithKumar105",
      liveUrl: "https://github.com/RanjithKumar105",
      featured: false,
      status: "Completed",
    },
    {
      id: "medical-chatbot",
      title: "Intelligent Medical Chatbot",
      description:
        "Rule-based healthcare diagnostic assistant delivering structured medical insights, symptom assessment, and health recommendations through predefined clinical decision logic and user inputs.",
      tags: ["Python", "NLP", "Healthcare AI", "Rule-Based Engine"],
      githubUrl: "https://github.com/RanjithKumar105",
      liveUrl: "https://github.com/RanjithKumar105",
      featured: false,
      status: "Completed",
    },
  ],

  experience: [
    {
      id: "aws-internship",
      role: "AI-ML Virtual Intern",
      company: "AWS Academy (via EduSkills)",
      period: "Apr 2025 – Jun 2025",
      description:
        "Designed and trained predictive machine learning models to automate enterprise data analysis pipelines, reducing manual processing time by 30% while adhering to AWS cloud-native best practices.",
      technologies: ["AWS Cloud", "Machine Learning", "Python", "Data Automation"],
      location: "Remote",
    },
    {
      id: "cognifyz-internship",
      role: "Machine Learning Intern",
      company: "Cognifyz Technology",
      period: "Nov 2025 – Dec 2025",
      description:
        "Executed end-to-end ML workflows including rigorous exploratory data analysis (EDA), data cleaning, feature engineering, and evaluating supervised/unsupervised algorithms on real-world datasets.",
      technologies: ["Python", "Google Colab", "NumPy", "Pandas", "Scikit-Learn"],
      location: "Virtual",
    },
  ],

  education: [
    {
      id: "be-aiml",
      degree: "B.E. – Artificial Intelligence & Machine Learning",
      institution: "Srinivas Institute of Technology, Mangaluru",
      period: "2023 – 2027",
      grade: "CGPA: 8.53",
      details:
        "Core coursework in Machine Learning, Deep Learning, Data Structures & Algorithms, Database Systems, Computer Networks, and Autonomous Systems.",
      icon: "GraduationCap",
    },
    {
      id: "puc-pcmc",
      degree: "PUC – PCMC (Physics, Chemistry, Math, Computer Science)",
      institution: "Carmel Composite P.U College, Modankapu",
      period: "2021 – 2023",
      grade: "Percentage: 83%",
      details:
        "Built robust quantitative foundations in Calculus, Linear Algebra, Object-Oriented Programming, and Computational Logic.",
      icon: "BookOpen",
    },
    {
      id: "sslc",
      degree: "SSLC (High School Examination)",
      institution: "St John's English Medium High-School, Allipade",
      period: "2020 – 2021",
      grade: "Percentage: 86%",
      details:
        "Graduated with distinction with leadership roles in science forums and scholastic competitions.",
      icon: "School",
    },
  ],

  certifications: [
    {
      id: "aws-cloud-foundations",
      name: "AWS Academy Cloud Foundation",
      issuer: "AWS Academy",
      date: "2025",
      url: "https://aws.amazon.com/training/awsacademy/",
      icon: "Cloud",
    },
    {
      id: "ibm-web-dev",
      name: "Web Development Fundamentals",
      issuer: "IBM",
      date: "2025",
      url: "https://www.ibm.com/training",
      icon: "Code",
    },
    {
      id: "oracle-ai-foundations",
      name: "Oracle Certified Foundations Associate – AI Foundations",
      issuer: "Oracle Cloud Infrastructure",
      date: "2025",
      url: "https://education.oracle.com/",
      icon: "Cpu",
    },
    {
      id: "aws-ml-specialty",
      name: "AWS Certified Machine Learning – Specialty",
      issuer: "Amazon Web Services",
      date: "2025",
      url: "https://aws.amazon.com/certification/",
      icon: "Brain",
    },
    {
      id: "certiport-it-specialist",
      name: "IT Specialist – HTML5, AI & Data Analytics",
      issuer: "Certiport",
      date: "2025",
      url: "https://certiport.pearsonvue.com/",
      icon: "Award",
    },
    {
      id: "certiport-it-js",
      name: "IT Specialist: JavaScript",
      issuer: "Certiport / Pearson VUE",
      date: "May 26, 2025",
      url: "https://verify.certiport.com",
      credentialId: "2uSq-XMzU",
      icon: "Code",
    },
    {
      id: "ibm-spectrum-storage",
      name: "IBM Spectrum Storage for AI and Big Data Fundamentals",
      issuer: "IBM",
      date: "August 12, 2025",
      icon: "Cloud",
    },
    {
      id: "cisco-modern-ai",
      name: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "August 17, 2025",
      icon: "Brain",
    },
    {
      id: "forage-aws-solutions-arch",
      name: "AWS Solutions Architecture Job Simulation",
      issuer: "Forage (AWS)",
      date: "November 13, 2025",
      icon: "Cloud",
    },
    {
      id: "infosys-ethical-hacking",
      name: "Ethical Hacking Masterclass",
      issuer: "Infosys Springboard",
      date: "August 17, 2025",
      icon: "Award",
    },
  ],

  achievements: [
    {
      id: "srinathon",
      title: "Runner-Up | Srinathon 2.0 Hackathon 2025",
      organizer: "SSOSC & Nexux SIT (Team Event)",
      date: "2025",
      description:
        "Awarded 2nd place out of 50+ collegiate engineering teams in a high-intensity 24-hour national hackathon for developing an AI-assisted disaster response platform.",
      category: "Hackathon",
      badge: "National 2nd Place",
    },
    {
      id: "ieee-ceda",
      title: "Finalist | IEEE CEDA Ideathon 2025",
      organizer: "IEEE CEDA (Held at VTU, Belagavi)",
      date: "2025",
      description:
        "Presented an innovative drone-based wildlife surveillance framework evaluated by IEEE academic researchers and industry veterans.",
      category: "Ideathon",
      badge: "Selected Presenter",
    },
    {
      id: "nss",
      title: "Active Member & Volunteer | National Service Scheme",
      organizer: "National Service Scheme (NSS India)",
      date: "2023 – Present",
      description:
        "Participated in community health awareness drives, blood donation camps, environmental conservation initiatives, and digital literacy workshops.",
      category: "Community",
      badge: "Community Service",
    },
  ],
};

export default portfolioData;
