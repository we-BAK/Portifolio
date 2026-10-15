import { useState } from 'react';
import { 
  Code2, FileCode2, Cpu, Database, Layout, Atom, Server, Layers, 
  Workflow, Palette, Zap, Network, Terminal, HardDrive, GitBranch, 
  TerminalSquare, Boxes, Send, Monitor, Share2, Lock, ClipboardCheck, 
  Box, RefreshCw, Smartphone, Sparkles, Bot, CheckCircle
} from 'lucide-react';
import SectionTitle from './SectionTitle';
import { SKILL_CATEGORIES } from '../constants/data';

const SKILL_ICONS = {
  Code2, FileCode2, Cpu, Database, Layout, Atom, Server, Layers,
  Workflow, Palette, Zap, Network, Terminal, HardDrive, GitBranch,
  TerminalSquare, Boxes, Send, Monitor, Share2, Lock, ClipboardCheck,
  Box, RefreshCw, Smartphone, Sparkles, Bot
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          eyebrow="Technical Stack & Expertise"
          title="Battle-tested tools, languages, and architectures."
          copy="A balanced toolkit spanning modern frontend interfaces, resilient backend servers, relational databases, Linux operations, and AI tooling."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-white text-base tracking-tight">
                    {catGroup.category}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {catGroup.description}
                </p>

                {/* Skills inside group */}
                <div className="space-y-2.5">
                  {catGroup.skills.map((skill, sIdx) => {
                    const IconComponent = SKILL_ICONS[skill.icon] || CheckCircle;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-white/5 hover:border-cyan-500/20 hover:bg-slate-950 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="text-cyan-400 p-1 bg-cyan-500/10 rounded-md">
                            <IconComponent size={15} />
                          </div>
                          <span className="text-xs font-medium text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>Verified in production</span>
                <span className="text-emerald-400">● Active</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
