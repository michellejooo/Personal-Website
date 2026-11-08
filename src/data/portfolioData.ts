import { Skill, SkillGroup, Project, AwardItem, ExperienceItem, Certification, LanguageItem, EducationItem } from '../types';
import profileAvatarImg from '../assets/images/regenerated_image_1786096085071.jpg';
import profileAvatarFallbackImg from '../assets/images/joanna_avatar_1785572098877.jpg';
import projectPortfolioImg from '../assets/images/website_profile.png';
import projectCaresImg from '../assets/images/cares_platform_preview_1793747514529.jpg';
import caresPosterImg from '../assets/images/poster_cares.03.27.jpeg';
import courseraCertImg from '../assets/images/sertifikatdata.png';
import googleAiCertImg from '../assets/images/google_ai_cert.jpg';

export const PROFILE_AVATAR = profileAvatarImg;
export const PROFILE_AVATAR_FALLBACK = profileAvatarFallbackImg;

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Telkom University',
    major: 'Information Technology Major',
    period: '2024 - Present',
    location: 'Bandung, Jawa Barat',
    status: 'In Progress',
  },
  {
    institution: 'SMA Santa Maria Pekanbaru',
    major: 'Science Major',
    period: '2021 - 2024',
    location: 'Pekanbaru, Riau',
    status: 'Graduated',
  },
];

export const PROFILE_DATA = {
  name: 'Joanna',
  title: 'Information Technology Student',
  avatar: profileAvatarImg,
  subTitle: 'Joanna | AI & Data Analyst Enthusiast',
  roles: ['Web Development Enthusiast', 'Prompt Engineer',],
  introduction:
    'IT Student at Telkom University specializing in Web Dev, Data Analysis, and AI. Strong leader and problem-solver, ready to adapt and contribute effectively in team or solo roles.',
  technologyTags: [
    'Web Development',
    'AI Engineer',
    'Data Analyst',
  ],
  stats: [
    { label: 'Featured Projects', value: '2', sub: 'Web & Full Stack' },
    { label: 'Certifications', value: '2', sub: 'Google AI & Data Analysis' },
  ],
  aboutText:
    'IT Student at Telkom University specializing in Web Dev, Data Analysis, and AI. Strong leader and problem-solver, ready to adapt and contribute effectively in team or solo roles.',
  contact: {
    email: 'joannatambunan496@gmail.com',
    location: 'Bandung, Indonesia',
    linkedin: 'https://www.linkedin.com/in/joannamt',
    github: 'https://github.com/michellejooo',
    instagram: 'https://instagram.com/joannamt_',
  },
  cvUrl: 'https://drive.google.com/drive/folders/1example?usp=sharing',
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&si=db09c08e926543dc',
  closingQuote: 'Building technology with purpose, learning without limits.',
};

export const SKILLS_DATA: Skill[] = [
  // Data Science & Analytics
  { name: 'NumPy', category: 'Data Science & Analytics', level: 88, iconName: 'Binary', description: 'Numerical computing & multidimensional arrays' },
  { name: 'Pandas', category: 'Data Science & Analytics', level: 88, iconName: 'Table', description: 'Dataframe manipulation & aggregation' },
  { name: 'Matplotlib', category: 'Data Science & Analytics', level: 84, iconName: 'PieChart', description: 'Data visualization & statistical plotting' },
  { name: 'ERD Diagram', category: 'Data Science & Analytics', level: 86, iconName: 'Database', description: 'Relational database schema & entity relationship design' },
  { name: 'Microsoft Excel', category: 'Data Science & Analytics', level: 86, iconName: 'Sheet', description: 'Formulas, lookups, pivot tables & data analysis' },
  { name: 'Data Analyst', category: 'Data Science & Analytics', level: 88, iconName: 'BarChart2', description: 'Exploratory data analysis & business intelligence' },
  { name: 'Data Cleaning', category: 'Data Science & Analytics', level: 86, iconName: 'FileCheck', description: 'Data preprocessing, handling nulls & normalization' },

  // Website & Back-End Development
  { name: 'TypeScript', category: 'Website Development', level: 86, iconName: 'Code', description: 'Static typing, interfaces & scalable application architecture' },
  { name: 'PostgreSQL', category: 'Website Development', level: 86, iconName: 'Database', description: 'Relational database management, ACID transactions & indexing' },
  { name: 'ORM Prisma', category: 'Website Development', level: 85, iconName: 'Layers', description: 'Type-safe database ORM, schema modeling & automated migrations' },
  { name: 'Node.js', category: 'Website Development', level: 84, iconName: 'Server', description: 'Event-driven JavaScript runtime & asynchronous backend logic' },
  { name: 'Express.js', category: 'Website Development', level: 85, iconName: 'Network', description: 'RESTful API routing, middleware & backend server setup' },
  { name: 'React', category: 'Website Development', level: 85, iconName: 'Component', description: 'Component architecture, state management & reactive UI' },
  { name: 'Tailwind CSS', category: 'Website Development', level: 90, iconName: 'Palette', description: 'Utility-first responsive styling & modern design systems' },
  { name: 'UX Researcher', category: 'Website Development', level: 85, iconName: 'Search', description: 'User flow conceptualization, usability testing & wireframes' },

  // Programming Languages
  { name: 'Python', category: 'Programming Languages', level: 90, iconName: 'Terminal', description: 'Core programming for data science, scripting & AI automation' },
  { name: 'Go', category: 'Programming Languages', level: 80, iconName: 'Cpu', description: 'High-concurrency systems, fast compiled execution & microservices' },
  { name: 'SQL', category: 'Programming Languages', level: 86, iconName: 'Database', description: 'Relational database querying, joins & aggregations' },

  // AI & Prompt Engineering
  { name: 'Prompt Engineer', category: 'AI & Prompt Engineering', level: 90, iconName: 'Bot', description: 'Generative AI system prompts, few-shot tuning & reasoning flows' },

  // Others & Soft Skills
  { name: 'Leadership', category: 'Others & Soft Skills', level: 88, iconName: 'Workflow', description: 'Team guidance, project initiative & milestone coordination' },
  { name: 'Team Work', category: 'Others & Soft Skills', level: 90, iconName: 'UserCheck', description: 'Active collaboration & cross-functional synergy' },
  { name: 'Communication', category: 'Others & Soft Skills', level: 90, iconName: 'Share2', description: 'Clear technical verbal & written communication' },
  { name: 'Public Speaking', category: 'Others & Soft Skills', level: 85, iconName: 'MessageSquare', description: 'Presentations, academic pitching & seminar facilitation' },
  { name: 'Problem Solving', category: 'Others & Soft Skills', level: 88, iconName: 'Brain', description: 'Analytical diagnosis & structured solution frameworks' },
  { name: 'Scientific Paper', category: 'Others & Soft Skills', level: 92, iconName: 'FileText', description: 'Academic paper drafting, thesis & national essay writing' },
  { name: 'Proposal Writing', category: 'Others & Soft Skills', level: 88, iconName: 'FileCheck', description: 'Project grant writing, funding & event proposals' },
  { name: 'Microsoft Word', category: 'Others & Soft Skills', level: 90, iconName: 'FileText', description: 'Professional documentation, papers & structured reporting' },
  { name: 'Keyboardist', category: 'Others & Soft Skills', level: 88, iconName: 'Activity', description: 'Musical harmony, performance & worship keyboard team' },
];

export const SKILL_GROUPS_DATA: SkillGroup[] = [
  {
    id: 'data-science',
    title: 'Data Science & Analyst',
    subtitle: 'Data analytics, statistical modeling, database design & exploratory research',
    badge: 'Data Science',
    iconName: 'BarChart2',
    subGroups: [
      {
        label: 'Tools & Libraries',
        skills: [
          { name: 'NumPy', iconName: 'Binary', description: 'Numerical computing, matrix operations & array processing' },
          { name: 'Pandas', iconName: 'Table', description: 'Dataframe manipulation, data cleaning & aggregation' },
          { name: 'Matplotlib', iconName: 'PieChart', description: 'Data visualization, charting & statistical distribution plotting' },
          { name: 'ERD Diagram', iconName: 'Database', description: 'Relational database schema design & entity-relationship modeling' },
          { name: 'Microsoft Excel', iconName: 'Sheet', description: 'Advanced formulas, lookup tables, pivot tables & analytics' },
        ],
      },
      {
        label: 'Languages & Core Analytics',
        skills: [
          { name: 'Python', iconName: 'Terminal', description: 'Data science scripting, Pandas/NumPy automation' },
          { name: 'SQL', iconName: 'Database', description: 'Structured querying, joins, grouping & aggregations' },
          { name: 'Data Analyst', iconName: 'BarChart2', description: 'Exploratory data analysis (EDA) & business intelligence' },
          { name: 'Data Cleaning', iconName: 'FileCheck', description: 'Dataset preprocessing, outlier handling & pipelines' },
        ],
      },
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    subtitle: 'Full-stack web architecture with heavy focus on modern back-end engineering',
    badge: 'Back-End & Web',
    iconName: 'Server',
    subGroups: [
      {
        label: 'Back-End Development',
        skills: [
          { name: 'TypeScript', iconName: 'Code', description: 'Strict type safety, object modeling & scalable server code', highlight: true },
          { name: 'PostgreSQL', iconName: 'Database', description: 'ACID-compliant relational database, indexing & relational models', highlight: true },
          { name: 'ORM Prisma', iconName: 'Layers', description: 'Type-safe database ORM, data migrations & schema generation', highlight: true },
          { name: 'Node.js', iconName: 'Server', description: 'Asynchronous event-driven server runtime' },
          { name: 'Express.js', iconName: 'Network', description: 'RESTful API routing, controllers & middleware architecture' },
        ],
      },
      {
        label: 'Front-End & UI/UX',
        skills: [
          { name: 'React', iconName: 'Component', description: 'Modern reactive component hierarchy & custom hooks' },
          { name: 'Tailwind CSS', iconName: 'Palette', description: 'Utility-first responsive layouts & design systems' },
          { name: 'UX Researcher', iconName: 'Search', description: 'User flow structuring, usability testing & visual prototypes' },
        ],
      },
    ],
  },
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    subtitle: 'Core programming languages powering backend services, algorithms & data systems',
    badge: 'Languages',
    iconName: 'Terminal',
    subGroups: [
      {
        label: 'Core Languages',
        skills: [
          { name: 'Python', iconName: 'Terminal', description: 'General-purpose programming, data analytics, AI & automation' },
          { name: 'Go', iconName: 'Cpu', description: 'High-performance backend systems, concurrency & robust tooling', highlight: true },
          { name: 'TypeScript', iconName: 'Code', description: 'Static typing for modern web and backend server architectures', highlight: true },
          { name: 'SQL', iconName: 'Database', description: 'Relational database query language and schema operations' },
        ],
      },
    ],
  },
  {
    id: 'others-softskills',
    title: 'Others & Soft Skills',
    subtitle: 'Interpersonal leadership, academic research, formal writing & creative abilities',
    badge: 'Soft Skills & Creative',
    iconName: 'Sparkles',
    subGroups: [
      {
        label: 'Leadership & Soft Skills',
        skills: [
          { name: 'Leadership', iconName: 'Workflow', description: 'Organization team guidance, project planning & delegation', highlight: true },
          { name: 'Team Work', iconName: 'UserCheck', description: 'Collaborative problem solving & cross-functional synergy' },
          { name: 'Communication', iconName: 'Share2', description: 'Clear technical and interpersonal verbal/written articulation' },
          { name: 'Public Speaking', iconName: 'MessageSquare', description: 'Presentations, jury pitching & academic seminar hosting' },
          { name: 'Problem Solving', iconName: 'Brain', description: 'Structured root cause mapping & pragmatic engineering solutions' },
        ],
      },
      {
        label: 'Academic Writing & Documentation',
        skills: [
          { name: 'Scientific Paper', iconName: 'FileText', description: 'Academic paper drafting, thesis & national essay competitions', highlight: true },
          { name: 'Proposal Writing', iconName: 'FileCheck', description: 'Formal grant proposals, project budgeting & event documentation' },
          { name: 'Microsoft Word', iconName: 'FileText', description: 'Academic formatting, structured reports & official letters' },
        ],
      },
      {
        label: 'Creative & Musical',
        skills: [
          { name: 'Keyboardist', iconName: 'Activity', description: 'Musical keyboard harmony, live band performance & worship team', highlight: true },
        ],
      },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A responsive personal website showcasing projects, experiences, certifications, technical skills, and professional profile.',
    longDescription:
      'Engineered with a clean deep-red aesthetic (#7A0000), supporting smooth light and dark modes, responsive layouts, Framer Motion transitions, and an embedded Spotify jams player.',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Web Development',
    image: projectPortfolioImg,
    status: 'Live / Active',
    githubUrl: 'https://github.com/michellejooo/Personal-Website',
    liveUrl: '#',
    features: [
      'Sticky glassmorphism navbar with smooth section scroll',
      'Dual theme engine (Deep Red & White / Dark Slate)',
      'Categorized skills matrix with proficiency meters',
      'Embedded Spotify playlist glassmorphic player',
      'Interactive Resume viewer and CV download',
    ],
  },
  {
    id: 'cares',
    title: 'CARES – Campus Facility Management Platform',
    description:
      'A digital campus facility management platform developed at the Advanced Software Engineer Laboratory to improve transparency, accountability, and efficiency in campus facility reporting at Telkom University. Allows users to report damaged facilities, upload supporting photos, track report progress in real time, and enables administrators to monitor facility conditions through an analytical dashboard.',
    longDescription:
      'Developed as a flagship laboratory project within the Advanced Software Engineer Laboratory. As a Backend Developer, I was responsible for developing the server-side functionality and RESTful APIs to support the platform. My contributions included implementing backend logic, managing database operations, developing authentication and authorization mechanisms, handling facility report management, implementing data validation and file uploads, and ensuring smooth communication between the frontend and backend systems.',
    role: 'Backend Developer',
    organization: 'Advanced Software Engineer Laboratory',
    techStack: ['Node.js', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'JWT', 'Zod'],
    category: 'Full Stack',
    image: caresPosterImg,
    posterImage: caresPosterImg,
    status: 'Active / Completed',
    githubUrl: 'https://github.com/Cares-Tel-U',
    liveUrl: '#',
    features: [
      'Advanced Software Engineer Lab: Core flagship laboratory project for campus facility management',
      'Facility Damage Reporting with photo uploads and real-time status tracking',
      'Server-side functionality and RESTful APIs with Node.js & Express.js',
      'Database operations and data modeling with PostgreSQL & Prisma ORM',
      'Robust authentication, authorization (JWT), and schema validation (Zod)',
      'Analytical admin dashboard integration for facility condition monitoring',
    ],
  },
  {
    id: 'beaqua-system',
    title: 'BEAQUA SYSTEM: Integrasi Bioteknologi dan Platform Distribusi dalam Valorisasi Aquatic By-Products untuk Pengembangan Bahan Aktif Kosmetik Berkelanjutan',
    description:
      'A project developed for Aprotech Fair 2026, a student innovation competition that encourages students to develop innovative ideas and solutions. BeAqua System proposes an integrated biotechnology and distribution platform to transform aquatic by-products into sustainable cosmetic active ingredients.',
    longDescription:
      'A project developed for Aprotech Fair 2026, a student innovation competition that encourages students to develop innovative ideas and solutions. BeAqua System proposes an integrated biotechnology and distribution platform to transform aquatic by-products into sustainable cosmetic active ingredients. I contributed to developing the UI/UX prototype and platform user flow, conducting national and international benchmarking to compare similar innovations and identify competitive advantages, mapping the system into a structured digital platform, and supporting research, analysis, and scientific writing. Achievement: Top 15 Finalist — Aprotech Fair 2026 Essay Competition.',
    role: 'UI/UX & Research Analyst',
    organization: 'Essay Division - SEARCH Telkom University',
    techStack: ['UI/UX Design', 'User Flow', 'Benchmarking', 'Biotechnology', 'Circular Economy', 'Scientific Writing'],
    category: 'Scientific Paper',
    image: '/assets/aistudio/image_8fff8bb1.png',
    status: 'Top 15 Finalist',
    isScientificPaper: true,
    paperAuthors: 'Muhammad Rizi Adrika, Alya Aziza Puteri, Joanna Michelle Tambunan',
    essayUrl: 'https://drive.google.com/drive/folders/1example?usp=sharing',
    features: [
      'Top 15 Finalist — Aprotech Fair 2026 Essay Competition',
      'Developed UI/UX prototype and platform user flow architecture',
      'Conducted national & international benchmarking to identify competitive advantages',
      'Mapped structured digital distribution platform for cosmetic active ingredients',
      'Comprehensive research, competitive advantage analysis, and scientific writing',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-lo-kaspersky',
    role: 'Liaison Officer',
    organization: 'Telkom University x Kaspersky',
    period: 'Oct 2026',
    responsibilities: [
      'Served as a Liaison Officer for HackNusa Hackathon, acting as a communication bridge between participants and the organizing committee',
      'Guided participants throughout the competition, communicated updates, schedules, and important information',
      'Responded to inquiries, coordinated participant needs, and assisted in resolving issues to ensure a smooth and organized hackathon experience',
      'Collaborated with Telkom University and Kaspersky committees to ensure seamless event coordination',
    ],
    skillsUsed: ['Liaison Officer', 'Event Coordination', 'Communication', 'Problem Solving', 'Hackathon'],
  },
  {
    id: 'exp-0',
    role: 'Backend Development',
    organization: 'Advanced Software Engineer Lab',
    period: 'July 2026 - Now',
    responsibilities: [
      'Engineered backend RESTful API services and database models for laboratory projects (including the CARES Campus Facility Management Platform) using Node.js, Express, and PostgreSQL',
      'Researched backend software architecture standards, microservices design patterns, and database query optimization',
      'Collaborated with lab members on API testing, documentation, and code reviews in an agile research environment',
    ],
    skillsUsed: ['Backend Development', 'Node.js', 'Express.js', 'PostgreSQL', 'REST API', 'Software Lab'],
  },
  {
    id: 'exp-1',
    role: 'Staff Ahli Divisi Akademik',
    organization: 'Himpunan Mahasiswa Teknologi Informasi',
    period: 'March 2026 - Present',
    responsibilities: [
      'Organized academic programs and peer tutoring workshops for IT students',
      'Coordinated educational activities to helping students through study group for exam preperations',
      'Assisted internal administration, schedule tracking, and academic documentation',
    ],
    skillsUsed: ['Leadership', 'Event Coordination', 'Academic Planning', 'Documentation'],
  },
  {
    id: 'exp-2',
    role: 'Secretary and Treasurer',
    organization: 'Seminar Mahasiswa Teknologi Informasi',
    period: 'May 2026 - Present',
    responsibilities: [
      'Managed formal documentation, meeting minutes, and event proposals',
      'Handled financial administration, budgeting, and sponsorship expenditure logs',
      'Coordinated inter-committee communications to ensure seamless seminar execution',
    ],
    skillsUsed: ['Financial Administration', 'Budgeting', 'Public Speaking', 'Systematic Records'],
  },
  {
    id: 'exp-3',
    role: 'Keyboard Player',
    organization: 'PMK Telkom University',
    period: 'May 2026 - Present',
    responsibilities: [
      'Worship keyboard player for weekly services and campus fellowship events',
      'Collaborated with music team members on song arrangements and sound checks',
      'Prepared stage technical setups and musical flow for university gatherings',
    ],
    skillsUsed: ['Musical Performance', 'Team Collaboration', 'Preparation & Punctuality'],
  },
  {
    id: 'exp-4',
    role: 'Member of Club Search : Essay Division',
    organization: 'SEARCH TELKOM UNIVERSITY',
    period: 'Dec 2025 - Present',
    responsibilities: [
      'Learn techniques for Scientific Paper and popular essay writing',
      'Conduct data research and problem validation for writing materials',
      'Dissect the structure of winning essays from national/international competitions',
      'Simulate idea presentations to prepare for jury Q&A sessions',
    ],
    skillsUsed: ['Scientific Writing', 'Essay Writing', 'Research', 'Problem Validation', 'Critical Thinking', 'Presentation'],
  },
  {
    id: 'exp-5',
    role: 'Education Mentor',
    organization: 'BMMK Telkom University',
    period: 'Okt 2025 - Mei 2026',
    responsibilities: [
      'Guided, led, and connected mentees under the auspices of the BPA (Badan Penanggulangan Akademik)',
      'Mentored participants through academic adaptation, peer discussions, and collaborative activities',
      'Facilitated constructive guidance and ongoing support throughout the mentoring program',
    ],
    skillsUsed: ['Mentoring', 'Leadership', 'Academic Guidance', 'Communication', 'Teamwork'],
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google AI Professional Certificate',
    issuer: 'Coursera (Google)',
    date: 'August 2026',
    recipient: 'Joanna Michelle Tambunan',
    image: googleAiCertImg,
    topics: [
      'Artificial Intelligence (AI)',
      'Generative AI',
      'Prompt Engineering',
      'AI for Data Analysis',
      'AI for App Building',
      'Research & Insights',
    ],
    courses: [
      'AI Fundamentals',
      'AI for Brainstorming and Planning',
      'AI for Research and Insights',
      'AI for Writing and Communicating',
      'AI for Content Creation',
      'AI for Data Analysis',
      'AI for App Building',
      'AI for App Deployment',
    ],
    credentialId: 'VR8W89CWXC45',
    credentialUrl: 'https://coursera.org/share/fc60274fa1ddb54b1e0950488bb6645c',
  },
  {
    id: 'cert-2',
    title: 'Google Data Analysis with Python',
    issuer: 'Coursera (Google)',
    date: 'July 2026',
    recipient: 'Joanna Michelle Tambunan',
    image: courseraCertImg,
    topics: ['Python', 'SQL', 'Data Cleaning', 'Data Visualization', 'Exploratory Data Analysis', 'Dashboard Development'],
    courses: [
      'Hello, Python!',
      'Functions and Conditional Statements',
      'Loops and Strings',
      'Data Structures in Python',
      'Explore Raw Data',
      'Clean Your Data',
    ],
    credentialId: '3TK9EE4VYH61',
    credentialUrl: 'https://coursera.org/verify/specialization/3TK9EE4VYH61',
  },
];

export const LANGUAGES_DATA: LanguageItem[] = [
  {
    name: 'Indonesian',
    proficiency: 'Native',
    percentage: 100,
    details: 'Native fluency in formal and conversational communication',
    flagCode: '🇮🇩',
  },
  {
    name: 'English',
    proficiency: 'Fluent',
    percentage: 90,
    details: 'Fluent in professional, academic, and technical written & spoken English',
    flagCode: '🇺🇸',
  },

];

