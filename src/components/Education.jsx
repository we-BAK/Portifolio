import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Briefcase, BookOpen, CalendarCheck } from 'lucide-react';

const EDUCATION_HISTORY = [
  {
    id: 1,
    period: '2020 - 2025',
    role: 'B.S. in Computer Science',
    school: 'Infolink University College',
    description:
      'Graduated with a 3.8 GPA. Focused on Data Structures, Algorithms, and Software Engineering principles.',
    icon: <GraduationCap size={20} />,
  },
  {
    id: 2,
    period: '2023',
    role: 'Full Stack Development Bootcamp',
    school: 'Evangadi (Self-Paced)',
    description:
      'Intensive training in Fullstack Development, focusing on building scalable, production-ready applications.',
    icon: <Briefcase size={20} />,
  },
  {
    id: 3,
    period: '2024 - Present',
    role: 'Ongoing Tech Certifications',
    school: 'Online Courses (Tensorflow)',
    description:
    'Currently learning Agentic AI concepts, including autonomous agents, reasoning workflows, and building intelligent systems capable of decision-making and task automation.',    icon: <BookOpen size={20} />,
  },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.4, duration: 1, delay: custom * 0.3 },
  }),
};

const Education = () => {
  const sectionRef = useRef(null);

  // 1. Use useScroll to track the scroll progress of the entire section.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // Start tracking when the section's start is 80% of the way down the viewport,
    // and stop when the section's end is 20% of the way up the viewport.
    // This defines the range over which the line grows.
    offset: ['start 0.8', 'end 0.2'],
  });

  // 2. Use useTransform to map the scroll progress (0 to 1) to the line's scaleY (0 to 1).
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" className="py-20 bg-gray-50 relative" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-manrope">
          My Learning Journey
        </h2>

        <div className="relative">
          {/* Static Gray Timeline Track (Full Height) */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-300 hidden md:block transform -translate-x-1/2">
            {/* Animated Violet Line (Scales from top) */}
            <motion.div
              className="absolute top-0 w-full h-full bg-violet-600 origin-top"
              style={{ scaleY }}
            />
          </div>

          {EDUCATION_HISTORY.map((item, index) => (
            <motion.div
              key={item.id}
              className={`flex items-center w-full my-8 ${
                index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
              initial="offscreen"
              whileInView="onscreen"
              custom={index}
              variants={cardVariants}
              // Set viewport trigger to ensure a smooth, sequential entry for each card
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Timeline Content (Desktop) */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-10 text-right' : 'md:pl-10 text-left'}`}>
                <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200 hover:shadow-violet-200 transition-shadow hidden md:block">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-sm font-medium text-gray-600 font-inter">
                      <CalendarCheck size={16} className="inline mr-1 text-violet-500" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 font-manrope">{item.role}</h3>
                  <h4 className="text-violet-600 font-medium mb-3 font-inter">{item.school}</h4>
                  <p className="text-gray-500 text-sm font-inter">{item.description}</p>
                </div>
              </div>

              {/* Timeline Dot (Desktop) */}
              <div className="absolute left-1/2 w-10 h-10 rounded-full bg-white border-4 border-violet-600 flex items-center justify-center text-violet-600 transform -translate-x-1/2 z-10 shadow-lg hidden md:flex">
                {item.icon}
              </div>

              {/* Mobile Layout */}
              <div className="absolute left-0 w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white z-10 shadow-lg md:hidden">
                {item.icon}
              </div>
              <div className="md:hidden w-full ml-10">
                <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-200 hover:shadow-violet-200 transition-shadow">
                  <span className="text-sm font-medium text-gray-600 mb-1 block font-inter">
                    <CalendarCheck size={14} className="inline mr-1 text-violet-500" />
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 font-manrope">{item.role}</h3>
                  <h4 className="text-violet-600 font-medium mb-2 font-inter">{item.school}</h4>
                  <p className="text-gray-500 text-sm font-inter">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;