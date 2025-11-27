import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Layout } from 'lucide-react';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.3, duration: 1 } },
};

// Skills Data
const SKILLS = [
  { id: 1, name: 'JavaScript', level: 'Advanced', icon: <Code size={24} /> },
  { id: 2, name: 'React.js', level: 'Advanced', icon: <Layout size={24} /> },
  { id: 3, name: 'Node.js', level: 'Intermediate', icon: <Cpu size={24} /> },
  { id: 4, name: 'SQL / MySQL', level: 'Intermediate', icon: <Database size={24} /> },
  { id: 5, name: 'HTML / CSS', level: 'Advanced', icon: <Code size={24} /> },
  { id: 6, name: 'Tailwind CSS', level: 'Advanced', icon: <Layout size={24} /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12 text-center font-manrope"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SKILLS.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-violet-200 transition-shadow flex flex-col items-center text-center"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="text-violet-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 font-manrope">{skill.name}</h3>
              <p className="text-gray-500 mt-1 text-sm font-inter">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
