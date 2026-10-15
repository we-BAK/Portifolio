import { useState, useEffect } from 'react';
import { ArrowDownRight, FileText, Send, MapPin, Github, Linkedin, Mail, Phone, Code2, Database, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { PROFILE, STATS } from '../constants/data';
import { scrollToId } from '../utils/scroll';

const TYPING_PHRASES = [
  'Kidist Hailemichael',
  'Full-Stack Developer',
  'ASP.NET & Node.js Engineer',
  'Database Architect',
  'Passionate Problem Solver',
];

const TERMINAL_FOCUS_PHRASES = [
  'Architecting scalable, database-driven web platforms...',
  'Designing normalized MySQL & PL/SQL schemas...',
  'Building secure REST APIs with multi-tier RBAC...',
  'Delivering clean React interfaces from user requirements...',
  'Living the motto: "Learn to build. Build to serve."',
];

export default function Hero({ onOpenResume }) {
  // Main title typewriter state
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Terminal typewriter state
  const [terminalIndex, setTerminalIndex] = useState(0);
  const [terminalText, setTerminalText] = useState('');
  const [isTerminalDeleting, setIsTerminalDeleting] = useState(false);

  // Main Title Typing Effect
  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  // Terminal Focus Typing Effect
  useEffect(() => {
    const currentFocus = TERMINAL_FOCUS_PHRASES[terminalIndex];
    let timer;

    if (!isTerminalDeleting) {
      if (terminalText.length < currentFocus.length) {
        timer = setTimeout(() => {
          setTerminalText(currentFocus.slice(0, terminalText.length + 1));
        }, 60);
      } else {
        timer = setTimeout(() => {
          setIsTerminalDeleting(true);
        }, 2500);
      }
    } else {
      if (terminalText.length > 0) {
        timer = setTimeout(() => {
          setTerminalText(currentFocus.slice(0, terminalText.length - 1));
        }, 30);
      } else {
        setIsTerminalDeleting(false);
        setTerminalIndex((prev) => (prev + 1) % TERMINAL_FOCUS_PHRASES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [terminalText, isTerminalDeleting, terminalIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Ambient Grid overlay */}
      <div className="absolute inset-0 ambient-grid opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bio & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Name & Dynamic Typing Titles */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-400 font-semibold mb-2">
                FULL-STACK &amp; WEB DEVELOPER · HAWASSA, ETHIOPIA
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] min-h-[1.25em]">
                Hi, I'm{' '}
                <span className="gradient-text-cyan">
                  {displayText}
                </span>
                <span className="inline-block w-1 h-7 sm:h-9 lg:h-11 bg-cyan-400 ml-1.5 animate-pulse align-middle rounded-full" />
              </h1>
            </div>

            {/* Headline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
              {PROFILE.headline}
            </p>

            {/* Micro Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['React', 'Node.js', 'ASP.NET MVC', 'MySQL & PL/SQL', 'Supabase', 'RESTful APIs'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-white/5 text-[11px] font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Location & Contact Snippet */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} className="text-cyan-400" />
                {PROFILE.location}
              </span>
              <span>•</span>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-cyan-300 transition-colors">
                {PROFILE.email}
              </a>
              <span>•</span>
              <a href={PROFILE.phoneHref} className="hover:text-cyan-300 transition-colors">
                {PROFILE.phone}
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                type="button"
                onClick={() => scrollToId('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight size={16} />
              </button>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 font-semibold text-sm transition-all hover:scale-[1.02] cursor-pointer"
              >
                <FileText size={16} className="text-cyan-400" />
                <span>Interactive CV / Print</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToId('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all"
              >
                <Send size={15} />
                <span>Contact</span>
              </button>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PROFILE.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/60 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all font-mono text-xs font-bold"
                title="LeetCode Profile"
              >
                &lt;/&gt;
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2.5 rounded-xl bg-slate-800/60 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="Send Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={PROFILE.phoneHref}
                className="p-2.5 rounded-xl bg-slate-800/60 border border-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all"
                title="Call Kidist"
              >
                <Phone size={18} />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Code Terminal Card (Replaces Portrait Photo) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative w-full max-w-lg">
              
              {/* Glowing Frame Behind Terminal */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000 -z-10" />

              {/* Main Terminal Window */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950/95 border border-slate-700/70 shadow-2xl backdrop-blur-xl">
                
                {/* Terminal Header Bar */}
                <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="text-xs font-mono text-slate-400 ml-2 font-medium flex items-center gap-1.5">
                      <Code2 size={13} className="text-cyan-400" />
                      developer.profile.ts
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>active</span>
                  </div>
                </div>

                {/* Code Terminal Content */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto space-y-2.5">
                  <div className="text-slate-500 italic select-none">
                    // Scalable, database-driven systems
                  </div>

                  <div>
                    <span className="text-indigo-400 font-bold">const</span>{' '}
                    <span className="text-cyan-300 font-bold">engineer</span>{' '}
                    <span className="text-slate-400">=</span>{' '}
                    <span className="text-slate-400">{'{'}</span>
                  </div>

                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-slate-400">name:</span>{' '}
                      <span className="text-emerald-300 font-semibold">'{PROFILE.name}'</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div>
                      <span className="text-slate-400">role:</span>{' '}
                      <span className="text-cyan-300">'{PROFILE.title}'</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div>
                      <span className="text-slate-400">location:</span>{' '}
                      <span className="text-slate-300">'{PROFILE.location}'</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div>
                      <span className="text-slate-400">education:</span>{' '}
                      <span className="text-amber-300">'B.Sc. Computer Science (3.82 GPA)'</span>
                      <span className="text-slate-400">,</span>
                    </div>

                    <div>
                      <span className="text-slate-400">stack:</span>{' '}
                      <span className="text-slate-400">[</span>
                      <span className="text-cyan-300">'React'</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-cyan-300">'Node.js'</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-cyan-300">'ASP.NET'</span>
                      <span className="text-slate-400">, </span>
                      <span className="text-cyan-300">'MySQL'</span>
                      <span className="text-slate-400">],</span>
                    </div>

                    <div>
                      <span className="text-slate-400">motto:</span>{' '}
                      <span className="text-emerald-300 italic">"Learn to build. Build to serve."</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400">{'}'};</span>
                  </div>

                  {/* Live Interactive Console Output Line with second typewriter */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-cyan-400 font-semibold text-xs">
                      <span>&gt;</span>
                      <span className="text-slate-300">kidist.getCurrentMission()</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-cyan-300 text-xs flex items-center justify-between min-h-[38px]">
                      <div className="flex items-center gap-2 truncate">
                        <Terminal size={14} className="text-cyan-400 shrink-0" />
                        <span className="truncate">{terminalText}</span>
                      </div>
                      <span className="w-1.5 h-3.5 bg-cyan-400 inline-block animate-pulse shrink-0 ml-1" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/30 shadow-lg flex items-center gap-1.5 text-xs font-mono text-cyan-300 hidden sm:flex">
                <Code2 size={14} className="text-cyan-400" />
                <span>Full-Stack Verified</span>
              </div>

              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md border border-indigo-500/30 shadow-lg flex items-center gap-1.5 text-xs font-mono text-indigo-300 hidden sm:flex">
                <Database size={14} className="text-indigo-400" />
                <span>Relational DB &amp; APIs</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-300 mt-1">{stat.label}</p>
              <p className="text-xs text-slate-400 mt-0.5">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
