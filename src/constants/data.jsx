import ALP from '../assets/Autistic.png';
import KL from '../assets/KidsLearn.png';
import water from '../assets/water.png';
import parishSvg from '../assets/parish-management.png';
import serverSvg from '../assets/server-database.png';

import ibmCert from '../assets/certificates/ibm-skillsbuild-ai-fundamentals.png';
import fccCert from '../assets/certificates/freecodecamp-scientific-computing-python.png';
import hrCert from '../assets/certificates/hackerrank-problem-solving-intermediate.png';
import dockerCert from '../assets/certificates/simplilearn-docker.png';
import volunteerCert from '../assets/certificates/community-blood-donation-recognition.svg';

export const PROFILE = {
  name: 'Kidist Hailemichael',
  firstName: 'Kidist',
  title: 'Software Developer | Web Developer',
  location: 'Hawassa, Ethiopia',
  phone: '+251 984 180 404',
  phoneHref: 'tel:+251984180404',
  email: 'hailemichaelkidist@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kidist-hailemichael-713316331/',
  github: 'https://github.com/we-BAK',
  leetcode: 'https://leetcode.com/u/we-bak',
  calendly: 'https://calendly.com/kidy1924',
  cvPath: '/assets/Kidist_Hailemichael_Master_CV.pdf',
  headline: 'Building scalable, database-driven web applications rooted in real user requirements.',
  philosophy: {
    quote: 'Learn to build. Build to serve. Serve to make a difference.',
    statement:
      'I believe technology should ultimately serve people. My goal is to keep learning and use what I build to solve meaningful problems and contribute to a better world.',
  },
  summary:
    'Full-stack and web developer with professional and project experience building responsive, database-driven web applications using React, Node.js, ASP.NET MVC, Supabase, and MySQL. Passionate about engineering clean architectures, RESTful APIs, and systems that solve real problems.',
};

export const STATS = [
  { value: '3.82', label: 'Cumulative GPA / 4.00', sub: 'High Distinction' },
  { value: '78%', label: 'National Exit Exam', sub: 'Excellence Score' },
  { value: '5+', label: 'Shipped Web Applications', sub: 'Production & Enterprise' },
  { value: '2+', label: 'Years CS Mentoring', sub: 'Elementary to University' },
];

export const HIGHLIGHTS = [
  {
    icon: 'Terminal',
    title: 'Full-Stack Architecture',
    desc: 'React frontends paired with Node.js/Express or ASP.NET MVC backends and secure REST APIs.',
  },
  {
    icon: 'Database',
    title: 'Relational Database Design',
    desc: 'Normalized schema modeling, complex SQL/PL-SQL queries, transactions, and Supabase / MySQL integration.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Role-Based Auth (RBAC)',
    desc: 'Granular authorization flows protecting multi-tenant dashboards, patient portals, and administrator tools.',
  },
  {
    icon: 'Users',
    title: 'User-First Requirement Gathering',
    desc: 'Interviewing stakeholders directly (clinicians, operators, educators) before writing a single line of code.',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Junior Software Developer',
    org: 'Next Generation Computing Solutions',
    period: 'Apr 2026 – Present',
    type: 'Full-Time Employment',
    location: 'Hawassa, Ethiopia',
    points: [
      'Develop and maintain modern, responsive web applications using React, Node.js, and modern JavaScript (ES6+).',
      'Build and integrate robust RESTful APIs and database-driven application features.',
      'Collaborate actively with cross-functional development teams following Agile/Scrum workflows and Git version control.',
      'Troubleshoot software bugs, perform root-cause analysis, and continuously enhance application performance and usability.',
    ],
    tech: ['React', 'Node.js', 'JavaScript (ES6+)', 'REST APIs', 'Git', 'Agile'],
  },
  {
    id: 2,
    role: 'Software Development Intern (Paid)',
    org: 'Next Generation Computing Solutions',
    period: 'Dec 2025 – Apr 2026',
    type: 'Internship',
    location: 'Hawassa, Ethiopia',
    points: [
      'Assisted in designing and developing responsive web applications using React and Node.js.',
      'Implemented secure REST API integrations, middleware validations, and user authentication features.',
      'Worked closely with MySQL databases, stored data models, and participated in sprint code reviews and debugging sessions.',
    ],
    tech: ['React', 'Node.js', 'MySQL', 'Authentication', 'Code Review'],
  },
  {
    id: 3,
    role: 'Independent Tutor — Computer Science & Academics',
    org: 'Self-Directed / Private Students',
    period: '2+ Years',
    type: 'Tutoring & Mentorship',
    location: 'Hawassa, Ethiopia',
    points: [
      'Tutored programming concepts, OOP, and computer science fundamentals, breaking down abstract logic into structured, approachable steps.',
      'Mentored multiple students across elementary, high school, and university levels in programming and mathematics.',
      'Developed personalized lesson plans, coding exercises, and practice modules tailored to each student’s pace and comprehension gaps.',
    ],
    tech: ['Python', 'C++', 'Data Structures', 'Curriculum Design', 'Mentorship'],
  },
  {
    id: 4,
    role: 'Community Volunteer & Campaign Organizer',
    org: 'Local Community Volunteer Team',
    period: '2024 – 2025',
    type: 'Community Service',
    location: 'Hawassa, Ethiopia',
    points: [
      'Awarded certificate of recognition for organizing and coordinating a major community blood donation campaign.',
      'Led donor outreach, logistical scheduling with medical professionals, and donor registration workflows.',
    ],
    tech: ['Leadership', 'Event Organization', 'Community Outreach'],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science',
    institution: 'Infolink University College',
    location: 'Hawassa, Ethiopia',
    period: 'Apr 2022 – Apr 2026',
    gpa: '3.82 / 4.00',
    exitExam: '78%',
    honors: 'Graduated with High Distinction (GPA 3.82 / 4.00) & 78% Exit Exam Score',
    coursework: [
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
      'Artificial Intelligence',
      'Machine Learning',
      'Computer Networks',
      'Operating Systems',
      'Object-Oriented Programming (OOP)',
      'Web Development',
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Programming Languages',
    description: 'Core languages for systems, backend servers, and web applications',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: 'Code2' },
      { name: 'Python', level: 'Proficient', icon: 'FileCode2' },
      { name: 'C++', level: 'Intermediate', icon: 'Cpu' },
      { name: 'SQL & PL/SQL', level: 'Advanced', icon: 'Database' },
      { name: 'HTML5 & CSS3', level: 'Advanced', icon: 'Layout' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    description: 'Frontend component libraries and backend application runtimes',
    skills: [
      { name: 'React', level: 'Advanced', icon: 'Atom' },
      { name: 'Node.js', level: 'Advanced', icon: 'Server' },
      { name: 'Express.js', level: 'Advanced', icon: 'Layers' },
      { name: 'ASP.NET MVC', level: 'Proficient', icon: 'Workflow' },
      { name: 'Tailwind CSS', level: 'Advanced', icon: 'Palette' },
    ],
  },
  {
    category: 'Databases & Cloud Backend',
    description: 'Relational data modeling, cloud sync, and persistent storage',
    skills: [
      { name: 'MySQL', level: 'Advanced', icon: 'Database' },
      { name: 'Supabase', level: 'Advanced', icon: 'Zap' },
      { name: 'Relational Schema Design', level: 'Advanced', icon: 'Network' },
      { name: 'Stored Procedures & Triggers', level: 'Proficient', icon: 'Terminal' },
      { name: 'PostgreSQL', level: 'Proficient', icon: 'HardDrive' },
    ],
  },
  {
    category: 'Tools & DevOps',
    description: 'Development environments, version control, and containerization',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced', icon: 'GitBranch' },
      { name: 'Ubuntu Linux', level: 'Proficient', icon: 'TerminalSquare' },
      { name: 'Docker', level: 'Certified', icon: 'Boxes' },
      { name: 'Postman', level: 'Advanced', icon: 'Send' },
      { name: 'VS Code', level: 'Expert', icon: 'Monitor' },
    ],
  },
  {
    category: 'Engineering Concepts',
    description: 'Architectural patterns, security standards, and methodologies',
    skills: [
      { name: 'RESTful API Design', level: 'Advanced', icon: 'Share2' },
      { name: 'Auth & Authorization (RBAC)', level: 'Advanced', icon: 'Lock' },
      { name: 'Requirement Analysis', level: 'Advanced', icon: 'ClipboardCheck' },
      { name: 'Object-Oriented Programming (OOP)', level: 'Advanced', icon: 'Box' },
      { name: 'Agile & Scrum Methodologies', level: 'Proficient', icon: 'RefreshCw' },
      { name: 'Responsive & Accessible UI', level: 'Advanced', icon: 'Smartphone' },
    ],
  },
  {
    category: 'AI-Assisted Development',
    description: 'Modern acceleration tools for code reviews and development velocity',
    skills: [
      { name: 'Claude AI', level: 'Proficient', icon: 'Sparkles' },
      { name: 'GitHub Copilot', level: 'Proficient', icon: 'Bot' },
      { name: 'Prompt Engineering for Code', level: 'Proficient', icon: 'Cpu' },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Bright Bridge — Autism Support Platform',
    role: 'Lead Full-Stack Developer',
    period: '2025 – 2026',
    category: 'Healthcare & Full-Stack',
    tagline: 'Bridging parents, therapists, and clinicians with personalized autism care workflows.',
    description:
      'Designed and developed an end-to-end platform connecting parents, therapists, and administrators to streamline autism care coordination. Requirements were gathered directly through interviews with families and clinical practitioners.',
    features: [
      'Role-based authentication with differentiated portals for parents, therapists, and admins.',
      'Interactive dashboards for therapy task assignment and progress milestones.',
      'Clinical approval workflows with real-time feedback logging.',
      'Accessibility-first, high-contrast, responsive UI tailored for diverse users.',
    ],
    tags: ['React', 'Supabase', 'PostgreSQL', 'RBAC Auth', 'Accessibility', 'Tailwind CSS'],
    link: 'https://learning-platform-eight-sandy.vercel.app/',
    github: 'https://github.com/we-BAK/Learning_platform',
    image: ALP,
    badge: 'Featured Full-Stack',
  },
  {
    id: 2,
    title: 'Water Distribution Management System',
    role: 'Full-Stack Developer',
    period: '2025',
    category: 'Logistics & Utilities',
    tagline: 'Streamlining water utility operations from bulk warehouse inventory to last-mile delivery.',
    description:
      'Engineered a comprehensive web application to automate and monitor municipal water distribution logistics. Consulted with active system operators to define requirements, edge cases, and real-time operational workflows before writing code.',
    features: [
      'Real-time inventory and delivery tracking synchronized across dispatchers and operators.',
      'Cloud database with Supabase supporting automated data synchronization.',
      'Role-based access controls for security across warehouse staff, drivers, and supervisors.',
      'Audit log and customer delivery confirmation logging.',
    ],
    tags: ['React', 'Node.js', 'Express', 'Supabase', 'Real-Time Sync', 'RBAC'],
    link: 'https://amesigin.vercel.app/',
    github: 'https://github.com/we-BAK/waterdistributor',
    image: water,
    badge: 'Operations Platform',
  },
  {
    id: 3,
    title: 'Sophia — Spiritual Community Management & Telegram Bot Platform',
    role: 'Full-Stack Developer',
    period: '2026',
    category: 'Enterprise & Database',
    tagline: 'Modular ASP.NET Core & Telegram bot platform with normalized relational schema and concurrency-safe appointment scheduling.',
    description:
      'Architected and implemented Sophia, a spiritual community management platform and multi-layered C# Telegram bot service powered by ASP.NET Core and Entity Framework Core. Engineered specialized handler pipelines, normalized complex relational schemas with custom SQL migration scripts, and enforced state-driven booking workflows with strict concurrency controls.',
    features: [
      'Modular Bot Architecture: Engineered a scalable, multi-layered C# Telegram bot service using ASP.NET Core and Telegram.Bot, decomposing monolithic flows into specialized handlers (TelegramRegistrationHandler, TelegramPriestHandler, TelegramMenuHandler) with robust global namespace aliasing and validation helpers.',
      'Database Migration & Schema Normalization: Refactored complex relational database models using Entity Framework Core and custom SQL scripts—optimizing the Users and SpiritualChildren schemas, deprecating legacy columns in favor of explicit BaptismName structures, and resolving concurrency conflicts.',
      'Appointment Scheduling & Concurrency Control: Designed and implemented a robust scheduling system featuring decoupled PriestAvailableSlot and SpiritualChildAppointment tables, enforcing unique constraints and state workflows (Pending -> Confirmed / Cancelled) to prevent double-booking.',
      'Secure Role-Based & State-Driven Workflows: Developed secure multi-step registration and priest approval loops, managing user state transitions (RegistrationState), automated notification dispatching, and secure credential handling with automated background validation.',
    ],
    tags: ['ASP.NET Core', 'C#', 'Telegram.Bot', 'Entity Framework Core', 'Relational DB', 'RBAC', 'Concurrency Control'],
    link: 'http://sophia.runasp.net/',
    github: 'https://github.com/we-BAK',
    image: parishSvg,
    badge: 'ASP.NET Core & Telegram Bot',
  },
  {
    id: 4,
    title: 'Kids Learn Interactive Platform',
    role: 'Frontend Developer',
    period: '2025',
    category: 'EdTech & Frontend',
    tagline: 'Engaging, accessible educational portal crafted specifically for children aged 7–13.',
    description:
      'Built an interactive, gamified e-learning frontend with reusable component architecture. Designed age-appropriate visual hierarchies, friendly micro-interactions, and clear navigation paths to maximize student engagement and comprehension.',
    features: [
      'Modular lesson viewer for video streaming, guided summaries, and downloadable study notes.',
      'Interactive quiz and progress reward badges designed for young learners.',
      'Optimized responsiveness and accessible typography ensuring ease of use on tablets and phones.',
      'Reusable component library built with React and Tailwind CSS.',
    ],
    tags: ['React', 'Tailwind CSS', 'Accessible Design', 'Component Architecture', 'EdTech'],
    link: 'http://kids-learn-beige.vercel.app',
    github: 'https://github.com/abyssinia12/KidsLearn',
    image: KL,
    badge: 'EdTech UX',
  },
  {
    id: 5,
    title: 'EOTC Youth Ministry Question Management System',
    role: 'Full-Stack Developer',
    period: '2025 – 2026',
    category: 'Full-Stack & Systems',
    tagline: 'Full-stack platform collecting youth questions via Telegram bot with a React review and program curation dashboard.',
    description:
      'Developed a full-stack platform that collects religious questions submitted by youth through a Telegram bot and empowers authorized ministry staff to organize, categorize, review, and curate questions for physical youth program discussions.',
    features: [
      'Telegram Bot Integration: Built a Telegram bot that securely receives youth-submitted questions and stores them in a centralized PostgreSQL database for later review.',
      'Role-Based Access Control (RBAC): Implemented a permission-based access system with Super Admin, Admin, Reviewer, and Program Coordinator roles.',
      'User Management: Developed administrative functionality for creating user accounts, assigning roles, and activating or deactivating accounts.',
      'Question Lifecycle Management: Designed workflows to categorize, group, assign, and track questions through program selection and outcomes, including answered and deferred questions.',
      'Program Management: Built functionality for organizing physical youth programs and associating questions with planned discussions and recorded outcomes.',
      'Database Design: Designed a relational PostgreSQL database using Supabase to manage users, roles, permissions, questions, categories, programs, and audit records.',
      'Secure Backend APIs: Developed RESTful APIs using Node.js and Express.js to handle application operations and enforce permission checks.',
      'Authentication & Security: Integrated Supabase Authentication and account-status checks to control access to protected application features.',
      'Administrative Dashboard: Built a React-based management interface for authorized staff to manage users, questions, categories, and programs.',
      'Deployment: Deployed the backend API to Render and configured environment-based settings for deployment.',
    ],
    tags: ['React', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'Telegram Bot API', 'RBAC', 'Render'],
    link: 'https://youth-question.vercel.app/',
    github: 'https://github.com/we-BAK',
    image: serverSvg,
    badge: 'Full-Stack & Telegram Bot',
  },
];

export const CERTIFICATES = [
  {
    id: 1,
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    badgeText: 'IBM Certified',
    color: '#054ada',
    // Clear false path as requested by user; will be replaced by actual image scan
    folderPath: 'public/certificates/ibm-skillsbuild-ai-fundamentals.png',
    displayPath: '/certificates/ibm-skillsbuild-ai-fundamentals.png',
    previewImage: ibmCert,
    credentialId: 'PLAN-7913EE1DB030',
    verifyUrl: 'https://skills.yourlearning.ibm.com/certificate/PLAN-7913EE1DB030',
    description:
      'Comprehensive curriculum covering AI foundations, Machine Learning & Deep Learning architectures, Natural Language Processing, Computer Vision, AI Ethics, running AI models in IBM Watson Studio, and the future AI landscape.',
    modules: [
      'Intro to Artificial Intelligence',
      'Machine Learning & Deep Learning Concepts',
      'Natural Language Processing (NLP)',
      'Computer Vision & Pattern Recognition',
      'AI Ethics, Governance & Responsibility',
      'Running AI Models with IBM Watson Studio',
      'The Future of AI & Emerging Job Landscape',
    ],
  },
  {
    id: 2,
    title: 'Scientific Computing with Python',
    issuer: 'freeCodeCamp',
    badgeText: 'Algorithmic Mastery',
    color: '#10b981',
    folderPath: 'public/certificates/freecodecamp-scientific-computing-python.png',
    displayPath: '/certificates/freecodecamp-scientific-computing-python.png',
    previewImage: fccCert,
    credentialId: 'kidist21/python-v9',
    verifyUrl: 'https://www.freecodecamp.org/certification/kidist21/python-v9',
    description:
      'Rigorous verification of Python proficiency covering algorithmic problem solving, data structures, arithmetic formatters, time calculators, budget applications, and polygon area calculation systems.',
    modules: [
      'Python Syntax & Data Structures',
      'Algorithmic Complexity & Optimization',
      'Numerical Computation & Formatting',
      'Object-Oriented Programming (OOP) in Python',
      'Computational Problem Solving Projects',
    ],
  },
  {
    id: 3,
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    badgeText: 'Algorithms & Data Structures',
    color: '#00ea64',
    folderPath: 'public/certificates/hackerrank-problem-solving-intermediate.png',
    displayPath: '/certificates/hackerrank-problem-solving-intermediate.png',
    previewImage: hrCert,
    credentialId: '3859380a8945',
    verifyUrl: 'https://www.hackerrank.com/certificates/3859380a8945',
    description:
      'Intermediate problem solving credential evaluating data structures, algorithmic design, space and time complexity, dynamic programming, and edge case handling under timed conditions.',
    modules: [
      'Complex Data Structures (Trees, Graphs, Heaps, Hash Tables)',
      'Algorithmic Optimization & Big-O Efficiency',
      'Greedy Algorithms & Dynamic Programming',
      'Mathematical Edge-Case Validation',
    ],
  },
  {
    id: 4,
    title: 'Docker Training Course',
    issuer: 'Simplilearn SkillUp',
    badgeText: 'Containerization & DevOps',
    color: '#0db7ed',
    folderPath: 'public/certificates/simplilearn-docker.png',
    displayPath: '/certificates/simplilearn-docker.png',
    previewImage: dockerCert,
    credentialId: 'dCZdra3VV6b',
    verifyUrl: 'https://simpli-web.app.link/e/dCZdra3VV6b',
    description:
      'Professional training covering container fundamentals, Dockerfile authoring, multi-stage image builds, volume mapping, network configuration, and microservices containment.',
    modules: [
      'Docker Containers & Daemon Architecture',
      'Dockerfile Best Practices & Multi-Stage Builds',
      'Image Optimization & Registry Operations',
      'Container Storage Volumes & Bridge Networking',
      'Isolated Development & Deployment Environments',
    ],
  },
  {
    id: 5,
    title: 'Certificate of Recognition — Blood Donation Campaign',
    issuer: 'Local Community Volunteer Team',
    badgeText: 'Civic Leadership',
    color: '#f43f5e',
    folderPath: 'public/certificates/community-blood-donation-recognition.png',
    displayPath: '/certificates/community-blood-donation-recognition.png',
    previewImage: volunteerCert,
    credentialId: 'COMM-VOL-BLOOD-2025',
    verifyUrl: '',
    description:
      'Official certificate of recognition honoring leadership and voluntary initiative in organizing, scheduling, and executing a life-saving blood donation campaign in Hawassa, Ethiopia.',
    modules: [
      'Community Donor Outreach & Mobilization',
      'Volunteer Logistics & Medical Team Coordination',
      'Public Health Awareness & Registration',
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: 'Top-Tier Academic Standing',
    desc: 'Graduated with a GPA of 3.82 / 4.00 and an Exit Exam score of 78% in Computer Science at Infolink University College.',
    tag: 'Academic Distinction',
  },
  {
    id: 2,
    title: 'Production Full-Stack Delivery',
    desc: 'Built and deployed multiple production applications addressing healthcare, education, church administration, and municipal utilities.',
    tag: 'Real-World Impact',
  },
  {
    id: 3,
    title: 'Continuous Technical Upskilling',
    desc: 'Active LeetCode practitioner with verified industry certifications across AI (IBM), Python (freeCodeCamp), Algorithms (HackerRank), and DevOps (Simplilearn).',
    tag: 'Lifelong Learner',
  },
  {
    id: 4,
    title: 'Civic Service & Mentorship',
    desc: '2+ years tutoring elementary to university students in CS fundamentals and led a community blood donation campaign recognized by local leaders.',
    tag: 'Community & Mentorship',
  },
];

export const LANGUAGES = [
  { name: 'Amharic', level: 'Native / Bilingual' },
  { name: 'English', level: 'Professional Working Proficiency' },
];
