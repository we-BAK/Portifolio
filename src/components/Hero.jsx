import { ArrowDownRight, FileText, Send, MapPin, Github, Linkedin, Mail, Phone, ExternalLink, Code2, Database, Layers } from 'lucide-react';
import portrait from '../assets/kid-r.png';
import { PROFILE, STATS } from '../constants/data';
import { scrollToId } from '../utils/scroll';

export default function Hero({ onOpenResume }) {
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
            {/* Name & Titles */}
            <div>
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-cyan-400 font-semibold mb-2">
                FULL-STACK &amp; WEB DEVELOPER · HAWASSA, ETHIOPIA
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
                Hi, I'm{' '}
                <span className="gradient-text-cyan">
                  {PROFILE.name}
                </span>
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

          {/* Right Column: Portrait Card with Glassmorphic Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Glowing Frame Behind Image */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 rounded-3xl blur-xl opacity-35 group-hover:opacity-60 transition duration-1000 -z-10" />

              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/60 shadow-2xl p-4 sm:p-5">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/80 to-slate-950 flex items-end justify-center">
                  <img
                    src={portrait}
                    alt={`${PROFILE.name} — Software Developer`}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Bottom Tag inside photo */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">{PROFILE.name}</p>
                      <p className="text-[11px] text-cyan-400 font-mono">B.Sc. Computer Science (3.82 GPA)</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Verified
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-lg flex items-center gap-2 text-xs font-mono text-cyan-300 hidden sm:flex">
                <Code2 size={15} className="text-cyan-400" />
                <span>React + Node.js</span>
              </div>

              {/* Floating Tech Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/30 shadow-lg flex items-center gap-2 text-xs font-mono text-indigo-300 hidden sm:flex">
                <Database size={15} className="text-indigo-400" />
                <span>ASP.NET &amp; MySQL</span>
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
