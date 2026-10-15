import { Github, Linkedin, Mail, Phone, ArrowUp, Heart } from 'lucide-react';
import { PROFILE } from '../constants/data';
import { scrollToId } from '../utils/scroll';

export default function Footer({ onOpenResume }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[1.5px]">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                KH
              </div>
            </div>
            <div>
              <p className="font-bold text-white text-sm">{PROFILE.name}</p>
              <p className="text-xs text-slate-400 font-mono">Software Developer · Hawassa, Ethiopia</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PROFILE.leetcode}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 font-mono text-xs font-bold transition-colors"
              title="LeetCode"
            >
              &lt;/&gt;
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              title="Email"
            >
              <Mail size={16} />
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
            >
              CV / Resume
            </button>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <p>© {currentYear} {PROFILE.name}. Built with React, Tailwind CSS &amp; clean engineering practices.</p>
        </div>

      </div>
    </footer>
  );
}
