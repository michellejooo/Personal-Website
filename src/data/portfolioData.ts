import { Skill, SkillGroup, Project, AwardItem, ExperienceItem, Certification, LanguageItem, EducationItem } from '../types';
import profileAvatarImg from '../assets/images/regenerated_image_1786096085071.jpg';
import profileAvatarFallbackImg from '../assets/images/joanna_avatar_1785572098877.jpg';
import projectPortfolioImg from '../assets/images/website_profile.png';
import projectTravelyukImg from '../assets/images/project_travelyuk_1785572114052.jpg';
import projectEchoImg from '../assets/images/project_echo_1785572129795.jpg';
import projectDataAnalysisImg from '../assets/images/project_data_analysis_1785683601973.jpg';
import beaquaPreviewImg from '../assets/images/beaqua_system_preview_1788883584017.jpg';
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
    { label: 'Featured Projects', value: '5', sub: 'Web, Data & Research' },
    { label: 'Awards & Honors', value: '1', sub: 'TOP 15 Finalist IPB' },
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
    id: 'travelyuk',
    title: 'Travelyuk',
    description:
      'A full-stack travel booking platform inspired by modern travel applications. Users can search destinations, book tickets, manage reservations, and explore travel promotions.',
    longDescription:
      'Travelyuk simplifies travel planning through real-time seat availability searches, automated ticket generation, interactive maps, and PostgreSQL reservation management.',
    techStack: ['Next.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Full Stack',
    image: projectTravelyukImg,
    status: 'Completed',
    githubUrl: 'https://github.com/joanna-dev/travelyuk-booking',
    liveUrl: '#',
    features: [
      'Destination search with dynamic filters & pricing',
      'Real-time seat selection & booking flow',
      'Express.js RESTful API & PostgreSQL relational DB',
      'Booking history & downloadable PDF boarding passes',
    ],
  },
  {
    id: 'echo',
    title: 'Echo',
    description:
      'A modern music streaming platform inspired by Spotify and Apple Music, featuring playlist management, music discovery, and a responsive user interface.',
    longDescription:
      'Echo is a high-fidelity web music streaming player with custom audio spectrum visualizations, personalized playlist creation, and seamless audio playback control.',
    techStack: ['Next.js', 'React', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'Full Stack',
    image: projectEchoImg,
    status: 'Featured',
    githubUrl: 'https://github.com/joanna-dev/echo-music-streaming',
    liveUrl: '#',
    features: [
      'Web Audio API player with play/pause/seek controls',
      'Interactive canvas audio waveform visualizer',
      'Custom playlist manager & favorite song bookmarks',
      'Express & PostgreSQL backend for track metadata',
    ],
  },
  {
    id: 'data-analysis',
    title: 'Data Analysis & Insights Dashboard',
    description:
      'An interactive data analytics and visualization application for exploratory data analysis, dataset cleaning, statistical KPI tracking, and automated reporting.',
    longDescription:
      'A comprehensive data analytics platform leveraging Python, Pandas, SQL, and interactive charts. Enables automated dataset cleaning, KPI metrics monitoring, cohort visualization, and custom analytical report exports.',
    techStack: ['Python', 'Pandas', 'SQL', 'Power BI', 'React', 'Recharts'],
    category: 'Data Analytics',
    image: projectDataAnalysisImg,
    status: 'Live App',
    githubUrl: 'https://github.com/joanna-dev/data-analysis-insights',
    liveUrl: 'https://ai.studio/apps/2843d2da-a43f-4f89-84b7-864f84ee6499',
    features: [
      'Exploratory Data Analysis (EDA) & automated data cleaning pipelines',
      'Interactive KPI analytics dashboard with dynamic date & trend filters',
      'Exportable statistical summaries, correlation matrices & distribution charts',
      'Seamless integration with Python data processing engines & SQL queries',
    ],
  },
  {
    id: 'beaqua-system',
    title:
      'BEAQUA SYSTEM: INTEGRASI BIOTEKNOLOGI DAN PLATFORM DISTRIBUSI DALAM VALORISASI AQUATIC BY-PRODUCTS UNTUK PENGEMBANGAN BAHAN AKTIF KOSMETIK BERKELANJUTAN',
    description:
      'As part of the BeAqua System team, I contributed to developing the UI/UX prototype, conducting national and international benchmarking of similar projects, and identifying BeAqua’s competitive advantages through research and analysis.',
    longDescription:
      'As part of the BeAqua System team, I contributed to developing the UI/UX prototype, conducting national and international benchmarking of similar projects, and identifying BeAqua’s competitive advantages through research and analysis.',
    techStack: ['UI/UX Flow', 'Fishbone Analysis', 'Biotechnology', 'Traceability', 'Circular Economy'],
    category: 'UI/UX',
    image: beaquaPreviewImg,
    status: 'TOP 15 Finalist ESSAY APROTECH.FAIR IPB Competition',
    liveUrl: '#',
    essayUrl: 'https://drive.google.com/drive/folders/1example?usp=sharing',
    features: [
      'Developing the UI/UX prototype and user flow architecture',
      'Conducting national and international benchmarking of similar projects',
      'Identifying BeAqua’s competitive advantages through research and analysis',
    ],
  },
];

export const AWARDS_DATA: AwardItem[] = [
  {
    id: 'aprotech-fair-2026',
    title: 'Aprotech Fair 2026 Essay Competition',
    rank: 'TOP 15 Finalist ESSAY APROTECH.FAIR IPB Competition',
    competition: 'Aprotech Fair 2026 Essay Competition',
    year: '2026',
    organizer: 'IPB University',
    projectName:
      'BEAQUA SYSTEM: INTEGRASI BIOTEKNOLOGI DAN PLATFORM DISTRIBUSI DALAM VALORISASI AQUATIC BY-PRODUCTS UNTUK PENGEMBANGAN BAHAN AKTIF KOSMETIK BERKELANJUTAN',
    description:
      'As part of the BeAqua System team, I contributed to developing the UI/UX prototype, conducting national and international benchmarking of similar projects, and identifying BeAqua’s competitive advantages through research and analysis.',
    contributions: [
      'UI/UX Prototype: Developing the UI/UX prototype and platform user flow architecture.',
      'Benchmarking: Conducting national and international benchmarking of similar projects.',
      'Research & Analysis: Identifying BeAqua’s competitive advantages through research and analysis.',
    ],
    tags: [
      'Biotechnology',
      'UI/UX Flow',
      'Fishbone Analysis',
      'Circular Economy',
    ],
    essayUrl: 'https://drive.google.com/drive/folders/1example?usp=sharing',
    image: beaquaPreviewImg,
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-0',
    role: 'Backend Development',
    organization: 'Advanced Software Engineer Lab',
    period: 'July 2026 - Now',
    responsibilities: [
      'Engineered backend RESTful API services and database models for laboratory projects using Node.js, Express, and PostgreSQL',
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
    role: 'Secretary',
    organization: 'Information Technology Student Seminar',
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
    organization: 'Christian Fellowship (PMK Telkom University)',
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
    description:
      'A platform for students who want to express critical and solution-oriented ideas through writing. The main focus is on training research skills and constructing strong, systematic arguments',
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
    description:
      'As a mentor, I participated in a large-scale mentoring program, which required all mentors and mentees from BMMK Telkom University to participate under the auspices of the BPA (Badan Penanggulangan Akademik). Here, I guided, led, and connected mentees.',
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

