import { Sparkles, Terminal, Database, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { HIGHLIGHTS } from '../constants/data';

const ICON_MAP = {
  Terminal: Terminal,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Users: Users,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          eyebrow="Philosophy & Purpose"
          title="Technology designed to serve people and solve real problems."
          copy="Guided by the conviction that software finds its greatest value when built with empathy, continuous learning, and meaningful purpose."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Philosophy Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-cyan-950/25 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-mono font-medium">
                <Sparkles size={14} className="text-cyan-400" />
                <span>Core Philosophy</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                “Learn to build. Build to serve. Serve to make a difference.”
              </blockquote>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                I believe technology should ultimately serve people. My goal is to keep learning and use what I build to solve meaningful problems and contribute to a better world.
              </p>

              <div className="pt-4 border-t border-slate-800/80">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every system I architect begins by understanding the real human workflows behind it. By combining continuous self-directed learning with clean, resilient engineering, I focus on building software that genuinely improves daily operations and user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 px-1">
              CORE ENGINEERING PRACTICES
            </h3>

            {HIGHLIGHTS.map((item, idx) => {
              const Icon = ICON_MAP[item.icon] || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-slate-900 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
