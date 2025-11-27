// Hero.jsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Mail, ChevronDown } from 'lucide-react';

// Smooth scroll utility
const handleScrollTo = (targetId, offset = 90) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

// Framer motion variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Wave drawing function
const drawWave = (ctx, canvas, time, color, amplitude, frequency, offset) => {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height);
  ctx.lineTo(0, canvas.height * 0.5 + Math.sin(0 * frequency + time) * amplitude + offset);

  for (let x = 0; x < canvas.width; x += 10) {
    const y = canvas.height * 0.5 + Math.sin(x * frequency + time) * amplitude + offset;
    ctx.lineTo(x, y);
  }

  ctx.lineTo(canvas.width, canvas.height);
  ctx.lineTo(0, canvas.height);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const toRotate = ["Hi, I'm KIDIST HAILEMICHAEL", "Full Stack Developer", "Problem Solver"];
  const spotlightRef = useRef(null);
  const canvasRef = useRef(null);

  // Typing effect
  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    let nextSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      nextSpeed = 2000;
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      nextSpeed = 150;
    }

    setTypingSpeed(nextSpeed);
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setTimeout(tick, typingSpeed);
    return () => clearTimeout(ticker);
  }, [tick, typingSpeed]);

  // Wave background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let frameId;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animateWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawWave(ctx, canvas, time * 0.05, 'rgba(126, 34, 206, 0.1)', 30, 0.005, 100); 
      drawWave(ctx, canvas, time * 0.03, 'rgba(168, 85, 247, 0.05)', 40, 0.003, 150); 

      time += 1;
      frameId = requestAnimationFrame(animateWave);
    };

    animateWave();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Spotlight effect
  const handleMouseMove = (e) => {
    if (!spotlightRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.setProperty('--x', `${x}px`);
    spotlightRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <motion.section
      id="hero"
      className="min-h-screen pt-24 pb-16 md:pt-32 flex items-center mt-18 justify-center bg-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      {/* Canvas for Wave Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80 z-0"></canvas>

      <div
        ref={spotlightRef}
        id="hero-spotlight"
        className="w-full h-full absolute inset-0 text-center transition duration-500 ease-out"
        onMouseMove={handleMouseMove}
        style={{
          '--x': '50%',
          '--y': '50%',
          backgroundImage: 'radial-gradient(circle at var(--x) var(--y), rgba(167, 139, 250, 0.15) 0%, transparent 40%)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight h-[1.2em] md:h-[1.5em] font-manrope">
            {' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
              {text}
            </span>
            <span className="text-violet-500 opacity-70 animate-pulse">|</span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-inter">
            Passionate about crafting robust and beautiful digital experiences. I turn complex problems into elegant solutions through clean code and modern architecture.
          </p>

          <div className="flex flex-col mt-10 sm:flex-row gap-4 justify-center">
            <div
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-full font-semibold transition-all shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
              role="button"
            >
              View Projects <Code2 size={20} />
            </div>
            <div
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:border-violet-400 cursor-pointer flex items-center justify-center gap-2"
              role="button"
            >
              Get In Touch <Mail size={20} />
            </div>
          </div>

          

          {/* Scroll Indicator */}
          <div className="absolute  top-90 left-1/2 transform -translate-x-1/2">
            <div onClick={() => handleScrollTo('about')} className="cursor-pointer animate-bounce" role="link">
              <ChevronDown size={32} className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
