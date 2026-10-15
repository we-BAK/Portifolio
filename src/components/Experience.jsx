import { Briefcase, Calendar, MapPin, Building, ChevronRight, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { EXPERIENCE } from '../constants/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          eyebrow="Career Timeline & Roles"
          title="Professional engineering, internships, and mentorship."
          copy="A hands-on trajectory through production software development, paid industry internship, and extensive technical tutoring."
        />

        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {EXPERIENCE.map((item, idx) => (
            <div key={item.id} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-sm shadow-cyan-400" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/30 transition-all shadow-xl">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-semibold">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-400 mb-4">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Building size={14} className="text-cyan-400" />
                    {item.org}
                  </span>
                  <span>•</span>
                  <span className="text-cyan-400 font-mono">{item.type}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} /> {item.location}
                  </span>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                {item.tech && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-slate-800">
                    <span className="text-[11px] font-mono text-slate-500 mr-2">Environment:</span>
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
