import { useEffect, useState } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';
import { scrollToId } from '../utils/scroll';
import { PROFILE } from '../constants/data';

const NAV_LINKS = [
  { name: 'About', target: 'about' },
  { name: 'Skills', target: 'skills' },
  { name: 'Experience', target: 'experience' },
  { name: 'Projects', target: 'projects' },
  { name: 'Certificates', target: 'certificates' },
  { name: 'Education', target: 'education' },
  { name: 'Contact', target: 'contact' },
];

export default function Navbar({ onOpenResume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-emerald-400 p-[1.5px] shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-bold font-mono text-cyan-400 text-base">
              KH
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white tracking-tight text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                {PROFILE.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Software &amp; Web Developer
            </p>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              type="button"
              onClick={() => handleNavClick(link.target)}
              className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 rounded-xl transition-all hover:border-cyan-500/40"
          >
            <FileText size={14} className="text-cyan-400" />
            <span>Interactive CV</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-xl shadow-md shadow-cyan-500/25 transition-all hover:scale-[1.02]"
          >
            <Send size={13} />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onOpenResume}
            className="p-2 text-slate-300 bg-slate-800/80 border border-white/10 rounded-lg text-xs"
            title="View CV"
          >
            <FileText size={16} className="text-cyan-400" />
          </button>

          <button
            type="button"
            className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-800/80 border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl px-5 py-5 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => handleNavClick(link.target)}
                className="text-left px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 rounded-lg hover:bg-white/5 transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 border border-white/10 text-sm font-medium text-white"
            >
              <FileText size={16} className="text-cyan-400" /> View / Print Complete CV
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 text-sm font-medium text-white shadow-md shadow-cyan-500/20"
            >
              <Send size={15} /> Contact Kidist
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
