import { useState } from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Check, Copy } from 'lucide-react';
import { PROFILE, EXPERIENCE, EDUCATION, SKILL_CATEGORIES, PROJECTS, CERTIFICATES, ACHIEVEMENTS, LANGUAGES } from '../constants/data';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-slate-700/80 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <h3 className="font-semibold text-white text-sm sm:text-base">
              Kidist Hailemichael — Official Curriculum Vitae
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-700/80 hover:bg-slate-700 rounded-lg transition-colors"
              title="Copy Email"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors"
              title="Print or Save PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors ml-1"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-900 text-slate-200 text-sm leading-relaxed" id="cv-print-content">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {PROFILE.name.toUpperCase()}
            </h1>
            <p className="text-cyan-400 font-medium text-base mt-1">
              Software Developer | Full-Stack &amp; Web Developer
            </p>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-y-2 gap-x-4 mt-3 text-xs sm:text-sm text-slate-400 font-mono">
              <span className="inline-flex items-center gap-1">
                <MapPin size={14} className="text-cyan-400" /> {PROFILE.location}
              </span>
              <span>•</span>
              <a href={PROFILE.phoneHref} className="hover:text-cyan-300 transition-colors">
                {PROFILE.phone}
              </a>
              <span>•</span>
              <a href={`mailto:${PROFILE.email}`} className="hover:text-cyan-300 transition-colors">
                {PROFILE.email}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-xs text-slate-400">
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                linkedin.com/in/kidist-hailemichael <ExternalLink size={12} />
              </a>
              <span>•</span>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                github.com/we-BAK <ExternalLink size={12} />
              </a>
              <span>•</span>
              <a href={PROFILE.leetcode} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline inline-flex items-center gap-1">
                leetcode.com/u/we-bak <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {PROFILE.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <strong className="text-white block mb-1">Languages:</strong>
                <span className="text-slate-300">JavaScript (ES6+), Python, C++, SQL, PL/SQL, HTML5, CSS3</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <strong className="text-white block mb-1">Frameworks &amp; Libraries:</strong>
                <span className="text-slate-300">React, ASP.NET MVC, Node.js, Express.js, Tailwind CSS</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <strong className="text-white block mb-1">Databases &amp; Cloud:</strong>
                <span className="text-slate-300">MySQL, Supabase, Relational Database Design, PostgreSQL</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                <strong className="text-white block mb-1">Tools &amp; Platforms:</strong>
                <span className="text-slate-300">Git, GitHub, VS Code, Ubuntu Linux, Postman, Docker</span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 sm:col-span-2">
                <strong className="text-white block mb-1">Engineering Concepts:</strong>
                <span className="text-slate-300">
                  REST APIs, Authentication &amp; Authorization (RBAC), Database Design, Responsive Design, Agile Development, OOP, Requirement Analysis
                </span>
              </div>
              <div className="bg-slate-800/60 p-3 rounded-lg border border-slate-700/50 sm:col-span-2">
                <strong className="text-white block mb-1">AI-Assisted Development:</strong>
                <span className="text-slate-300">Claude, GitHub Copilot, Prompt Engineering for Code</span>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-4">
              WORK EXPERIENCE
            </h2>
            <div className="space-y-5">
              {EXPERIENCE.map((exp) => (
                <div key={exp.id} className="border-l-2 border-cyan-500/40 pl-4 py-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-bold text-white text-base">{exp.role}</h3>
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-medium">{exp.org} — {exp.location}</p>
                  <ul className="mt-2 space-y-1 text-xs text-slate-300 list-disc pl-4">
                    {exp.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-4">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-bold text-white text-sm">
                      {proj.title} <span className="text-slate-400 font-normal">| {proj.role}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">{proj.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 bg-slate-900 text-cyan-300 rounded border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-3">
              EDUCATION
            </h2>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-bold text-white text-base">{edu.degree}</h3>
                  <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                </div>
                <p className="text-sm text-slate-300">{edu.institution} — {edu.location}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-xs font-semibold">
                  <span className="text-emerald-400">Cumulative GPA: {edu.gpa}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-cyan-400">Exit Exam Score: {edu.exitExam}</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  <strong className="text-slate-300">Relevant Coursework:</strong> {edu.coursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-3">
              CERTIFICATIONS &amp; CREDENTIALS
            </h2>
            <div className="space-y-2.5">
              {CERTIFICATES.map((cert) => (
                <div key={cert.id} className="text-xs flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-slate-700/40 gap-1.5">
                  <div>
                    <span className="font-bold text-white">{cert.title}</span> — <span className="text-slate-400">{cert.issuer}</span>
                    <p className="text-[11px] text-slate-400 mt-0.5">{cert.description}</p>
                  </div>
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:underline font-mono text-[11px] shrink-0 inline-flex items-center gap-1"
                    >
                      Verify <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="text-emerald-400 font-mono text-[11px] shrink-0">Community Verified</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Languages */}
          <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800 pt-6">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-2">
                KEY ACHIEVEMENTS
              </h2>
              <ul className="text-xs space-y-1.5 text-slate-300 list-disc pl-4">
                {ACHIEVEMENTS.map((ach) => (
                  <li key={ach.id}><strong className="text-white">{ach.title}:</strong> {ach.desc}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-cyan-400 mb-2">
                LANGUAGES
              </h2>
              <div className="space-y-1.5 text-xs">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center p-2 rounded bg-slate-800/50">
                    <span className="font-semibold text-white">{lang.name}</span>
                    <span className="text-slate-400 font-mono">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
