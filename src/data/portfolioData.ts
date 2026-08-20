import { Skill, Project, ExperienceItem, Certification, LanguageItem } from '../types';

export const PROFILE_DATA = {
  name: 'Joanna',
  title: 'Information Technology Student',
  subTitle: 'Joanna | Web Dev Enthusiast',
  roles: ['Web Dev Enthusiast', 'AI Engineer', 'System Analyst',],
  introduction:
    'Information Technology Student @ Telkom University, specializing in Web Development, Data Analysis, AI, and System Analysis. Highly motivated to learn new things, develop new skills, and take on new challenges. Strong in leadership, communication, teamwork, and problem-solving, with the ability to adapt to different environments and contribute effectively both independently and as part of a team. Fluently in English and Mandarin',
  technologyTags: [
    'Web Development',
    'AI Engineer',
    'Fluent in English & Mandarin',
    'System Analysis',
  ],
  gpa: '3.16 / 4.00',
  stats: [
    { label: 'Featured Projects', value: '4', sub: 'Web, Data & Full-stack' },
    { label: 'Certifications', value: '1', sub: 'Google Data Analysis with Python' },
    { label: 'Languages (Fluent)', value: '2', sub: 'English & Mandarin Fluent' },
  ],
  aboutText:
    'I am an Information Technology student at Telkom University actively developing my skills in Web Development, Data Analytics, System Analysis, and AI. As a Web Dev & Data Analyst Enthusiast, I am enthusiastic about writing clean code, analyzing datasets, and designing intuitive user experiences while continuously learning modern industry tools.',
  contact: {
    email: 'joannatambunan496@gmail.com',
    location: 'Bandung, Indonesia',
    linkedin: 'https://www.linkedin.com/in/joannamt',
    github: 'https://github.com/joanna-dev',
    instagram: 'https://instagram.com/joannamt_',
  },
  spotifyEmbedUrl:
    'https://open.spotify.com/embed/playlist/30WSpzKASlT69XakEIBCo9?utm_source=generator&si=db09c08e926543dc',
  closingQuote: 'Building technology with purpose, learning without limits.',
};

export const SKILLS_DATA: Skill[] = [
  { name: 'UX Researcher', category: 'Technical & Data', level: 85, iconName: 'Search', description: 'User research, interviewing, usability testing, persona mapping, and user experience analysis' },
  { name: 'Python (Basic Programming)', category: 'Technical & Data', level: 82, iconName: 'Terminal', description: 'Fundamental Python logic, syntax, data manipulation scripts, and basic programming concepts' },
  { name: 'Data Analyst', category: 'Technical & Data', level: 82, iconName: 'BarChart2', description: 'Data cleaning, exploratory data analysis, trend identification, and visualization' },
  { name: 'Microsoft Excel', category: 'Technical & Data', level: 85, iconName: 'Sheet', description: 'Formulas, lookup functions (VLOOKUP/XLOOKUP), pivot tables, and spreadsheet analysis' },
  { name: 'Microsoft Word', category: 'Technical & Data', level: 90, iconName: 'FileText', description: 'Formal report formatting, documentation structuring, and academic document creation' },

  { name: 'Indonesian (Native)', category: 'Languages & Fluency', level: 100, iconName: 'Globe', description: 'Native fluency in formal, academic, and conversational communication' },
  { name: 'English (Fluent)', category: 'Languages & Fluency', level: 90, iconName: 'Globe', description: 'Fluent in professional, academic, and technical written & spoken English' },
  { name: 'Mandarin (Fluent)', category: 'Languages & Fluency', level: 85, iconName: 'Globe', description: 'Fluent in business communication, technical discourse, and everyday conversation' },

  { name: 'Communication', category: 'Communication & Leadership', level: 90, iconName: 'Share2', description: 'Effective verbal, written, and cross-functional interpersonal communication' },
  { name: 'Public Speaking', category: 'Communication & Leadership', level: 85, iconName: 'MessageSquare', description: 'Delivering engaging speeches, academic seminars, and group presentations with confidence' },
  { name: 'Leadership', category: 'Communication & Leadership', level: 85, iconName: 'Workflow', description: 'Guiding team initiatives, organizing organizational committees, and managing project milestones' },
  { name: 'Team Work', category: 'Communication & Leadership', level: 90, iconName: 'UserCheck', description: 'Collaborating smoothly in team environments, active listening, and collective goal execution' },

  { name: 'Problem Solving', category: 'Professional & Creative', level: 88, iconName: 'Brain', description: 'Analytical thinking, troubleshooting complex issues, and designing structured solutions' },
  { name: 'Proposal Writing', category: 'Professional & Creative', level: 85, iconName: 'FileCheck', description: 'Drafting formal event proposals, academic sponsorship plans, and project documentations' },
  { name: 'Design Presentation', category: 'Professional & Creative', level: 85, iconName: 'Palette', description: 'Designing visually engaging slide decks, pitch layouts, and structured presentation materials' },
  { name: 'Keyboardist', category: 'Professional & Creative', level: 88, iconName: 'Activity', description: 'Live keyboard musical performance, music arrangement, and team harmony' },
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
    image: '/src/assets/images/project_portfolio_1785572143262.jpg',
    status: 'Live / Active',
    githubUrl: 'https://github.com/joanna-dev/joanna-portfolio',
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
    image: '/src/assets/images/project_travelyuk_1785572114052.jpg',
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
    image: '/src/assets/images/project_echo_1785572129795.jpg',
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
    image: '/src/assets/images/project_data_analysis_1785683601973.jpg',
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
    role: 'Academic Staff',
    organization: 'Information Technology Student Association',
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
    period: '2026',
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
    organization: 'SEARCH TELKOM UNIVERSITY · Part-time',
    period: 'Dec 2025 - Present · 9 mos',
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
    role: 'Mentor',
    organization: 'BMMK Telkom University · Paruh Waktu',
    period: 'Okt 2025 - Des 2025 · 3 bln',
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
    id: 'cert-2',
    title: 'Google Data Analysis with\nPython',
    issuer: 'Coursera (Google)',
    date: '2024',
    topics: ['Python', 'SQL', 'Data Cleaning', 'Data Visualization', 'Exploratory Data Analysis', 'Dashboard Development'],
    credentialId: '3e0802804ae8efbdd65fdfdf44988e9b',
    credentialUrl: 'https://coursera.org/share/3e0802804ae8efbdd65fdfdf44988e9b',
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
  {
    name: 'Mandarin',
    proficiency: 'Fluent',
    percentage: 85,
    details: 'Fluent in business communication, technical discourse, and everyday conversation',
    flagCode: '🇨🇳',
  },
];

