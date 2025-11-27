import { Globe, Database, Cpu, Code2, GraduationCap } from "lucide-react";

export const CALENDLY_URL = "https://calendly.com/kidy1924";
import ALP from '../assets/Autistic.png'
import KL from '../assets/KidsLearn.png'
import WaveExplorer from '../assets/Wave.png'

export const SKILLS = [
  {
    name: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    items: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Responsive UI"],
  },
  {
    name: "Backend",
    icon: <Database className="w-6 h-6" />,
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "SQL Basics"],
  },
  {
    name: "Computer Science",
    icon: <Cpu className="w-6 h-6" />,
    items: ["Data Structures", "Algorithms", "OOP Principles", "Database Design", "Git"],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Autistic Learning Platform",
    description:
      "A platform designed to connect parents with therapists, manage student profiles, assign therapy tasks, and support communication. Built with a full-stack architecture and integrates Supabase for authentication and database management.",
    tags: ["React", "Supabase", "Full Stack", "Node.js"],
    link: "#",
    github: "#",
    image: ALP,
  },
  {
    id: 2,
    title: "KidsLearn Platform",
    description:
      "An educational platform designed to teach frontend web development skills to children aged 7–14. Includes interactive lessons, coding exercises, and project-based learning to make programming engaging and accessible for young learners.",
    tags: ["React", "HTML", "CSS", "JavaScript", "Frontend"],
    link: "#",
    github: "#",
    image: KL,
  },
  
  
  {
    id: 3,
    title: "Wave Explorer",
    description:
      "A React-based educational platform that teaches users about waves. Features sections on transverse and longitudinal waves, interactive quizzes, and an About page to explain wave concepts in an engaging, user-friendly way.",
    tags: ["React", "JavaScript", "Tailwind", "Education"],
    link: "#",
    github: "#",
    image: WaveExplorer, // make sure to import your image at the top
  },
  
];

export const EDUCATION_HISTORY = [
  {
    id: 1,
    role: "Independent Web Development Study",
    school: "Evangadi Materials & Online Resources",
    period: "Post-Graduation",
    description:
      "Studied the Evangadi Bootcamp curriculum independently. Built MERN projects and used W3Schools + YouTube for React best practices.",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: 2,
    role: "B.Sc. in Computer Science",
    school: "University of Technology",
    period: "Graduated 2024",
    description:
      "Graduated with a strong 4.00 GPA. Learned Data Structures, Algorithms, DB Systems, and Software Engineering principles.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
];
