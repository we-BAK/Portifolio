import React from 'react';
import { motion } from 'framer-motion';
import  kid from '../assets/kid-r.png'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: 'spring', bounce: 0.4, duration: 1.0 } },
};

const PROFILE_IMAGE_PLACEHOLDER = "https://placehold.co/400x500/A855F7/ffffff?text=KIDIST+H";

const AboutMe = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-50 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Who I Am
        </motion.h2>

        <div className="flex flex-col md:flex-row-reverse items-center gap-16">

          {/* Image */}
          <motion.div
            className="md:w-1/2 relative flex justify-center md:justify-end"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              offscreen: { x: 50, opacity: 0 },
              onscreen: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            <div className="overflow-hidden relative z-10 shadow-2xl shadow-violet-500/30 border-8 border-white p-1 bg-white rounded-xl">
              <img
                src={kid}
                alt="Professional Headshot"
                className="w-70 h-80 object-cover rounded-lg"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              offscreen: { x: -50, opacity: 0 },
              onscreen: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.2 } }
            }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
            I am Kidist, a recent Computer Science graduate with a strong academic foundation and a deep passion for modern web development            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Beyond my degree, I’ve built my skills as a full-stack developer, learning through intensive bootcamps and hands-on projects. I’m adept at transforming complex system requirements into clean, efficient, and user-focused applications.            </p>

            
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
